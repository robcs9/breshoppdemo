const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/registro');

router.get('/', controller.registro);
router.post('/', urlencodedParser, controller.registrarUsuario);

module.exports = router;