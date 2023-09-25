const express = require('express');
const { getUserController, createUserController } = require('../controller/user.controller');
const router = express.Router();

router.get('/get', getUserController);
router.post('/create', createUserController);
router.put('/edit');
router.delete('/delete');

module.exports = router;