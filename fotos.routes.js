const express = require('express');
const router = express.Router();
const fotosController = require('./fotos.controller');

router.get('/', fotosController.getTodasFotos);
router.get('/id/:id', fotosController.getFotosById);
//router.get('/id/:id', (req,res) => res.send(req.params));
//router.get('/publicacao/:id/fotos/', fotosController.getFotosByPubliId);

module.exports = router;

