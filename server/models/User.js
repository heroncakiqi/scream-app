const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const app = ('../index');


const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true
  },
  password: { type: String },
  username: {
    type: String,
    unique: true,
    required: true
  },
  image: { type: String, default: 'http://localhost:6969/images/default-user-icon-8.jpg' },
  location: { type: String },
  date: { type: Date, default: Date.now }
});

// hash user password before saving
userSchema.pre('save',  function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    console.log(app)
    bcrypt.hash(this.password, salt, (err, hash) => {
      if(err) return next(err);
      this.password = hash
      next();
    })
  })
});

module.exports = mongoose.model("User", userSchema);
