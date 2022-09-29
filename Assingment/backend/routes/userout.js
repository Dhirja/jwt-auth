const express = require('express');
const { verify } = require('jsonwebtoken');
const { signup, login, getToken, getUser, ClientSignup} = require('../controller/user-controler');


const router = express.Router();
router.post('/create',ClientSignup)
router.post('/signup', signup);
router.post('/login', login);
router.get("/user", getToken, getUser);
// router.get("/refresh", refreshToken, getToken, getUser);

// veryfy token

module.exports = router;