import config from '../knexfile.js'
const environment = 'development'
import Knex from 'knex'

const knex = Knex(config[environment])
knex.migrate.latest([config])

export default knex
