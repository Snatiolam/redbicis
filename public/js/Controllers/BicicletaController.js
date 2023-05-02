const Bicicleta = require("../model/Bicicleta");

exports.list = async function (req, res) {
    // hola = Bicicleta();
    await Bicicleta.listAll();
    res.render("bicicletas/index", { bicis: Bicicleta.allBicis });
};

exports.apiList = function (req, res) {
    res.json(Bicicleta.allBicis);
};

exports.show = async function (req, res) {
    var bici = await Bicicleta.findById(req.params.id);
    res.render("bicicletas/show", { bici });
};

exports.create_get = function (req, res) {
    res.render("bicicletas/create");
};

exports.create_post = async function (req, res) {
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.lat, req.body.lng);
    await Bicicleta.add(bici);
    res.redirect("/bicicletas");
};

exports.update_get = function (req, res) {
    let bici = Bicicleta.findById(req.params.id);
    res.render("bicicletas/update", { bici });
};

exports.update_post = async function (req, res) {
    var newBici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.lat, req.body.lng);
    await Bicicleta.update(req.params.id, newBici);
    res.redirect("/bicicletas");
};


exports.delete = async function (req, res) {
    await Bicicleta.removeById(req.body.id);
    res.redirect("/bicicletas");
};