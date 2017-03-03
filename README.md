# Little-Bytes
Devon Wesley, Shaka Lee, Ana Sauceda

## Community meetup for free coding tutoring for children in the Oakland area.

We are a diverse group of tech professionals from Oakland providing free coding tutoring for children 5-10 yrs old. This website is a tool for coordinators, voluteers and parent to help coordinate workshop events and signup. Built with Node, Express, Postgres, Pug

## Contributing

Please notify us if you would like to pick up an issue oaklandtechforkids@gmail.com

- Setup environment for Node and install all dependencies. Run locally on port 2720.

- When working on an issue refer to data model in WIREFRAME.md

- Create database:

```
createdb lil_bytes_development
```

- Migrations:

```
npm start
``` 
command runs all needed migrations.

```
knex migrate:make [name]
``` 
will generate new migration.

This webiste is not currently in production. 
