import knex from '../rootKnexFunctions'

export const createEvent = attributes => {
  return createRecord('events', attributes)
}
