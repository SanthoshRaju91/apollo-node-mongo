import { makeExecutableSchema , addMockFunctionsToSchema} from 'graphql-tools';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import glob from 'glob';
import path from 'path';

const { NODE_ENV } = process.env;

let SchemaLocation = glob.sync('**/*.schema.js', { cwd: 'modules'});

let Schemas = SchemaLocation.map((current) => {
  return require(`../modules/${current}`).default;
});

let ResolverLocation = glob.sync('**/*.resolver.js', { cwd: 'modules'});


let Resolvers = ResolverLocation.map((current) => {
  return require(`../modules/${current}`).default;
});

const typeDefs = mergeTypes([ ...Schemas ]);
const resolvers = mergeResolvers([ ...Resolvers ]);

const schema = (NODE_ENV === 'test') ? makeExecutableSchema({ typeDefs }) : makeExecutableSchema({ typeDefs, resolvers });

if(NODE_ENV === 'test') {
  addMockFunctionsToSchema({
    schema,
    mocks: {},
    preserveResolvers: true
  });
}


export default schema;
