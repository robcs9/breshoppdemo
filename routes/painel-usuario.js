const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/painel-usuario');

router.get('/', controller.crumbsInicio, controller.renderPainelUsuario);
router.get('/perfil', controller.renderPainelUsuario);
router.get('/publicacoes', controller.renderPainelUsuario);
router.get('/nova-publicacao', controller.renderPainelUsuario);
router.get('/editar-publicacao/id', controller.renderPainelUsuario);

module.exports = router;