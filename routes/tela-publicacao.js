const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/tela-publicacao');

router.get('/', controller.exibirPublicacao, controller.fotosPublicacao, controller.renderPublicacao);
/*router.get('/', controller.listarCategorias, controller.listarUltimasPublicacoes,
controller.exibirCapaPublicacoes, controller.renderHome);
router.get('/categoria/:id/:nome', controller.listarCategorias, controller.exibirPublicacoesPorCategoria, 
controller.exibirCapaPublicacoes, controller.renderHome);*/


module.exports = router;