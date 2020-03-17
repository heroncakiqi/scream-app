const Scream = require('../models/Scream');
const Comment = require('../models/Comment');


exports.getComments = async (req, res, next) => {
  try {
    const { screamId } = req.params
    const hasComments = await Comment.find({scream: screamId})
      .populate({path: 'author', select: ['username', 'image']})
      .sort({ date: 'desc'})
    ;
    res.json({screamId, comments: hasComments})
  } catch(err) {
    res.json(err)
  }
}

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
    res.json(comment);
  } catch(err) {
    console.log(err)
  }
}