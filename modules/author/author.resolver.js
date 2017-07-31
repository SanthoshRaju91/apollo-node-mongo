import Controller from './author.controller';

export default {
    Query: {
        author(root, args, context) {
            return Controller.getAuthor(args)
                .then(author => author)
                .catch(err => err);
        },

        getAuthors(root, args) {
            return Controller.getAuthors(args)
                .then(authors => authors)
                .catch(err => err);
        }
    },

    Mutation: {
        createAuthor(root, args) {
            return Controller.createAuthor(args)
                .then(() => true)
                .catch(err => err);
        }
    },

    Author: {
        books(author) {
            return Controller.getAuthorBooks(author)
                .then(books => books)
                .catch(err => err);
        }
    },

    Book: {
        author(book) {
            return Controller.getBookAuthor(book)
                .then(author => author)
                .catch(err => err);
        }
    }
};
