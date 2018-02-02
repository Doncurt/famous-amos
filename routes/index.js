const express = require('express');
const router = express.Router();
const model = require('../db/models/');
const pets = require('../json/pets');

//INDEX GET ROUTE
router.get('/', (req, res) => {
  let limit = 10;   // number of records per page
  let offset = 0;
  model.Pet.findAndCountAll().then((data) => {
    let page = req.params.page;      // page number
    let pages = Math.ceil(data.count / limit);
		offset = limit * (page - 1);
    model.Pet.findAll({
      attributes: ['id', 'name', 'species', 'birthday', 'favoriteFood', "description"],
      limit: limit,
      offset: offset,
      $sort: { id: 1 }
    }).then((pets) => {
      res.render('pets-index', {pets, count: data.count, search: req.query.search, pages});
    });
  })
  .catch(function (error) {
		res.status(500).send('Internal Server Error');
	});
});

module.exports = router;
