const routes = require('express').Router();
const temples = require('../controllers/temple.js');

routes.get('/', temples.findAll);
routes.get('/:temple_id', temples.findOne);

routes.post('/', temples.create);

routes.delete('/', temples.deleteAll);

routes.delete('/:id', temples.delete);

routes.get('/published', temples.findAllPublished);

routes.put('/:id', temples.update);

module.exports = routes;
