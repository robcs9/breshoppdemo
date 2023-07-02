const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({extended: false});
const router = express.Router();
const controller = require('../controllers/home');

router.get('/', controller.listarCategorias, controller.listarUltimasPublicacoes,
controller.exibirCapaPublicacoes, controller.renderHome);

// testando
//router.get('/categoria/:id/:nome', controller.listarCategorias, controller.exibirPublicacoesPorCategoria, 
//controller.exibirCapaPublicacoes, controller.renderHome);

router.get('/publicacao/:id/:titulo', controller.exibirPublicacao);
//router.post('/entrar', urlencodedParser, controller.fazerLogin);
//router.post('/', urlencodedParser, controller.fazerLogin);
// nova rota para deslogar /logout

module.exports = router;