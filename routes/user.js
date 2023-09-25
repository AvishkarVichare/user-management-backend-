const express = require('express');
const { getUserController, createUserController, deleteUserController, editUserCotroller } = require('../controller/user.controller');
const router = express.Router();

router.get('/get', getUserController);
router.post('/create', createUserController);
router.put('/edit/:id', editUserCotroller);
router.delete('/delete/:id', deleteUserController);

module.exports = router;