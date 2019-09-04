const Scream = require('../models/Scream');
const Comment = require('../models/Comments');

// post comment
exports.postComment = async (req, res, next) => {
  const comment = await new Comment({scream: req.params.id, comment: req.body.comment});
  const scream = await Scream.findOne({_id: req.params.id});
  scream.comments.push(comment);
  await scream.save()
  res.json(comment);
}