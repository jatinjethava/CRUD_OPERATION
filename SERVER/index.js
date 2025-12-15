const express = require('express');
const DB_Connection = require('./database');
const app = express();
const PORT = 8100;
app.use(express.json());

// Connect to the database
DB_Connection(); 