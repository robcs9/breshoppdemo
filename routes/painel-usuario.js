const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/painel-usuario');

router.get('/', controller.autenticarUsuario, controller.getUsuario, controller.crumbsInicio, controller.renderPainelUsuario);
router.get('/perfil', controller.autenticarUsuario, controller.getUsuario, controller.crumbsPerfil, controller.renderPerfil);
router.get('/publicacoes', controller.autenticarUsuario, controller.getUsuario, controller.getPublicacoesDeUsuario, controller.crumbsPublicacoes, controller.renderPublicacoes);
//router.get('/nova-publicacao', controller.crumbsNovaPublicacao, controller.renderNovaPublicacao);
//router.get('/editar-publicacao/:id', controller.crumbsEditarPublicacao, controller.renderEditarPublicacao);
//router.post('/atualizar-perfil', controller.atualizarPerfil);

module.exports = router;