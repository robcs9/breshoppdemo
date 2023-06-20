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
    if(err.name == "??") {
        
    }

    return err.name;
}
