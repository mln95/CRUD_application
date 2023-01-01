const axios = require('axios')

exports.homeRoutes = (req, res) => {
    axios.get("http://localhost:3000/api/v1/task").then(function(response) {
        res.render('index', {task: response.data})
    })
}

exports.updateRoutes = (req ,res) => {
    axios.get('http://localhost:3000/api/v1/task', {params:{id:req.query.id}}).then(function(response) {
        res.render('updatetask', {task : response.data})
    }).catch(err => {
        res.send(err)
    })
}
