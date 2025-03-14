const routes = require('express').Router();
const temples = require('../controllers/temple.js');

/**
 * @swagger
 * tags:
 * name: Temples
 * description: API to manage temples.
 */

/**
 * @swagger
 * /temples:
 * get:
 * summary: Retrieve a list of temples.
 * tags: [Temples]
 * security:
 * - apiKeyAuth: []
 * responses:
 * 200:
 * description: A list of temples.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Temple'
 * 400:
 * description: Invalid API Key.
 * post:
 * summary: Create a new temple.
 * tags: [Temples]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/TempleInput'
 * responses:
 * 200:
 * description: The created temple.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Temple'
 * 400:
 * description: Content cannot be empty.
 */

/**
 * @swagger
 * /temples/published:
 * get:
 * summary: Retrieve published temples.
 * tags: [Temples]
 * responses:
 * 200:
 * description: A list of published temples.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Temple'
 */

/**
 * @swagger
 * /temples/{temple_id}:
 * get:
 * summary: Get a temple by ID.
 * tags: [Temples]
 * parameters:
 * - in: path
 * name: temple_id
 * schema:
 * type: integer
 * required: true
 * description: The temple ID.
 * responses:
 * 200:
 * description: The temple object.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Temple'
 * 404:
 * description: Temple not found.
 * put:
 * summary: Update a temple by ID.
 * tags: [Temples]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: string
 * required: true
 * description: The temple ID.
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/TempleInput'
 * responses:
 * 200:
 * description: Temple updated successfully.
 * 404:
 * description: Temple not found.
 * delete:
 * summary: Delete a temple by ID.
 * tags: [Temples]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: string
 * required: true
 * description: The temple ID.
 * responses:
 * 200:
 * description: Temple deleted successfully.
 * 404:
 * description: Temple not found.
 */

/**
 * @swagger
 * /temples:
 * delete:
 * summary: Delete all temples.
 * tags: [Temples]
 * responses:
 * 200:
 * description: All temples deleted successfully.
 */

/**
 * @swagger
 * components:
 * schemas:
 * Temple:
 * type: object
 * properties:
 * temple_id:
 * type: integer
 * name:
 * type: string
 * location:
 * type: string
 * dedicated:
 * type: string
 * additionalInfo:
 * type: boolean
 * TempleInput:
 * type: object
 * properties:
 * temple_id:
 * type: integer
 * name:
 * type: string
 * description:
 * type: string
 * location:
 * type: string
 */

routes.get('/', temples.findAll);
routes.get('/published', temples.findAllPublished);
routes.get('/:temple_id', temples.findOne);

routes.post('/', temples.create);

routes.delete('/', temples.deleteAll);

routes.delete('/:id', temples.delete);

routes.put('/:id', temples.update);

module.exports = routes;