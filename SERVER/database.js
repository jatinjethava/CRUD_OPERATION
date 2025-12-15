const mongoose = require('mongoose');

const DB_Connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/CRUD_OPERATON');
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error);
    }
}

module.exports = DB_Connection;