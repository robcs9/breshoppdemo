const express = require('express');
const router = express.Router();
const fotosController = require('../controllers/fotos');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
router.post('/test', urlencodedParser,fotosController.testPost);
router.get('/', fotosController.getTodasFotos);
router.get('/id/:id', fotosController.getFotosById);
//router.get('/id/:id', (req,res) => res.send(req.params));
//router.get('/publicacao/:id/fotos/', fotosController.getFotosByPubliId);

module.exports = router;

