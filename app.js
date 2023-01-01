const express = require('express')
const app = express()
const port = 3000
const database = require('./server/database/connection')
const morgan = require('morgan')
require('dotenv').config()

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set(morgan('tiny'))

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

const databaseConnection = async () => {
    try {
        await database(process.env.DATABASE_URL)
        app.listen(process.env.PORT || port, console.log(`Connected to the server on port ${port}`))
    } catch(error) {
        console.log(error)
    }
}

databaseConnection()

app.use('/',require('./server/routes/routes'))