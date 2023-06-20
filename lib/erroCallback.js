exports.erroCallback = function(err) {
    console.log(err);
    /*let msg = "";
    err.errors.forEach(
        (elem) => {
            msg += elem.message + '\n';
        }
    )
    res.send(msg);*/

    // Verificar códigos de erros do sequelize para erros de foreignkey e "Database Error"
    if(err.parent.errno == 1062) {
        return `Informação de ${Object.keys(err.fields)} já existe.`
    }
    if(err.parent.errno == 1452) {
        return `Informação de ${err.fields[0].slice(3)} não existente`
    }

    return err;
}
