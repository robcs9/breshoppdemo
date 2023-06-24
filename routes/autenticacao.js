const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/autenticacao');

router.post('/logar', urlencodedParser, controller.fazerLogin);
router.post('/registrar', urlencodedParser, controller.registrarUsuario);

module.exports = router;