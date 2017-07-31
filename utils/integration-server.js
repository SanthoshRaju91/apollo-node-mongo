import express from 'express';
import { graphql } from 'graphql';
import request from 'request-promise';

import Schema from '../schemas';
import config from '../config';
import db from '../config/db';

import logger from './logger';

const { TEST_PORT } = config;

function start(done) {
  const app = express();

  // initializing mongodb
  db.open();
  app.get('/graphql', (req, res) => {
    const graphqlQuery = req.query.graphqlQuery;
    if (!graphqlQuery) {
      logger.error(`You must provide a query`);
      return res.status(500).send('You must provide a query');
    }

    return graphql(Schema, graphqlQuery)
      .then(response => {
        return response.data;
      })
      .then((data) => res.json(data))
      .catch((err) => console.error(err));
  });

  return app.listen(TEST_PORT, () => {
    logger.log(`Test server started on port: ${TEST_PORT}`);
    done();
  });
};

function stop(app, done) {
  app.close();
  db.close();
  done();
};

function graphqlQuery(app, query) {
  return request({
    baseUrl : `http://localhost:${TEST_PORT}`,
    uri : '/graphql',
    qs : {
      graphqlQuery : query
    },
    resolveWithFullResponse: true,
    json: true
  })
};

module.exports = {
  start,
  stop,
  graphqlQuery
};
