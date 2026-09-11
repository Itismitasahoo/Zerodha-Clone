const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  MediaQueryListEvent: Number,
  price: Number,
  mode: String,
});

module.exports = { OrdersSchema };
