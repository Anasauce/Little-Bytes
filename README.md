# Little-Bytes
Devon Wesley & Ana Sauceda project managers

## Community meetup for free coding tutoring for children in the Oakland area.

We are a diverse group of tech professionals from Oakland providing free coding tutoring for children 5-10 yrs old. This website is a tool for coordinators, voluteers and parent to help coordinate workshop events and signup. 

## Stack

- Node.js, Express
- Postgres, Knex (SQL Builder)
- Pug - HTML templating for the frontend
- ***Future plans are to convert frontend to React...please reach out if you would like to help with webpack configuration and conversion of current frontend UI to React

## Contributing

- Please notify us if you would like to pick up an issue oaklandtechforkids@gmail.com
- Fork project
- When working on an issue refer to data model in WIREFRAME.md

### Setup dev environment

- if you don't have these already install Node, Express, Postgres
- install all project dependencies using command `npm i` 

### Setup database

- Create database: `createdb lil_bytes_developement` 
- `npm start` or `knex migrate:latest` commands runs all latest migrations.
- `knex migrate:make [name]` will generate new migration.

### Testing 

- To run tests `npm run test` form the command line. 

## Extra asks...

- Would love to UI/UX professionals to critique and add input to our site please reach out to us if you have an interest in helping with this and we will be adding design tickets to the issues/project board soon


This webiste is not currently in production. 
