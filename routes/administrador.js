const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/administrador');

// checar quais rotas necessitam do urlencodedParser de fato
// /admin
router.get('/', controller.getTodosAdmins);
//router.get('/id/:id', controller.getAdminPorId); // "não-seguro"
//router.get('/email/:email', controller.getAdminIdPorEmail); // "não-seguro"
router.get('/buscar-admin', urlencodedParser, controller.getAdminPorEmailForm);
router.post('/cadastrar-admin', urlencodedParser, controller.cadastrarAdmin);
router.patch('/atualizar-admin', urlencodedParser, controller.setAdmin)
//router.patch('/validar-publicacao', controller.validarPublicacao);
//router.patch('/suspender-usuario', controller.suspenderUsuario);
router.delete('/excluir-admin', urlencodedParser, controller.excluirAdmin);
router.delete('/limpar-admin', controller.limparTodos);
router.post('/popular-admin', controller.inserirTodos);
router.put('/recriar-admin', controller.recriarTabela);
router.put('/alterar-admin', controller.alterarTabela);

module.exports = router;