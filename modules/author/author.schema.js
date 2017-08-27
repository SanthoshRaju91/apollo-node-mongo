export default `
  type Author {
    id: ID
    firstname: String
    lastname: String
    books: [Book]
  }

  type Query {
    author(id: ID!, firstname: String, lastname: String): Author
    getAuthors(firstname: String, lastname: String): [Author]
  }

  type Mutation {
    createAuthor(firstname: String, lastname: String): Author
  }

  type Subscription {
    authorAdded(channelID: ID!): Author
  }
`;
