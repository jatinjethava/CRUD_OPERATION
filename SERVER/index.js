const express = require('express');
const DB_Connection = require('./database');
const userRoutes = require('./Routes/user.routes');
const PORT = 8100;
const app = express();
app.use(express.json());

// Connect to the database
DB_Connection();

app.get('/', (req, res) => {
    res.send("Welcome to the CRUD Application");
});

app.use('/user', userRoutes);
// for user routes only 


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})