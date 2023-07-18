const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/painel-usuario');
const novaPublicacaoController = require('../controllers/nova-publicacao');
const auth = require('../controllers/auth');
const multer = require("multer");
const upload = multer({ dest: "public/img/" });

router.get('/', controller.autenticarUsuario, controller.getUsuario, controller.crumbsInicio, controller.renderPainelUsuario);
router.get('/perfil', controller.autenticarUsuario, controller.getUsuario, controller.crumbsPerfil, controller.renderPerfil);
router.get('/publicacoes', controller.autenticarUsuario, controller.getUsuario, controller.getPublicacoesDeUsuario, controller.crumbsPublicacoes, controller.renderPublicacoes);
router.get('/nova-publicacao', controller.autenticarUsuario, controller.getUsuario, controller.listarCategorias, controller.crumbsNovaPublicacao, controller.renderNovaPublicacao);

router.get('/editar-publicacao/:id', controller.autenticarUsuario, controller.getUsuario, controller.getPublicacao, controller.listarCategorias, controller.crumbsEditarPublicacao, controller.renderEditarPublicacao);

router.get('/excluir-publicacao/:id', controller.autenticarUsuario, controller.getPublicacao, controller.excluirPublicacao);

// Forms com uploads
router.post('/nova-publicacao-form', auth.autenticarUsuario, upload.array('fotos', 6), novaPublicacaoController.criarPublicacao);
router.post('/atualizar-perfil-form', auth.autenticarUsuario, upload.single('avatar'), controller.atualizarPerfil);
router.post('/editar-publicacao-form', auth.autenticarUsuario, upload.array('fotos', 6), controller.atualizarPublicacao);

module.exports = router;