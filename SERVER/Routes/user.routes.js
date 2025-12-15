const express = require('express');
const router = express.Router();
const { CreateUser } = require('../Controller/user.contoller');

router.post('/addUser', CreateUser);

module.exports = router;

