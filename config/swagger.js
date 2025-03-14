// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Temples API',
      version: '1.0.0',
      description: 'API for managing temple information',
    },
    servers: [
      {
        url: 'http://localhost:8080', // Adjust to your server URL
      },
    ],
    components: {
      securitySchemes: {
        apiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'apiKey',
        },
      },
    },
    security: [
      {
        apiKeyAuth: [],
      },
    ],
  },
  apis: ['./routes/temple.js'], // Path to your routes
};

module.exports = swaggerJsdoc(options);