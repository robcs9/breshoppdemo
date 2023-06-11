const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/autenticacao');


router.get('/autenticar', urlencodedParser, controller.autenticar);

module.exports = router;