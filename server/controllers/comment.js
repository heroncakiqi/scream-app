const Scream = require('../models/Scream');
const Comment = require('../models/Comment');

// post comment
exports.postComment = async (req, res, next) => {
  try {
    const newComment = {
      author: req.user._id, 
      scream: req.params.screamId, 
      comment: req.body.comment
    }
    const isScream = await Scream.findOne({_id: req.params.screamId});
    const comment = new Comment(newComment)
    isScream.comments.push(comment);
    const commentPromise = comment.save();
    const screamPromise = isScream.save();
    await Promise.all([commentPromise, screamPromise]);
    res.json(isScream);
  } catch(err) {
    console.log(err)
  }
}