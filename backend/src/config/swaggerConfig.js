const swaggerJSDoc = require('swagger-jsdoc');
const yaml = require('yamljs');
const path = require('path');

const baseYaml = yaml.load(path.resolve(__dirname, '../docs/base.yaml'));

const swaggerDefinition = {
  ...baseYaml,
  components: {
    ...(baseYaml.components || {}),
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

// Opciones de swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['./src/routers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
