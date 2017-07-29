// fs is a core Node package for reading and writing files
var fs = require("fs");

var Twitter = require('twitter');
var keys=require('./keys.js')
var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;
var commands=process.argv[2]

// Create an empty variable for holding the movie name
var title = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    title = title + "+" + nodeArgs[i];

  }

  else {

    title += nodeArgs[i];

  }
}






// not finish: still need to do either swith and cases function or if statement so that when specific commands are read it will no which function to call. 



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



//tweets function starts
function tweets(){

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

    for (var i=0; i <tweets.length; i++)
    console.log(tweets[i].text)
      };
  };


//spotify begins here

function spotify(title){
  var Spotify = require('node-spotify-api');
   
  var spotify = new Spotify({
    id: "b8b59d7c98f042ef8e9ff638c3a48e1b",
    secret: "f32142a935504faf9e7a65f2245ec012"
  });
   
  spotify
    .search({ type: 'track', query: title })
    .then(function(data) {

    //   for(var i = 0; i < data.tracks.items.length; i++){
      var songInfo = data.tracks.items[0];
    
     
    // consolelog artist name, song name, and url. 
      console.log("Artist: " + songInfo.artists[0].name);
      console.log('Song Title: ' + songInfo.name)
      console.log("Preview URL: " + songInfo.preview_url);
      console.log("Preview URL: " + songInfo.album.name);


      fs.appendFile('random.txt', songInfo.artists[0].name);
      fs.appendFile('random.txt', songInfo.name);
      fs.appendFile('random.txt', songInfo.preview_url);
      fs.appendFile('random.txt', songInfo.album.name);
      
   
    })
    .catch(function(err) {
      console.log(err);
    });
  };


 //OMDB movie function 


  function movie(title){
    var omdbURL = 'http://www.omdbapi.com/?apikey=40e9cece&t='+movieName+'&plot=short&tomatoes=true';

    request(omdbURL, function (error, response, body){
      if(!error && response.statusCode == 200){
        var body = JSON.parse(body);


        console.log("Movie Title: " + body.Title);
        console.log("Year of Release: " + body.Year);
        console.log("Actors: " + body.Actors);
        console.log("IMDB Rating: " + body.imdbRating);
        console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
        console.log("Country: " + body.Country);
        console.log("Language: " + body.Language);
        console.log("Plot: " + body.Plot);
  

       
        }
      });
  };