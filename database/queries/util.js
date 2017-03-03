import knex from '../index'

export const firstRecord = records => records[0]

export const createRecord = (table, attributes) => {
  return knex
    .table(table)
    .insert(attributes)
    .returning('*')
    .then(firstRecord)
}

export const findRecord = (table, column, data) =>
  knex
    .table(table)
    .where(column, data)
    .returning('*')
    .then(firstRecord)

export const findAllWhere = (table, column, data) =>
  knex
    .table(table)
    .where(column, data)
    .returning('*')

export const findAll = table =>
  knex
    .table(table)
    .returning('*')

export const updateRecord = (table, column, data, attributes) => {
  attributes.updated_at = knex.raw('now()')
  return knex
    .table(table)
    .where(column, data)
    .update(attributes)
    .returning('*')
    .then(firstRecord)
  }


export const deleteRecord = (table, column, data) =>
  knex
    .table(table)
    .where(column, data)
    .del()

export const deleteAll = table =>
  knex.raw(`DELETE FROM ${table}`)
