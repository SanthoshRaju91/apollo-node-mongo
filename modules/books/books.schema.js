import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './books.resolver';

const typeDefs = `

  type Author {
    id: ID
    firstname: String
    lastname: String
    books: [Book]
  }

  type Book {
    id: ID
    title: String
    author: Author
    year: Int
    pages: Int
  }

  type Query {
    books(title: String, author: ID, year: Int, pages: Int): [Book]
    author(id: ID!, firstname: String, lastname: String): Author
    getAuthors(firstname: String, lastname: String): [Author]
  }

  type Mutation {
    createBook(title: String, author: ID, year: Int, pages: Int): Book
    deleteBook(id: String): Book
    createAuthor(firstname: String, lastname: String): Author
  }
`;


const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
