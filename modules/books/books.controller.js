import Book from './books.model';
import logger from '../../utils/logger';

module.exports = {

  async createBook(book) {
    let newBook = new Book({ ...book });

    try {
      let savedBook = await newBook.save();
      logger.log(`Book saved ${book.title}`);
      return savedBook;
    } catch (err) {
      logger.error(`Error while saving a book: ${err}`);
      return err;
    }
  },

  async getBooks(options) {
    try {
      let books = await Book.find({ ...options });
      return (books.length) ? books : [];
    } catch (err) {
      logger.error(`Error while retrieving books: ${err}`);
      return err;
    }
  },

  async updateBook(book) {

  },

  async deleteBook(book) {
    let { id } = book;
    try {
      let book = await Book.find({ _id: id}).remove();
      return book;
    } catch (err) {
        logger.error(`Error while deleting book: ${err}`);
        return err;
    }
  }
}
