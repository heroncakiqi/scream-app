const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const screamSchema = new Schema({
  text: {type: String, trim: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  date: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Scream", screamSchema);
