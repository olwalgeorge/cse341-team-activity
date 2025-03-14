//w01-project/config/swagger.js
// Configuration for Swagger for testing and documentation
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Project1 API',
      version: '1.0.0',
      description: 'API for managing contacts',
    },
    servers: [
      {
        url: 'https://cse341-w01-project-f4cy.onrender.com',
      },
    ],
    components: {
      schemas: {
        Contact: {
          type: 'object',
          properties: {
            username: { type: 'string', required: true, unique: true },
            email: { type: 'string', required: true, unique: true },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            role: { type: 'string' },
            favoriteColor: { type: 'string', enum: ['red', 'green', 'blue'] },
            projects: {
              type: 'array',
              items: { type: 'string' },
            },
            active: { type: 'boolean' },
            joinedDate: { type: 'string', format: 'date-time' },
            lastLoginIP: { type: 'string' },
          },
        },
      },
    },
  },
  apis: ['./app/routes/*.js'], // Path to your route files
};

module.exports = swaggerJsdoc(options);