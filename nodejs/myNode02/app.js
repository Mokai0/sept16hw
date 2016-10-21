//In './profile.js' the '.js' isn't mandatory (assuming you don't have another file with the same name obviosly) however the './' is. You must always declare the file path.
var profile = require("./profile.js");
// console.dir(process.argv);

// var users = ['mohammadhanbali', 'sethkroger', 'vladlegkovskis', 'kimberlygotzion', 'davemcfarland'];

var users = process.argv.slice(2);

// users.forEach(function(username) {
//   profile.get(username);
// }

users.forEach(profile.get);

// profile.get('mohammadhanbali');

//Which one do you think will come back first?
// profile.get('sethkroger');
// profile.get('brandonlind2');
// profile.get('frankcollins3');
// profile.get('seanlopez');
// profile.get('christopherjohnson3');
// profile.get('anastasiastojakova2');
// profile.get('kimberlygotzion');
// profile.get('vladlegkovskis');
// profile.get('lora123');
