const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const knex = require('knex')(config);

console.log('Knex is using the following configuration:', config.connection);

module.exports = knex;
