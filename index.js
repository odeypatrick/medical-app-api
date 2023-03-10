const http = require('http');
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

// Database
const db = require('./config/db');

// Test DB
const connect = async () => {
    try {
        await db.authenticate();
        console.log('Connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }
}

connect();
    

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

// routes
const patientRoute = require('./routes/api/patient')
const userRoute = require('./routes/api/users')
const vitalsRoute = require('./routes/api/vitals')

app.use('/api', patientRoute)
app.use('/api', userRoute)
app.use('/api', vitalsRoute)

const server = http.Server(app);
const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})