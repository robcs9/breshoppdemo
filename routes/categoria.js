const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/categoria');

router.get('/', controller.getTodosCategoria);
router.post('/cadastrar-categoria', urlencodedParser, controller.cadastrarCategoria);
router.get('/id/:id', controller.getCategoriaPorId);
//router.get('/nome/:nome', controller.getCategoriaPorNome);
router.get('/nome/:nome', controller.getPublicacoesDaCategoriaPorNome);
router.patch('/atualizar-categoria', urlencodedParser, controller.setCategoria);
router.delete('/excluir-categoria', urlencodedParser, controller.excluirCategoria);
router.delete('/limpar-categoria', controller.limparTodos);
router.post('/popular-categoria', controller.inserirTodos);
router.put('/recriar-categoria', controller.recriarTabela);
router.put('/alterar-categoria', controller.alterarTabela);

router.get('/:id', controller.getPublicacoesDaCategoria);
//router.get('/:nome', controller.getPublicacoesDaCategoriaPorNome);

module.exports = router;