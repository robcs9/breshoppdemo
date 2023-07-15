//multer
const multer = require("multer");
const upload = multer({ dest: "public/img/" });
const axios = require('axios');

// route to be created: router.post("/upload_fotos", upload.array("files"), uploadFotos);
// route to be created: router.post("/upload_avatar", upload.single("file"), uploadAvatar);
// Note that the files argument depends on the name of the input specified in formData.

exports.uploadFotos = async (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  res.json({ msg: "Upload de fotos bem sucedido" });
}

/*
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>

const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})

*/

/*
<form action="/stats" enctype="multipart/form-data" method="post">
  <div class="form-group">
    <input type="file" class="form-control-file" name="uploaded_file">
    <input type="text" class="form-control" placeholder="Number of speakers" name="nspeakers">
    <input type="submit" value="Get me the stats!" class="btn btn-default">            
  </div>
</form>

const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
app.post('/stats', upload.single('uploaded_file'), function (req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   console.log(req.file, req.body)
});


 */
// adicionar urlencodedParser à rota 
exports.criarPublicacao = async (req, res, next) => {
  const categoria = await axios.get(`http://localhost:3000/api/categoria/nome/${req.body.categoria}`);
  //if(req.body.tipo_negociacao == "troca") req.body.preco = 0;
  const publicacao = {
    id_usuario: req.session.usuario.data.id,
    titulo: req.body.titulo,
    descricao_produto: req.body.descricao_produto,
    tipo_negociacao: req.body.tipo_negociacao,
    preco: req.body.preco,
    id_categoria: req.body.categoria[0].id,
    descricao_vendedor: req.body.descricao_vendedor,
    foto: {
      foto1: req.body.foto1,
      foto2: req.body.foto2,
      foto3: req.body.foto3,
      foto4: req.body.foto4,
      foto5: req.body.foto5,
      foto6: req.body.foto6,
    }
  };
  const url = 'http://localhost:3000/api/cadastrar-publicacao';
  const resultado = await axios.post(url, publicacao, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
exports.renderNovaPublicacao = (req, res) => {
  res.render('nova-publicacao');
}