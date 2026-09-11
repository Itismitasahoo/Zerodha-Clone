const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
