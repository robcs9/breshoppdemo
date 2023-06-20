exports.erroCallback = function(err) {
    console.log(err);
    /*let msg = "";
    err.errors.forEach(
        (elem) => {
            msg += elem.message + '\n';
        }
    )
    res.send(msg);*/
    return err.name;
}
