const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/administrador');

// /admin
router.get('/', controller.getTodosAdmins);
//router.get('/id/:id', controller.getAdminPorId); // "não-seguro"
//router.get('/email/:email', controller.getAdminIdPorEmail); // "não-seguro"
router.get('/buscar-admin', urlencodedParser, controller.getAdminPorEmailForm);
router.post('/cadastrar-admin', urlencodedParser, controller.cadastrarAdmin);
//router.put('/atualizar-admin', controller.setAdmin)
//router.patch('/validar-publicacao', controller.validarPublicacao);
//router.patch('/suspender-usuario', controller.suspenderUsuario)
//router.delete('/excluir-admin', controller.excluirAdmin);
//router.post('/inserir-admins', controller.inserirTodos)
//route.put('/recriar-admins', controller.recriarTodos);
//router.delete('/limpar-admins', controller.limparTodos);

module.exports = router;