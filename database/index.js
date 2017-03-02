const config = require('../knexfile.js')
const environment = 'development'
const knex = require('knex')(config[environment])

knex.migrate.latest([config])

module.exports = knex
