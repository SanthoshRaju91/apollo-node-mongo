import mongoose from 'mongoose';

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: ''
  },

  author: {
    type: String,
    required: true,
    default: ''
  },

  year: {
    type: Number,
    required: true,
    default: 2000
  },

  pages: {
    type: Number,
    required: true,
    default: 10
  }
});

module.exports = mongoose.model('Book', BookSchema);
