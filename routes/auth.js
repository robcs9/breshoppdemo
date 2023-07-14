const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/auth');

// nova rota para deslogar /logout
router.get('/logout', controller.fazerLogout);

module.exports = router;