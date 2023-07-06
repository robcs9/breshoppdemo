const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/painel-usuario');

router.get('/', controller.crumbsInicio, controller.renderPainelUsuario);
router.get('/perfil', controller.getUsuario, controller.crumbsPerfil, controller.renderPainelUsuario);
router.get('/publicacoes', controller.crumbsPublicacoes, controller.renderPainelUsuario);
router.get('/nova-publicacao', controller.crumbsNovaPublicacao, controller.renderPainelUsuario);
router.get('/editar-publicacao/:id', controller.crumbsEditarPublicacao, controller.renderPainelUsuario);
//router.get('/atualizar-perfil', controller.atualizarPerfil);

module.exports = router;