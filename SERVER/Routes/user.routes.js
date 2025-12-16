const express = require('express');
const router = express.Router();
const { CreateUser, UserList, DeleteUser, UpdateUser } = require('../Controller/user.contoller');

router.post('/addUser', CreateUser);
router.get('/userList', UserList);
router.delete('/deleteUser/:id', DeleteUser);
router.put('/updateUser/:id', UpdateUser);

module.exports = router;

