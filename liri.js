require("dotenv").config();

const axios = require("axios");

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

const Spotify = require("node-spotfiy-api");



// Used for date-fns
var isToday = require('date-fns/is_today')
isToday(new Date())
//=> true

const search = process.argv[2];

const topic = process.argv[3];

//Tells the computer where to search based on what users is looking for
switch (search) {
    case "search-concerts":
// Search the ticketmaster api with the topic variable and console.log the info

        console.log("searching");
        searchTicketmaster();

    break;

    case "search-songs":
// Search the spotify api with the topic variable and console.log the info

        console.log("searching")
        searchSong();

    break;

    case "search-movie":
// Search the OMDB api with the topic variable and console.log th info

        console.log("searching");
        searchMovies();

    break;
    
    case "feeling-lucky":
// Not sure yet

    break;
};

function searchSong(topic) {
    // var spotify = new Spotify({
    //     id: keys.SPOTIFY_ID,
    //     secret: keys.SPOTIFY_SECRET,
    //   });
       
      spotify.search({ type: 'track', query: topic }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
   
};

function searchTicketmaster(topic) {};

function searchMovies(topic) {};

