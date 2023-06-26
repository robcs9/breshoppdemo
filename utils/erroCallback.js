exports.erroCallback = function (err) {
    /*let msg = "";
    err.errors.forEach(
        (elem) => {
            msg += elem.message + '\n';
        }
    )
    res.send(msg);*/
    const errObj = {};
    err.errors.map(er => {
        //errObj[er.path] = er.message;
        errObj[er.path] = er.message.split('.')[1];
    })
    console.log(err.name);
    console.log(errObj);
    // Verificar códigos de erros do sequelize para erros de foreignkey e "Database Error"
    //console.log(err);
    //if(err.parent.errno == 1062) {
    //    return `Informação de ${Object.keys(err.fields)} já existe.`
    //}
    //if(err.parent.errno == 1452) {
    //    return `Informação de ${err.fields[0].slice(3)} não existente`
    //}
    //return err;
    return errObj;
}
