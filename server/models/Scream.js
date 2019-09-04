const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const screamSchema = new Schema({
  scream: {type: String},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
  author: {type: Schema.Types.ObjectId, ref: 'User'}
});


module.exports = mongoose.model("Scream", screamSchema);
