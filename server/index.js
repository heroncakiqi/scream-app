const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const expressValidator = require('express-validator');
const cors = require('cors');
 
const router = require('./router');
const app = express();

// DB setup
const db = "mongodb://heron:heron123@ds053948.mlab.com:53948/scream-app";
mongoose.connect(db).then(() => console.log('database connected'));

// App setup
// setup middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

//apply router
app.use('/', router);

// Server setup
const port = process.env.PORT || 6969;
app.listen(port, () => console.log(`Server listening on port: ${port}`))