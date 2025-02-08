const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  const connections = {
    mysql: {
      connection: {
        connectionString: env('strapi-database.cu1kwklhpesh.us-east-1.rds.amazonaws.com'),
        host: env('DATABASE_HOST', 'strapi-database.cu1kwklhpesh.us-east-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi-database'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Test123'),
        ssl: { rejectUnauthorized: false },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
      options: {
          ssl: false
        },
    },
    postgres: {
      connection: {
        connectionString: env('strapi-database1.cu1kwklhpesh.us-east-1.rds.amazonaws.com'),
        host: env('DATABASE_HOST', 'strapi-database1.cu1kwklhpesh.us-east-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Test12345'),
        ssl: { rejectUnauthorized: false },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      acquireConnectionTimeout: 300000,
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) ,
      acquireTimeoutMillis: 300000,
createTimeoutMillis: 300000,
destroyTimeoutMillis: 300000,
idleTimeoutMillis: 30000,
reapIntervalMillis:1000,
createRetryIntervalMillis: 2000,
propagateCreateError: false
},
      options: {
          ssl: false
        },
        debug: false,
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          env('DATABASE_FILENAME', 'data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
