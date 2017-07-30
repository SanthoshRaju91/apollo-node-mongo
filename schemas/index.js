import { makeExecutableSchema ,} from 'graphql-tools';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import BookSchema from '../modules/books/books.schema';
import AuthorSchema from '../modules/author/author.schema';

import BookResolver from '../modules/books/books.resolver';
import AuthorResolver from '../modules/author/author.resolver';

const typeDefs = mergeTypes([ BookSchema, AuthorSchema ]);
const resolvers = mergeResolvers([ BookResolver, AuthorResolver ]);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
