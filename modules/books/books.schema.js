export default `
  type Book {
    id: ID
    title: String
    author: Author
    year: Int
    pages: Int
  }

  type Query {
    books(title: String, author: ID, year: Int, pages: Int): [Book]
  }

  type Mutation {
    createBook(title: String, author: ID, year: Int, pages: Int): Book
    deleteBook(id: String): Book
  }
`;
