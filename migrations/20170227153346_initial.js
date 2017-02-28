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
      table.string('phone', 13).nullable()
      table.string('school', 255).nullable()
      table.boolean('volunteer').defaultTo(false).notNullable()
      table.integer('adult_id').nullable()
        .references('id')
        .inTable('users')
      table.timestamps()
    }),

    knex.schema.createTable('events', table => {
      table.increments('id').primary()
      table.string('name', 100).notNullable()
      table.text('description', 600).nullable()
      table.string('location_name', 100).notNullable()
      table.string('street_address', 100).notNullable()
      table.string('city', 100).notNullable()
      table.string('zipcode', 9).notNullable()
      table.date('date').notNullable()
      table.time('time').notNullable()
      table.timestamps()
    }),

    knex.schema.createTable('sponsors', table => {
      table.increments('id').primary()
      table.string('name', 255).notNullable().unique()
      table.string('website', 255).notNullable()
      table.string('logo_url', 255).nullable()
    }),

    knex.schema.createTable('sponsors_event_join', table => {
      table.integer('event_id')
      table.integer('sponsor_id')
    }),

    knex.schema.createTable('event_attendees', table => {
      table.integer('event_id').notNullable()
        .references('id')
        .inTable('events')
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
        knex.schema.dropTable('events'),
        knex.schema.dropTable('event_attendees')
    ])

};
