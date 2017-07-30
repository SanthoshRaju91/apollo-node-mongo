import logger from 'logger';
import config from '../config';
import fs from 'fs';

const { LOGS } = config;

if(!fs.existsSync(LOGS)) {
  fs.openSync(LOGS, 'a+');
}

let logInstance = logger.createLogger(LOGS);

module.exports = {

  /**
  * Function to log error messages
  * @method error
  * @param message
  */
  error(message) {
    console.error(message);
    logInstance.error(message);
  },

  /**
  * Function to log warn messages
  * @method warn
  * @param warn
  */
  warn(message) {
    console.warn(message);
    logInstance.warn(message);
  },

  /**
  * Function to log messages
  * @method log
  * @param log
  */
  log(message) {
    console.log(message);
    logInstance.info(message);
  },
}
