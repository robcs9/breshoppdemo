const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/autenticacao');


router.post('/', urlencodedParser, controller.fazerLogin);

module.exports = router;