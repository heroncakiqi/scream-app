const Scream = require('../models/Scream');

// get screams
exports.getScreams = async (req, res, next) => {
  const isScreams = await Scream.find()
    .populate({path: 'author', select: ['username', 'image']})
    .sort({ date: 'desc'});
  ;
  if(isScreams.length === 0) return res.status(404).json({error: 'thera are no screams!!'});
  res.json(isScreams);
}

// post scream
exports.postScream = async (req, res, next) => {  
  const newScream = {
    text: req.body.text,
    author: req.user.id
  }
  if(!newScream.text) return res.status(422).json({error: 'no text provided!'});
  const scream = new Scream(newScream)
    .populate({path: 'author', select: ['username', 'image']})
  ;
  await scream.save();
  res.json(scream);
}

// get single scream
exports.getSingleScream = async (req, res, next) => {
  const isScream = await Scream.findOne({_id: req.params.id});
  if(!isScream) return res.status(404).json({error: 'scream not found!'});
  res.json(isScream);
}

// get users screams
exports.getUsersScreams = async (req, res, next) => {
  const screams = await Scream.find({author: req.user.id});
  res.json(screams);
}

// like/unlike scream
exports.likeScream = async (req, res, next) => {
  const isScream = await Scream.findById(req.params.id);
  if(!isScream) return res.status(404).json({error: 'scream not found!'});
  const likes = isScream.likes.map(item => item.toString()); 
  const operator = likes.includes(req.user._id.toString()) ? '$pull' :  '$addToSet';
  const scream = await Scream.findByIdAndUpdate(req.params.id, 
    { [operator]: {likes: req.user._id} },
    { new: true } 
  ).populate({path: 'author', select: ['username', 'image']});
  res.json(scream);
}