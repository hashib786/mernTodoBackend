const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "A tour must have Name"],
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

const todoApp = mongoose.model("todo", schema);

module.exports = todoApp;
