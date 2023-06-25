const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/login');

router.get('/', controller.login);
//router.post('/entrar', urlencodedParser, controller.fazerLogin);
router.post('/', urlencodedParser, controller.fazerLogin);
// nova rota para deslogar /logout

module.exports = router;