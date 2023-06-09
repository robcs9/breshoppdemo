const express = require('express');
const app = express();
const fotosController = require('./fotos.controller');
const fotosRoutes = require('./fotos.routes');
const router = express.Router();

//app.get('/', (req,res) => {res.send("the home page is live!")})
app.use('/fotos', fotosRoutes);

app.listen(5000, ()=>console.log("Server started on port 5000"));