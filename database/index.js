import config from '../knexfile.js'
import knex from 'knex'

const environment = 'development'
knex(config[environment]).migrate.latest([config])

export default knex
