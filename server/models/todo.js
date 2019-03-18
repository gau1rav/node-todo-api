var mongoose = require('mongoose');

//makes a model from database. Here second arguement is the data schema
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //removes all the trailing and ending spaces from string
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
