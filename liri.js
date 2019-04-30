require("dotenv").config();

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

// Used for dotenv
require('dotenv').config()

// Used for date-fns
var isToday = require('date-fns/is_today')
isToday(new Date())
//=> true