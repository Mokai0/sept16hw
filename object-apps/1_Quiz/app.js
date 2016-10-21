//Create Questions
var questions = [
  new Question("What is a better game?", ["Paladins", "Battlefield 4"], "Battlefield 4"),
  new Question("Why is BF4 a better game", ["Because it is superior in every way", "Because it's not Palidins"], "Because it's not Palidins")
];
//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
