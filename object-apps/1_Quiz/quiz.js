function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

Quiz.prototype.guess - function (answer) {
  if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.currentQuestionQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
  return this.currentQuestionQuestionIndex >= this.questions.length;
};
