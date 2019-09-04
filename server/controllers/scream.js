const Scream = require('../models/Scream');

// get screams
exports.getScreams = async (req, res, next) => {
  const screams = await Scream.find();
  res.json(screams);
}

// post scream
exports.postScream = async (req, res, next) => {  
  const scream = await new Scream({scream: req.body.scream, author: req.user.id});
  res.json(scream);
}

// get single scream
exports.getSingleScream = async (req, res, next) => {
  const scream = await Scream.findOne({_id: req.params.id});
  res.json(scream);
}

// get users screams
exports.getUsersScreams = async (res, req, next) => {
  const screams = await Scream.find({author: req.user.id});
  res.json(screams);
}