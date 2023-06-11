//Test
exports.testPost = (req, res) => {
    let id = req.body.id;
    res.send(req.body);
}
// GET /fotos/:id
exports.getFotosById = (req, res) => {
    fotos.forEach((elem) => {
        if(elem.id == req.params.id) {
            res.json(elem);
        }
    });
};
//exports.getFotosByPubliId = ;

exports.getTodasFotos = (req, res) => {
    res.json(fotos);
    console.log('all photos sent');
    /*fotos.findAll().then(
        (r) => {
            res.json(r);
            console.log('all good')
        }
    ).catch(
        (e) => {
            res.send(e.message);
            console.log('error')
        }
    );*/
};

const fotos = [
    {
        "id": 1,
        "foto1": "f1.jpg",
        "foto2": "f2.jpg",
        "foto3": "f3.jpg",
        "foto4": "f4.jpg",
        "foto5": "f5.jpg",
        "foto6": "f6.jpg"
    },
    {
        "id": 2,
        "foto1": "f7.jpg",
        "foto2": "f8.jpg",
        "foto3": "f9.jpg",
        "foto4": "f10.jpg",
        "foto5": "f11.jpg",
        "foto6": "f12.jpg"
    }
];