import Book from '../books/books.model';
import Author from './author.model';
import logger from '../../utils/logger';

module.exports = {

  async getAuthor(authorQuery) {
    try {
      let author = await Author.findById({ _id: authorQuery.id });
      return author;
    } catch (err) {
      logger.error(`Error while fetching author: ${err}`);
      return err;
    }
  },

  async createAuthor(author) {
    let newAuthor = new Author({ ...author });

    try {
      let savedAuthor = await newAuthor.save();
      return savedAuthor;
    } catch (err) {
      logger.error(`Error while creating author: ${err}`);
      return err;
    }
  },

  async getAuthors(authorsQuery) {
    try {
      let authors = await Author.find({ ...authorsQuery });
      return authors;
    } catch (err) {
        logger.error(`Error while fetching authors data: ${err}`);
        return err;
    }
  },

  async getAuthorBooks({ id }) {
    try {
      let books = await Book.find({ author: id });
      return books;
    } catch (err) {
      logger.error(`Error while fetch author's books: ${err}`);
      return err;
    }
  },

  async getBookAuthor({ author }) {
    try {
      let bookAuthor = await Author.findById({ _id: `${author}` });
      return bookAuthor;
    } catch (err) {
      logger.error(`Error while fetch Book's Author: ${err}`);
      return err;
    }
  }
};
