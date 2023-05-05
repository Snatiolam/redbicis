const bicicletaController = require("../public/js/Controllers/BicicletaController");

var express = require('express');
var router = express.Router();
const passport = require('passport');
const CustomStrategy = require('passport-custom').Strategy;
const session = require('express-session');
const request = require('request');

router.get("/", bicicletaController.list);
router.get("/:id/show", bicicletaController.show);
router.get("/create", bicicletaController.create_get);
router.post("/create", bicicletaController.create_post);
router.get("/:id/update", bicicletaController.update_get);
router.post("/:id/update", bicicletaController.update_post);
router.post("/:id/delete", bicicletaController.delete);

router.get('/greetme', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.log('error is', err);
      res.status(500).send('An error has occurred, we cannot greet you at the moment.');
      return;
    }

    if (!user) {
      res.status(401).json({ message: 'No estás autorizado para acceder a este recurso.' });
      return;
    }

    next();
  })(req, res, next);
 }, bicicletaController.list);

module.exports = router;
