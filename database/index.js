const config = require('../knexfile.js')
const environment = 'development'
const knex = require('knex')(config[environment])

module.exports = knex

knex.migrate.latest([config])
