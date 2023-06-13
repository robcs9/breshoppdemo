const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/publicacao');

router.get('/', controller.getTodosPublicacao);
router.post('/cadastrar-publicacao', urlencodedParser, controller.cadastrarPublicacao);
router.get('/:id', controller.getPublicacaoPorId);
router.get('/:nome', controller.getPublicacaoPorTitulo);
router.delete('/excluir-publicacao', urlencodedParser, controller.excluirPublicacao);
router.delete('/limpar-publicacao', controller.limparTodos);
router.post('/popular-publicacao', controller.inserirTodos);
router.put('/recriar-publicacao', controller.recriarTabela);
router.put('/alterar-publicacao', controller.alterarTabela);

module.exports = router;