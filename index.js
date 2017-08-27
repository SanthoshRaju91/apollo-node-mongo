import express from 'express';
import db from './config/db';
import config from './config';
import logger from './utils/logger';
import middleware from './config/middleware';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import schema from './schemas';
import { execute, subscribe } from 'graphql';

const { PORT } = config;

const app = express();

// middleware configuration
db.open();
middleware(app);

const ws = createServer(app);

ws.listen(PORT, (err) => {

  if(err) {
    logger.error(`Could not start server on port: ${PORT}\n ${err}`);
  } else {

    new SubscriptionServer({
      execute,
      subscribe,
      schema
    }, {
      server: ws,
      path: '/subscriptions',
    });

    logger.log(`Server listening on port ${PORT}`);
  }
});
