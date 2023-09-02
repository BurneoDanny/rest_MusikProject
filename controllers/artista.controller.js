

const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const artista = require('../models').artista;

const getArtistas = function(req, res, next) {  
    artista.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

};

const getSongsNumberByArtist = function (req, res, next) {
  const sqlQuery = `
    SELECT 
      a.idArtista,
      a.nombre,
      COUNT(c.idCancion) AS numeroDeCanciones
    FROM
      artista a
    LEFT JOIN
      cancion c ON a.idArtista = c.Artista_idArtista
    GROUP BY
      a.idArtista, a.nombre
    HAVING
      COUNT(c.idCancion) > 0
  `;

  sequelize
    .query(sqlQuery, { type: sequelize.QueryTypes.SELECT })
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).send('Error en la consulta');
    });
};


module.exports = {getArtistas, getSongsNumberByArtist};