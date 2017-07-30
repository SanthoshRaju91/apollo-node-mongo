let ENV = process.env.ENV || 'development';

let LOG_LOCATION = `logs/${ENV}.log`;

module.exports = {
  DB_URL: 'mongodb://0.0.0.0:27017/frontendstack',
  PORT: 3000,
  LOGS: LOG_LOCATION
};
