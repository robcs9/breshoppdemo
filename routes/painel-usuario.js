const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/painel-usuario');
const novaPublicacaoController = require('../controllers/nova-publicacao');
const auth = require('../controllers/auth');

router.get('/', controller.autenticarUsuario, controller.getUsuario, controller.crumbsInicio, controller.renderPainelUsuario);
// implementar controller.atualizarPerfil
router.get('/perfil', controller.autenticarUsuario, controller.getUsuario, controller.crumbsPerfil, controller.renderPerfil);
router.get('/publicacoes', controller.autenticarUsuario, controller.getUsuario, controller.getPublicacoesDeUsuario, controller.crumbsPublicacoes, controller.renderPublicacoes);
router.get('/nova-publicacao', controller.autenticarUsuario, controller.getUsuario, controller.listarCategorias, controller.crumbsNovaPublicacao, controller.renderNovaPublicacao);

// Forms com uploads
// route to be created: router.post("/upload_fotos", upload.array("files"), uploadFotos);
// route to be created: router.post("/upload_avatar", upload.single("file"), uploadAvatar);
// Note that the files argument depends on the name of the input specified in formData.
const multer = require("multer");
const upload = multer({ dest: "public/img/" });
router.post('/nova-publicacao-form', auth.autenticarUsuario, upload.array('fotos', 6), novaPublicacaoController.criarPublicacao); // multer, uploadFotos
//router.post('/upload', file.multiple, novaPublicacaoController.criarPublicacao)

//router.post('/atualizar-perfil', controller.atualizarPerfil);
//router.get('/editar-publicacao/:id', controller.crumbsEditarPublicacao, controller.renderEditarPublicacao);

module.exports = router;