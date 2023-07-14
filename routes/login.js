const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/login');
const auth = require('../controllers/auth');
router.get('/', controller.renderLogin);
//router.post('/entrar', urlencodedParser, controller.fazerLogin);
//router.post('/', urlencodedParser, controller.fazerLogin);
// nova rota para deslogar /logout
router.get('/logout', auth.fazerLogout);
router.post('/', urlencodedParser, controller.fazerLogin1, controller.renderLogin);

module.exports = router;