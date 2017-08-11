
const MC_QUESTIONS = [
  {
    question: "A 100N force acts a 5 kg. ball. What is its acceleration in m/s/s?",
    answers: [
      "10", "20", "30", "40", "50"
    ],
    correct: "20",
    topic: "Forces"
  },
]

const FRQ_QUESTIONS = [
  {
    question: "How much work is done by gravity on a 50 kg. ball that falls 5 ft.?",
    correct: [
      "2500 Joules", "2500 J"
    ],
    topic: "Energy and Work"
  },
]

var currentTopic = 'Kinematics';
var currentQuestionType = 'MC'; // 'FRQ'
var currentQuestions = [];
var currentQuestion = 0;

var populateQuestions = function () {
  currentQuestions = [];
  currentQuestion = 0;
  var pullFrom = currentQuestionType === 'MC' ? MC_QUESTIONS : FRQ_QUESTIONS;
  for (var i in pullFrom) {
    var question = pullFrom[i];
    if (question.topic === currentTopic) {
      currentQuestions.push(question);
    }
  }
}

populateQuestions();

module.exports = {
  getTopic: function () {
    return currentTopic;
  },

  setTopic: function (topic) {
    currentTopic = topic;
  },

  getQuestionType: function () {
    return currentQuestionType;
  },

  setQuestionType: function (questionType) {
    currentQuestionType = questionType;
    populateQuestions();
  },

  getQuestions: function () {
    return currentQuestions;
  },

  getCurrentQuestion: function () {
    return currentQuestions[currentQuestion];
  },

  getQuestionIndex: function() {
    return currentQuestion
  }
};
