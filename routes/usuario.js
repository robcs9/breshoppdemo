const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/usuario');

router.get('/', controller.getTodosUsuario);
router.post('/cadastrar-usuario', urlencodedParser, controller.cadastrarUsuario);
router.patch('/atualizar-usuario', urlencodedParser, controller.setUsuario);
//router.patch('/finalizar-publicacao', urlencodedParser, controller.finalizarPublicacao);
router.get('/:id', controller.getUsuarioPorId);
router.get('/:email', controller.getUsuarioPorEmail);
router.delete('/limpar-usuario', controller.limparTodos);
router.post('/popular-usuario', controller.inserirTodos);
router.put('/recriar-usuario', controller.recriarTabela);
router.put('/alterar-usuario', controller.alterarTabela);

module.exports = router;