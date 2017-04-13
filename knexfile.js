module.exports = {
  development: {
    client: 'postgresql',
    connection: `postgres://${process.env.USER}@localhost:5432/lil_bytes_development`
  }
}
