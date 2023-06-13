const express = require('express');
const router = express.Router();
const controller = require('../controllers/fotos');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });

router.get('/', controller.getTodosFotos);
router.get('/:id', controller.getFotosById);
//router.get('/publicacao/:id', controller.getFotosPorIdDePublicacao);
router.post('/cadastrar-fotos', urlencodedParser, controller.cadastrarFotos);
router.patch('/atualizar-fotos', urlencodedParser, controller.setFotos)
router.delete('/excluir-fotos', urlencodedParser, controller.excluirFotos);
router.delete('/limpar-fotos', controller.limparTodos);
router.post('/popular-fotos', controller.inserirTodos);
router.put('/recriar-fotos', controller.recriarTabela);
router.put('/alterar-fotos', controller.alterarTabela);

module.exports = router;

