//Problem: We need a simple way to look at a user's badge count and JavaScript points
var https = require("https");
var http = require("http");
var username = "mohammadhanbali5";

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

//Connect to the API URL (https://teamtreehouse.com/username.json)
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
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
        console.log(typeof body);
        var profile = JSON.parse(body);
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
  //Parse the data

  //Print the data

});

//Connection Error
request.on("error", printError);
