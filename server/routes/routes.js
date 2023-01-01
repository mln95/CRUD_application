const express = require('express')
const router = express.Router()

const services = require('../services/services')
const controllers = require('../controllers/controllers')

router.get('/', services.homeRoutes)
router.get('/updatetask', services.updateRoutes)


router.get('/api/v1/task',controllers.getAllTasks)
router.post('/api/v1/task', controllers.createTask)
router.patch('/api/v1/task/:id', controllers.updateTask)
router.delete('/api/v1/task/:id', controllers.deleteTask)

module.exports = router