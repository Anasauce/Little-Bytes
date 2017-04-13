import config from '../knexfile.js'
const environment = 'development'
import Knex from 'knex'

const knex = Knex(config[environment])

export default knex

knex.migrate.latest([config])
