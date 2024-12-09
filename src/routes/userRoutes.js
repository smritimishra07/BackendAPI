const express = require('express');
const { getUsers } = require('../controllers/userController');

const router = express.Router();

// Route to fetch users
router.get('/users', getUsers);

module.exports = router;
