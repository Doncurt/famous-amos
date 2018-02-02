const express = require('express');
const router = express.Router();
const model = require('../db/models/');
const pets = require('../json/pets');

//INDEX GET ROUTE
router.get('/', (req, res) => {
  req.flash('info', 'Welcome To Famous Amos!');
    model.Pet.findAll().then(pets => {
        res.render('pets-index', { pets,term: "" });

    });

});



module.exports = router;
