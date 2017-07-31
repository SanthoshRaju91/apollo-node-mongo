import mongoose from 'mongoose';
import config from './index';
import logger from '../utils/logger';

module.exports = {
  open() {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB_URL);

    mongoose.connection
      .once('open', () => logger.log('MongoDB running'))
      .on('error', err => logger.error(`MongoDB error: ${err}`))
  },

  close() {
    mongoose.connection.close();
  }
}
