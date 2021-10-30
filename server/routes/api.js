
var express = require('express'),
	session=require('express-session'),
 	router = express.Router();
const FileStore = require('session-file-store')(session),
 	{ uuid } = require('uuidv4'),
 	{ v4: uuidv4 } = require('uuid');

// for sessio 
router.use(session({ 
  genid: (req) => {
    console.log('Inside the session middleware');
    return uuidv4(); // use UUIDs for session IDs
  },
  secret: 'fdfdfdfdfdffskskskksskkk',
  resave: false,
  rolling:true,
  cookie:{
  	maxAge:3600000
  },
  
  saveUninitialized: false

}));
router.use(express.json({strict: false}));

router.use("/user", require("../controllers/user.api"));


//router.use("/role",require("../controllers/user.api"));

//add here other api routes
 
module.exports = router;
