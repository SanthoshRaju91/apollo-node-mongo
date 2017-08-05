import glob from 'glob';
import path from 'path';

let Models = glob.sync('**/*.model.js', { cwd: 'modules'});

let ModelSchema = {}

Models.map(current => {
  let model = require(`../modules/${current}`);
  let { modelName } = model;

  ModelSchema[modelName] = model;

});

export default ModelSchema;
