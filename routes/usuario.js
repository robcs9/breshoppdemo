const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/usuario');

router.get('/', controller.getTodosUsuario);
router.post('/cadastrar-usuario', urlencodedParser, controller.cadastrarUsuario);
router.patch('/atualizar-usuario', urlencodedParser, controller.setUsuario);
router.post('/buscar-usuario', urlencodedParser, controller.getUsuarioPorEmailForm);
//router.patch('/finalizar-publicacao', urlencodedParser, controller.finalizarPublicacao);
router.get('/id/:id', controller.getUsuarioPorId);
router.delete('/excluir-usuario', urlencodedParser, controller.excluirUsuario);
router.delete('/limpar-usuario', controller.limparTodos);
router.post('/popular-usuario', controller.inserirTodos);
router.put('/recriar-usuario', controller.recriarTabela);
router.put('/alterar-usuario', controller.alterarTabela);

module.exports = router;