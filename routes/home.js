const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
//const controller = require('../controllers/home');

router.get('/', (req, res) => res.render('home'));
//router.post('/entrar', urlencodedParser, controller.fazerLogin);
//router.post('/', urlencodedParser, controller.fazerLogin);
// nova rota para deslogar /logout

module.exports = router;