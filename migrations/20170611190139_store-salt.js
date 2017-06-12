
exports.up = knex =>
  knex.schema.table( 'users', table => {
    table.string( 'salt' ).notNullable()
  })


exports.down = knex =>
  knex.schema.table( 'users', table => {
    table.dropColumn( 'salt' )
  })
