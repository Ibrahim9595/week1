const securityQuestions = [
  {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter",
  },
  {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985",
  },
  {
    question: "What city were you born in?",
    expectedAnswer: "NYC",
  },
];

// Complete this function to check if the answer to the question is valid or not and return a boolean
function chksecurityQuestions(securityQuestions, question, ans) {
  // your code here true or false
}

const cases = [
  { question: "What was your first pet’s name?", ans: "FlufferNutter" },
  {
    question: "What was your first pet’s name?",
    ans: "DufferNutter",
  },
];

const res = cases.map(({ question, ans }) =>
  chksecurityQuestions(securityQuestions, question, ans)
);

// should print [true, false]
console.log(res);
