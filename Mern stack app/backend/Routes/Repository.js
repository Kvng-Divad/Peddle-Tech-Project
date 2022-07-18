const router = require('express').Router();
let Repository = require('../models/Repo-model');

router.route('/github').get((req, res) => {
    Repository.find()
    .then( repository => res.json( repository))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;