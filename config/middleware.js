import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import schema from '../schemas';


export default (app) => {
  app.use(bodyParser.json({ encoded: true }));
  app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({
    schema,
    context: {
      user: req.user
    }
  })));
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}));
  app.use(morgan('dev'));
}
