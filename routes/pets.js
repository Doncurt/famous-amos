const express = require('express');
const router = express.Router();

const comments = require('../json/comments');
const model = require('../db/models/');
const Pet = require('../db/models/');

//SEARCH
//due to how javascript works with top- down processing search must be at the top
router.get('/search', (req, res) => {
  model.Pet.findAll({
         where: {
             name: {
               //Ilike vs like to make it case insensative
                 $iLike: "%" + req.query.term + "%"
             }
         }
     }).then((pets) => {
         res.render('pets-index', { pets: pets, term: req.query.term })
     })
 });

// INDEX
router.get('/', (req, res) => {
  //Uses PET model to  find all the pet uobjects then posts
    Pet.findAll().then(pets =>
      {res.send(pets);});

});
// NEW
router.get('/new', (req, res) => {
  res.render('pets-new');
});


// SHOW
router.get('/:petId', (req, res) => {
  model.Pet.findById(req.params.petId, {
      include: {
          model: model.Comment,
      },
      order: [
          [ model.Comment, 'id', 'DESC']
      ]
  }).then(pet => {
      res.render('pets-show', { pet });
  });
});

// CREATE
router.post('/', (req, res) => {
    model.Pet.create(req.body);
    res.redirect('/');
});

// EDIT
router.get('/:petId/edit', (req, res) => {
    model.Pet.findById(req.params.petId).then(pet => {
        res.render('pets-edit', { pet });
    });
});

// UPDATE
router.put('/:petId', (req, res) => {
    model.Pet.findById(req.params.petId).then(pet => {
        return pet.update(req.body);
    }).then(() => {
        res.redirect(`/pets/${req.params.petId}`);
    }).catch((err) => {
        res.send(err);
    });
});


// DESTROY
router.delete('/:petId', (req, res) => {
  res.redirect('/');
});




module.exports = router;
