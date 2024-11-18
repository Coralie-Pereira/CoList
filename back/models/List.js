const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  list: { type: Array, required: true, unique: true },
  name: { type: String, required: true, unique: true },
});

const List = mongoose.model("List", ListSchema);

module.exports = List;
