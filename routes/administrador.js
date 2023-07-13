const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/administrador');

router.get('/', controller.getTodosAdmins);
router.post('/buscar-admin', urlencodedParser, controller.getAdminPorEmailForm); // testar
router.post('/cadastrar-admin', urlencodedParser, controller.cadastrarAdmin);
router.patch('/atualizar-admin', urlencodedParser, controller.setAdmin)
//router.patch('/validar-publicacao', urlencodedParser, controller.validarPublicacao); // testar
//router.patch('/suspender-usuario', urlencodedParser, controller.suspenderUsuario); // testar
router.delete('/excluir-admin', urlencodedParser, controller.excluirAdmin);
router.delete('/limpar-admin', controller.limparTodos);
router.post('/popular-admin', controller.inserirTodos);
router.put('/recriar-admin', controller.recriarTabela);
router.put('/alterar-admin', controller.alterarTabela);

module.exports = router;