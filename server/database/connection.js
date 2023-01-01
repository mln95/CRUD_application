const mongoose = require('mongoose')

const databaseConnection = (url) => {
    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = mongoose.connection
        db.once('open',() => {console.log('connected to the database')})
        db.on('error', error => {console.log(error)})
    } catch(error) {
        console.log(error)
    }
}
module.exports = databaseConnection