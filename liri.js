// fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  //console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});


var Twitter = require('twitter');
var keys=require('./keys.js')





var client = new Twitter(
 keys.twitterKeys 
);
//paramters for search topic and count 
var params={ 
  q: 'cake since:2017-07-1', 
  count: 10
   };


client.get('search/tweets', params, DataReturn);
  function DataReturn(err, data, response) {

 
var tweets= data.statuses
tweets.map(function(t){console.log(t.text)}) // loop through the tweets  
 
console.log("top ten tweets on cake: " +tweets.length)

// for (var i=0; i <tweets.length; i++)
// console.log(tweets[i].text)
};




var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "b8b59d7c98f042ef8e9ff638c3a48e1b",
  secret: "f32142a935504faf9e7a65f2245ec012"
});
 
spotify
  .search({ type: 'track', query: 'I want it that way' })
  .then(function(data) {

    for(var i = 0; i < data.tracks.items.length; i++){
        var songInfo = data.tracks.items[i];
  
   
  }
   console.log("Artist: " + songInfo.artists[0].name);
   console.log('Song Title: ' + songInfo.name)
    console.log("Preview URL: " + songInfo.preview_url);
  })
  .catch(function(err) {
    console.log(err);
  });