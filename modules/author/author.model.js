import mongoose from 'mongoose';

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Author', AuthorSchema);
