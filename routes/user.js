const express = require('express');
const { getUserController, createUserController, deleteUserController, editUserCotroller } = require('../controller/user.controller');
const router = express.Router();

router.get('/get', getUserController); //Gets list of users
router.post('/create', createUserController); //Adds user in DB collection 
router.put('/edit/:id', editUserCotroller); // edits existing user 
router.delete('/delete/:id', deleteUserController); //deletes existing user

module.exports = router;