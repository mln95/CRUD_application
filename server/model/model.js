const mongoose = require('mongoose')

const databaseSchema = new mongoose.Schema({
    task : {
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = mongoose.model('Task',databaseSchema)