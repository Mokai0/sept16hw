/*var dice = {
  sides: 6
  roll: function diceRoll() {
    var randomNumber = Math.floor(Math.random() * dice.sides) + 1;
    console.log(randomNumber);
  }
}*/

var dumb = {
  sides: 6,
  roll: function diceRoll () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    //console.log(randomNumber);
    return randomNumber;
    alert('hello')//will not get executed because alert in this instance exists after the return method
  }
}
//In this instance 'this' is referring to the owner of the function.

/*var simpleton = {
  sides: 100
  roll: function diceRoll() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    console.log(randomNumber);
  }
}*/
//In either function 'this' is referring to the owner of their respective function.
