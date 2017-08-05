import Schemas from './load-models';

module.exports = {
  async create(Model, args) {
    try {
      let model = new Model({ ...args });
      let record = await mode.save();
      return record;
    } catch (e) {
      return new Error(e);
    }
  },

  async findAll(Model) {
    try {
      let records = await Model.find({});
      return records;
    } catch (e) {
      return new Error(e);
    }
  },

  async findBy(Model, args) {
    try {
      let records = await Model.find({ ...args });
      return records;
    } catch (e) {
      return new Error(e);
    }
  },

  async findOne(Model, args) {
    try {
      let record = await Model.findOne({ ...args });
      return record;
    } catch (e) {
      return new Error(e);
    }
  },

  async update(Model, args, data) {
    try {

    } catch (e) {

    }
  },

  async delete(Model, args) {
    try {

    } catch (e) {

    }
  }
};
