const axios = require('axios');

exports.uploadFotos = async (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  res.json({ msg: "Upload de fotos bem sucedido" });
}

exports.criarPublicacao = async (req, res, next) => {
  //return res.send([req.body, req.files]);
  //const categoria = await axios.get(`http://localhost:3000/api/categoria/nome/${req.body.categoria}`);
  //if(req.body.tipo_negociacao == "troca") req.body.preco = 0;
  let foto = {};
  for (let i = 0; i < 6; i++) {
    if (req.files[i] != null) {
      foto['foto' + (i + 1)] = req.files[i].filename;
    } else {
      foto['foto' + (i + 1)] = 'default-image.png';
    }
  }
  const publicacao = {
    id_usuario: req.session.usuario.id,
    titulo: req.body.titulo,
    descricao_produto: req.body.descricao_produto,
    tipo_negociacao: req.body.tipo_negociacao,
    preco: parseFloat(req.body.preco), //testar passando tipo_negociacao = "troca" e preco = 1000
    id_categoria: parseInt(req.body.id_categoria),
    descricao_vendedor: req.body.descricao_vendedor,
    foto1: foto.foto1,
    foto2: foto.foto2,
    foto3: foto.foto3,
    foto4: foto.foto4,
    foto5: foto.foto5,
    foto6: foto.foto6,
  };

  const url = 'http://localhost:3000/api/publicacao/cadastrar-publicacao';

  try {
    const resultado = await axios.post(url, publicacao, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    if (resultado.data.status == 200) {
      console.log('Publicação criada com sucesso!\n' + resultado.data);
      res.redirect('/painel-usuario/publicacoes');
    } else {
      console.log('Falha na criação.\nErro: ' + err);
      res.redirect('/painel-usuario/nova-publicacao');
    }
    //console.log('Publicação criada com sucesso!\n' + resultado.data);
    //res.redirect('/painel-usuario/publicacoes');
  } catch (err) {
    console.log('Falha na criação da publicação.\nErro: ' + err);
    res.redirect('/painel-usuario/nova-publicacao');
  }
  //next();
}
exports.renderNovaPublicacao = (req, res) => {
  res.render('nova-publicacao');
}