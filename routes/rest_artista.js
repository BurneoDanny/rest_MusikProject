var express = require('express');
var router = express.Router();
const artistaController = require('../controllers/artista.controller');


router.get('/findAll/json', artistaController.getArtistas);
router.get('/findSongsNumberByArtist/json', artistaController.getSongsNumberByArtist);
router.post('/post/json',artistaController.postArtista);

module.exports = router;