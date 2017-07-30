import Controller from './books.controller';

export default {
    Query: {
        books(root, args) {
            return Controller.getBooks(args)
                .then(books => books)
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
        }
    }
};
