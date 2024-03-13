require('dotenv').config()
const sequelize = require('./db')
const express = require('express')
const models = require('./models/models.js')
const cors = require('cors')
const router = require('./routes/index.js')
const errorHandler = require('./middleware/ErrorHandlingMidlleware.js')


const PORT = process.env.PORT || 5000
const app = express()



app.use(cors())
app.use(express.json())
app.use('/api', router)
app.get('/popa',)
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()