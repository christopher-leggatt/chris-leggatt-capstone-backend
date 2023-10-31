require('dotenv').config();

module.exports = {
  development: {
    host: process.env.DB_HOST,
    client: 'mysql',
    connection: {
      host: '127.0.0.1', 
      port: 3306, 
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      database: process.env.DB_LOCAL_DBNAME,
      charset: 'utf8'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      database: process.env.DB_LOCAL_DBNAME,
      charset: 'utf8',
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};

