const Bicicleta = require("../../model/Bicicleta");

exports.list = async function (req, res) {
    // hola = Bicicleta();
    lista = await Bicicleta.listAll();
    const listaBici = lista.map(bicicleta => {
        // console.log(bicicleta);
        const nuevaBici = new Bicicleta(bicicleta.id, bicicleta.color, bicicleta.modelo, bicicleta.lat, bicicleta.lng);
        console.log(nuevaBici);
        return nuevaBici;
    });
    // console.log("Api: ----");
    // console.log(listaBici);
    res.json(lista);
};

exports.show = function (req, res) {
    var bici = Bicicleta.findById(req.params.id);
    res.json(bici);
};

exports.create = function (req, res) {
    console.log(req.body);
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];
    Bicicleta.add(bici);
    res.json(bici.id);
};

exports.update = function (req, res) {
    var newBici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    newBici.ubicacion = [req.body.lat, req.body.lng];
    Bicicleta.update(req.params.id, newBici);
    res.json(newBici.id);
};


exports.delete = function (req, res) {
    Bicicleta.removeById(req.params.id);
    res.sendStatus(200);
    //res.redirect("/bicicletas");
};