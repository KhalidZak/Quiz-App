const quiz = [
  {
    question: "Longest river in the world",
    a: "River Naija",
    b: "River Nile",
    c: "River Benue",
    d: "River Nail",
    correct: "b"
  },
  {
    question: "On which continent is Nigeria",
    a: "North America",
    b: "Europe",
    c: "Asia",
    d: "Africa",
    correct: "d"
  },
  {
    question: "Who is the Wolverine",
    a: "Hugh Jackman",
    b: "Jason Statham",
    c: "Selena Gomez",
    d: "Aaron Jacob",
    correct: "a"
  },
  {
    question: "How many genders are there",
    a: "One",
    b: "Three",
    c: "Two",
    d: "Four",
    correct: "c"
  },
  {
    question: "Most populated country in the world",
    a: "India",
    b: "Pakistan",
    c: "China",
    d: "Iran",
    correct: "c"
  },
  {
    question: "How many bones in human body",
    a: "206",
    b: "265",
    c: "300",
    d: "150",
    correct: "a"
  },
  {
    question: "How many cells are there in human body",
    a: "37.2 million",
    b: "30 trillion",
    c: "37.2 trillion",
    d: "1 billion",
    correct: "c"
  },
  {
    question: "How many countries in the world",
    a: "350",
    b: "265",
    c: "195",
    d: "200",
    correct: "c"
  },
  {
    question: "The largest country in Africa",
    a: "Nigeria",
    b: "Algeria",
    c: "South Africa",
    d: "Egypt",
    correct: "b"
  },
  {
    question: "Most populated country in Africa",
    a: "South Africa",
    b: "Ghanna",
    c: "Algeria",
    d: "Nigeria",
    correct: "d"
  }
];

const questionEl = document.querySelector(".question");
const answerA = document.querySelector(".answer_a");
const answerB = document.querySelector(".answer_b");
const answerC = document.querySelector(".answer_c");
const answerD = document.querySelector(".answer_d");
const submitEl = document.querySelector(".submit");
const inputEl = document.querySelectorAll("input");
const contentEl = document.querySelector(".container");

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  deselect();
  const quizData = quiz[currentQuestion];
  questionEl.innerText = quizData.question;
  answerA.innerText = quizData.a;
  answerB.innerText = quizData.b;
  answerC.innerText = quizData.c;
  answerD.innerText = quizData.d;
}
loadQuiz();

function deselect() {
  inputEl.forEach((input) => {
    input.checked = false;
  });
}

function getSelected() {
  let answer = undefined;
  inputEl.forEach((input) => {
    if (input.checked) {
      answer = input.id;
    }
  });
  console.log(answer);
  return answer;
}

submitEl.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quiz[currentQuestion].correct) {
      score++;
      console.log(score);
    }
    currentQuestion++;

    if (quiz.length > currentQuestion) {
      loadQuiz();
    } else {
      contentEl.innerHTML = `
      <h1 id='result'>You've answered ${score} out of ${quiz.length} questions correctly</h1>
      <button onclick='location.reload()', class="submit" id='reload'>Reload</button>
      `;
    }
  }
});
