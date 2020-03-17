const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
  comment: {type: String, trim: true, required: true},
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  scream: {type: Schema.Types.ObjectId, ref: 'scream'},
  date: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Comment", commentSchema);