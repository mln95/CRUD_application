const Task = require('../model/model')

exports.getAllTasks = async (req, res) => {
    if(req.query.id) {
        const id=req.query.id
        console.log(req.query.id)
        await Task.findById(id).then(data =>{
            if(!data) {
                res.status(404).send({message: `Not found task with id ${id}`})
            } else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({message: error.message || "Error occured while retriving task"})
        })
    } else {
        try {
            const tasks = await Task.find().then(data => {
                res.send(data)
            })
        } catch(error) {
            res.status(500).send({message: error.message || 'Error occured while retriving task'})
        }
    }
}

exports.createTask = async (req, res) => {
    if(!req.body.task) {
        res.status(400).send({message: "Task can not be empty"})
    }
    try {
        const task = await Task.create(req.body)
        res.redirect('/')
    } catch(err) {
        res.status(500).send({message: err.message || 'Error occured while creating task'})
    }
}

exports.updateTask = (req, res) => {
    const id = req.params.id
    Task.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data) {
            res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
        } else {
            res.send(data)
        }
    }).catch(err =>{
        res.status(500).send({ message : "Error Update user information"})
    })
}

exports.deleteTask = (req, res) => {
    const id = req.params.id;

    Task.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}