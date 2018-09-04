# Little-Bytes
Devon Wesley & Ana Sauceda project managers

## Community meetup for free coding tutoring for children in the Oakland area.

We are a diverse group of tech professionals from Oakland providing free coding tutoring for children 5-10 yrs old. This website is a tool for coordinators, voluteers and parent to help coordinate workshop events and signup. 

## Stack

- Node.js, Express
- Postgres, Knex (SQL Builder)
- Pug - HTML templating for the frontend

## Contributing

- Please notify us if you would like to pick up an issue oaklandtechforkids@gmail.com
- Fork project
- When working on an issue refer to data model in WIREFRAME.md

### Setup dev environment

- if you don't have these already install Node, Express and Postgres globally
- install all current project-based dependencies using command `npm i` before starting development on new feature

### Setup database

- Create database: `createdb lil_bytes_developement` 
- `npm start` or `knex migrate:latest` commands runs all latest migrations.
- `knex migrate:make [name]` will generate new migration.

### Testing 

- To run tests `npm run test` from the command line. 


This webiste is not currently in production. 
