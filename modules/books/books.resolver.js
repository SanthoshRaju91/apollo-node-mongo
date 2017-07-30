import Controller from './books.controller';
import AuthorController from '../author/author.controller';

const resolvers = {
    Query: {
        books(root, args) {
            return Controller.getBooks(args)
                .then(books => books)
                .catch(err => err);
        },

        author(root, args) {
          return AuthorController.getAuthor(args)
            .then(author => author)
            .catch(err => err);
        },

        getAuthors(root, args) {
          return AuthorController.getAuthors(args)
            .then(authors => authors)
            .catch(err => err);
        }
    },

    Mutation: {
        createBook(root, args) {
            return Controller.createBook(args)
                .then(books => books)
                .catch(err => err);
        },

        deleteBook(root, args) {
            return Controller.deleteBook(args)
                .then(() => true)
                .catch(err => err);
        },

        createAuthor(root, args) {
          return AuthorController.createAuthor(args)
            .then(() => true)
            .catch(err => err);
        }
    },

    Author: {
      books(author) {
        return AuthorController.getAuthorBooks(author)
          .then(books => books)
          .catch(err => err);
      }
    },

    Book: {
      author(book) {
        return AuthorController.getBookAuthor(book)
          .then(author => author)
          .catch(err => err);
      }
    }
}

export default resolvers;
