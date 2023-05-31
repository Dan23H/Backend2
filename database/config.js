const mongoose = require('mongoose')

const databaseConn = async() => {
    try {
        mongoose.connect(process.env.DB_CONNECTION, {
            autoIndex: true
        })
        console.log('MongoDB is Online')
    } catch(error) {
        console.log(error)
        throw new Error('Error connecting MongoDB')
    }
}
module.exports = { databaseConn }