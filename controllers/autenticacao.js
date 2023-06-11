const db = require("../models");

exports.fazerLogin = async (req, res) => {
    const admin = await db.administrador.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });
    const usuario = await db.usuario.findOne({
        where: {
            email: req.body.email,
            senha: req.body.senha
        }
    });

    if(admin) {
        res.json({ "isAdmin": "true" });
    } else if(usuario) {
        res.json({ "isAdmin": "false" });
    } else {
        res.sendStatus(400);
    }
};