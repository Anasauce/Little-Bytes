exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('email').notNullable().unique()
      table.string('pasword').notNullable()
      table.timestamps()
    }),

    knex.schema.createTable('humans', table => {
      table.increments('id').primary()
      table.string('name', 100).notNullable()
      table.boolean('child').defaultTo(false).notNullable()
      table.string('phone').nullable()
      table.string('school').nullable()
      table.boolean('volunteer').defaultTo(false).notNullable()
      table.integer('adult_id').nullable()
        .references('id')
        .inTable('users')
      table.timestamps()
    }),

    knex.schema.createTable('workshops', table => {
      table.increments('id').primary()
      table.string('location').notNullable()
      table.date('date').notNullable()
      table.time('time').notNullable()
      table.timestamps()
    }),

    knex.schema.createTable('workshop_attendees', table => {
      table.integer('workshop_id').notNullable()
        .references('id')
        .inTable('workshops')
      table.boolean('bring_laptop').defaultTo(false).notNullable()
      table.boolean('transportation').defaultTo(false).notNullable()
      table.string('bringing_food').nullable()
      table.timestamps()
    })
  ])

};

exports.down = function(knex, Promise) {

  return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('humans'),
        knex.schema.dropTable('workshops'),
        knex.schema.dropTable('workshop_attendees')
    ])

};
