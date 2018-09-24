// Uncomment the following line to load our .env file and add the values to process.env
// require('dotenv').config({ silent: true });

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.ENV || 'development',

  // Environment-dependent settings
  development: {
    db: {
      dialect: 'sqlite',
      storage: ':memory:',
      operatorsAliases: false,
    },
  },
  production: {
    db: {
      dialect: 'sqlite',
      storage: 'db/database.sqlite',
      operatorsAliases: false,
    },
  },
};
