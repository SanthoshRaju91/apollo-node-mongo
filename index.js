import express from 'express';
import db from './config/db';
import config from './config';
import logger from './utils/logger';
import middleware from './config/middleware';
const { PORT } = config;

const app = express();

// middleware configuration
db();
middleware(app);

app.listen(PORT, (err) => {
  if(err) {
    logger.error(`Could not start server on port: ${PORT}\n ${err}`);
  } else {
    logger.log(`Server listening on port ${PORT}`);
  }
});
