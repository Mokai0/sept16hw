//Problem: We need a simple way to look at a user's badge count and JavaScript points
var http = require("https");

//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
//Print out messages
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

//Print out error messages
//It's better to include a saftey net to catch any errors then to let them play out, if at the very least for reader clarity and simplicity.
function printError(error) {
  console.error(error.message);
}

function get(username) {
  //Connect to the API URL (http://teamtreehouse.com/username.json)
  var request = http.get("https://teamtreehouse.com/" + username + ".json", function(response) {
    // console.dir(response);
    // console.log(response.statusCode);
    //Read the data
    var body = "";
    response.on('data', function(chunk) {
      body += chunk;
    });
    response.on('end', function() {
      if (response.statusCode === 200) {
        try {
          // console.log(body);
          // console.log(typeof body);
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
          // console.dir(profile);
        } catch(error) {
          //Parse Error here
          printError(error);
        }
      } else {
        //StatusCode Error
        printError({message: "There was an error for " + username + ". (" + http.STATUS_CODES[response.statusCode] +")"});
      }
    });
  });
  //Connection Error
  request.on("error", printError);
};


//For node js you must explicitly say what you want available to anyone that wants to require it. This syntax says that for this module above we will export the function get.
module.exports.get = get;
