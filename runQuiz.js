// QUESTIONS

const personalityTypes = {
  offender: "The Offender",
  defender: "The Defender",
  tender: "The Tender",
  mender: "The Mender",
  pretender: "The Pretender",
  connector: "The Connector",
  upender: "The Upender"
};

const questions = [
  {
    question: "What brings you to this quiz?",
    "When I look at the world around me, I feel a burning desire to do something about it": { offender: 2, upender: 2},
    "I want to protect my community.": { defender: 2, pretender: 1, offender: 1},
    "I have important skills and I\’m not sure how to put to use.": { mender: 2, tender: 2, pretender: 2},
    "I just wanted to check things out.": { connector: 2, upender: 1 }
  },
  {
    question: "How comfortable are you with disrupting?",
    "Totally uncomfortable, I hate drawing attention.": { pretender: 2, tender: 1 },
    "Mildly uncomfortable, spare me the annoyance.": { tender: 2, mender: 2, pretender: 1 }, //says quiz data is invalid for this answer
    "Mildly acceptable, I can cause a scene if need be.": { connector: 2, defender: 2, mender: 1 }, //^^
    "I love drawing attention, especially for a good cause.": { offender: 2, upender: 2 }
  },
  {
    question: "Why is politics important to you?",
    "It\’s not, it just won\’t leave me alone.": { offender: 1, tender: 1 },
    "Politics is, unfortunately, everything.": { mender: 2, tender: 2, pretender: 1 },
    "Because I am branded “political” for existing.": { defender: 2, upender: 2, offender: 1 },
    "It\’s an important part of understanding why things are the way they are.": { connector: 2, upender: 1, pretender: 1 }
  },
  {
    question: "Do you plan ahead or act on instinct more?",
    "Instinct for sure.": { defender: 2, mender: 1, offender: 1 },
    "I strike a good balance.": { connector: 2, mender: 2, offender: 1 },
    "I like planning ahead when necessary.": { tender: 2, connector: 1 },
    "I find it hard to stop planning ahead!": { upender: 2, pretender: 1, tender: 1 }
  },
  {
    question: "Are you a people person?",
    "Not at all, I\’m basically a hermit.": { upender: 1, tender: 1 },
    "I talk to others occasionally.": { tender: 2, pretender: 1, offender: 1, connector: 1 },
    "I hang out pretty often.": { connector: 2, defender: 1, upender: 1, mender: 1, offender: 1 },
    "I'm always out or on the phone.": { mender: 2, defender: 2 }
  },
  {
    question: "Okay but are you a new people person?",
    "I can't lie, I don't talk to people outside of my circle.": { mender: 2, tender: 1, pretender: 1 },
    "If need be, I can talk to new people.": { tender: 2, defender: 2, pretender: 1, offender: 1 },
    "Meeting people can be fun.": { defender: 1, upender: 1 },
    "I love expanding my social network.": { connector: 2 }
  },
  {
    question: "How good is your discernment about other people\’s intentions?",
    "Fantastic! I can always trust my gut feeling.": { defender: 2, pretender: 2, mender: 1 },
    "Not bad, I have a good idea of other's intentions.": { mender: 2, connector: 2, tender: 1 },
    "Eh, I can trip up sometimes.": { tender: 2, connector: 1, upender: 1 },
    "Awful.": { offender: 2 }
  }, 
  {
    question: "Do you enjoy teaching?",
    "As long as it's a topic I'm interested in.": { tender: 2, connector: 2 },
    "I prefer to learn.": { defender: 2, pretender: 1 },
    "I love teaching!": { upender: 2, connector: 1, tender: 1 },
    "Not really.": { mender: 2, offender: 2, defender: 1 }
  },
  {
    question: "Is it difficult for you to suddenly take charge?",
    "Pretty challenging, I prefer to follow a chain of command.": { tender: 2, pretender: 1 },
    "A little difficult, I often second guess if there's a need for my input.": { upender: 2, pretender: 1, tender: 1 },
    "If I think something is wrong, I have no problem stepping up.": { mender: 2, offender: 2, connector: 1, upender: 1 },
    "Easy. If people need direction, I'll gladly provide it.": { connector: 2, offender: 1 }
  },
  {
    question: "How creative are you?",
    "Extremely! I try to make something everyday.": { tender: 2, upender: 1 },
    "Pretty creative. I find art fulfilling": { upender: 2, defender: 1, tender: 1 },
    "I dabble when I have the time.": { connector: 2, defender: 1, mender: 1 },
    "Not at all, I have other hobbies that fill my time.": { mender: 2, offender: 1, pretender: 1 }
  },
  {
    question: "How good are you at keeping secrets?",
    "Fantastic. I'm basically a vault.": { pretender: 2, defender: 2 },
    "I'm a locked door. But the spare key is somewhere on the porch...": { mender: 2, offender: 2, connector: 2, defender: 1 },
    "My bestie and I are great at keeping secrets... together.": { tender: 2, connector: 1, upender: 1 },
    "Don't even bother.": { upender: 2, tender: 1 }
  },
  {
    question: "How comfortable are you with helping others?",
    "A lot! I love helping people.": { tender: 2, defender: 2, pretender: 2 },
    "I don't mind helping people I know.": { upender: 2, mender: 1, tender: 1, connector: 1 },
    "Hmm... I'm a little more reserved with my assistance.": { connector: 2, mender: 2, offender: 1 },
    "I dislike it.": { offender: 1, mender: 1 }
  },
  {
    question: "Okay, now how comfortable are you with receiving help?",
    "I love getting help, it's nice to feel cared for.": { connector: 2, upender: 1 },
    "I don't mind when necessary.": { upender: 2, tender: 2, connector: 1, offender: 1 },
    "It makes me a little uncomfortable.": { defender: 2, mender: 2, offender: 1, pretender: 1 },
    "I rebuke it.": { offender: 1, mender: 1 }
  },
  {
    question: "Surpise Scenario: If something in your house breaks, what's the first thing you do?",
    "Try to fix it on my own.": { mender: 2, tender: 2, offender: 2, defender: 1 },
    "Call a professional.": { connector: 2, tender: 1 },
    "Call a friend.": { upender: 2, pretender: 1, connector: 1},
    "Try to ignore it": { defender: 2, pretender: 1 }
  },
  {
    question: "What is the thing you'd never say to another person?",
    "Comment on the way they look.": { defender: 2, connector: 2, upender: 1 },
    "Comment on their career decisions.": { mender: 2, offender: 2, connector: 1 },
    "Comment on their personal lives.": { upender: 2, tender: 2, pretender: 1 },
    "Swear at them.": { pretender: 2, tender: 1 }
  },
  {
    question: "Do you have unique skills or access to difficult to find information?",
    "Yup, I'm very skilled.": { mender: 2, tender: 2, pretender: 2 },
    "I'm not the most skilled but I know people.": { connector: 2, defender: 1 },
    "Depends on what counts as 'unique' and 'skilled.'": { upender: 2, defender: 2, offender: 1 },
    "Not at the moment. (Don't worry, there's still time to learn!)": { offender: 2, upender: 1 }
  }
  /*{
    question: "Is it difficult for you to suddenly take charge?",
    "answer1": { rebel: 2 },
    "answer2": { thinker: 1, dreamer: 1 },
    "answer3": { adventurer: 2, leader: 1 },
    "answer4": { artist: 2 }
  }*/

];

let currentQuestion = 0;
let scores = { offender: 0, defender: 0, tender: 0, mender: 0, pretender: 0, connector: 0, upender: 0 };
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

// Function to generate question 
function generateQuestions(index) {
  const q = questions[index];
  questionEl.innerHTML = `${index + 1}. ${q.question}`;

  // Build answers in the same order they appear in the object (except question).
  const answerTexts = Object.keys(q)
    .filter((key) => key !== 'question')
    .slice(0, 4);

  option1.innerText = answerTexts[0] || '';
  option2.innerText = answerTexts[1] || '';
  option3.innerText = answerTexts[2] || '';
  option4.innerText = answerTexts[3] || '';

  const radios = document.querySelectorAll('input[name="option"]');
  radios.forEach((radio, i) => {
    radio.dataset.answer = answerTexts[i] || '';
    radio.checked = false;
  });
}

function loadNextQuestion() {
  const selectedRadio = document.querySelector('input[name="option"]:checked');
  if (!selectedRadio) {
    alert('Please select your answer!');
    return;
  }

  const answerText = selectedRadio.dataset.answer?.trim();
  if (!answerText) {
    alert('Answer data missing.');
    return;
  }

  const points = questions[currentQuestion][answerText];
  if (!points) {
    alert('Quiz data is invalid for that answer.');
    return;
  }

  // Add points to scores
  for (const type in points) {
    if (scores.hasOwnProperty(type)) {
      scores[type] += points[type];
    }
  }

  selectedAnswersData.push(points);
  currentQuestion++;
  selectedRadio.checked = false;

  if (currentQuestion === totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }

  if (currentQuestion === totalQuestions) {
    container.style.display = 'none';
    let max = -Infinity;
    let winner = '';
    for (const type in scores) {
      if (scores[type] > max) {
        max = scores[type];
        winner = type;
      }
    }
    const sorted = Object.entries(scores)
      .sort((a, b) => b[1] - a[1]);

    const [first = ['', 0], second = ['', 0]] = sorted;
    const firstType = first[0];
    const secondType = second[0];
    const firstScore = first[1];
    const secondScore = second[1];

    let extraLine = '';
    if (secondScore > 0 && firstScore !== secondScore) {
      const leanPct = Math.round((firstScore / (firstScore + secondScore)) * 100);
      extraLine = `<p>You lean ${personalityTypes[firstType]} by ${leanPct}% over ${personalityTypes[secondType]}.</p>`;
    } else if (firstScore === secondScore && firstScore > 0) {
      extraLine = `<p>It's a tie between ${personalityTypes[firstType]} and ${personalityTypes[secondType]}.</p>`;
    }

    result.innerHTML = `
      <h1 class="final-score">Your Role: ${personalityTypes[firstType]}</h1>
      <div class="summary">
        <h2>Summary</h2>
        <p>You scored highest in ${personalityTypes[firstType]} (${firstScore}).</p>
        <p>Second place: ${personalityTypes[secondType]} (${secondScore}).</p>
        ${extraLine}
      </div>
      <button class="restart">Restart Quiz</button>
    `;
    return;
  }

  generateQuestions(currentQuestion);
}

function loadPreviousQuestion() {
  if (currentQuestion === 0) return;
  currentQuestion--;
  const last = selectedAnswersData.pop();
  if (last) {
    for (const type in last) {
      if (scores.hasOwnProperty(type)) {
        scores[type] -= last[type];
      }
    }
  }
  generateQuestions(currentQuestion);
}

// Function to reset and restart the quiz;
function restartQuiz(e) {
  if (e.target.matches('button')) {
    // Reset array index and score
    currentQuestion = 0;
    scores = { offender: 0, defender: 0, tender: 0, mender: 0, pretender: 0, connector: 0, upender: 0 };
    selectedAnswersData = [];
    // Reload quiz to the start
    location.reload();
  }
}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);