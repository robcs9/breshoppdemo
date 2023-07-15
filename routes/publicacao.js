const express = require('express');
const urlencodedParser = require('body-parser').urlencoded({ extended: false });
const router = express.Router();
const controller = require('../controllers/publicacao');

const multer = require('multer');
const upload = multer({ dest: "public/img/" });

// API
router.get('/', controller.getTodosPublicacao);
//router.post('/cadastrar-publicacao', upload.array('fotos', 6), controller.cadastrarPublicacao);
router.post('/cadastrar-publicacao', urlencodedParser, controller.cadastrarPublicacao);
router.get('/id/:id', controller.getPublicacaoPorId);
router.get('/titulo/:titulo', controller.getPublicacaoPorTitulo);
router.patch('/atualizar-publicacao', urlencodedParser, controller.setPublicacao);
router.delete('/excluir-publicacao', urlencodedParser, controller.excluirPublicacao);
router.delete('/limpar-publicacao', controller.limparTodos);
router.post('/popular-publicacao', controller.inserirTodos);
router.put('/recriar-publicacao', controller.recriarTabela);
router.put('/alterar-publicacao', controller.alterarTabela);


module.exports = router;