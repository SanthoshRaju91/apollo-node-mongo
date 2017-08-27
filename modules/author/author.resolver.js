import { PubSub, withFilter } from 'graphql-subscriptions';
import Controller from './author.controller';

const pubsub = new PubSub();

console.log(pubsub);
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
                .then(author => {

                  console.log('publishing');
                  pubsub.publish('authorAdded', { authorAdded: author, channelId: '1'});

                  return author;
                })
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
    },

    Subscription: {
      authorAdded: {
        subscribe: withFilter(() => pubsub.asyncIterator('authorAdded'), (payload, variables) => {
          console.log(payload);
          return payload.channelId === variables.channelId;
        })
      }
    }
};
