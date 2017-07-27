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


client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
 //console.log("tweets:" + JSON.stringify(tweets, null, 2));

 tweets.map(function(t){console.log(t.text)}) // The favorites. 
  //console.log(response);  // Raw response object. 
  console.log(tweets.length)
});