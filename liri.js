require("dotenv").config();

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

// Used for dotenv
require('dotenv').config()

// Used for date-fns
var isToday = require('date-fns/is_today')
isToday(new Date())
//=> true

const search = process.argv[2];

const topic = process.argv[3];

//Tells the computer where to search based on what users is looking for
switch (search) {
    case "search-concerts":
// Search the ticketmaster api

    break;
    case "search-songs":
// Search the spotify api

    break;
    case "search-movie":
// Search the OMDB api

    break;
    case "feeling-lucky":
// Not sure yet

    break;
};