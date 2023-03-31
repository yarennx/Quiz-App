const quizData = [
  {
    question: "Atatürk Samsun'a hangi tarihte çıkmıştır?",
    a: "23 Nisan 1920",
    b: "29 Ekim 1923",
    c: "19 Mayıs 1919",
    d: "10 Kasım 1938",
    correct: "c",
  },
  {
    question: "23 - 17 + 12 = İşleminin sonucu kaçtır?",
    a: "28",
    b: "13",
    c: "30",
    d: "18",
    correct: "d",
  },
  {
    question: "Kimya alanında Nobel Ödülü almış kişi kimdir?",
    a: "Aziz Sancar",
    b: "Cahit Arf",
    c: "Didem Küçükkaraaslan",
    d: "Ali Kuşçu",
    e: "Türkan Saylan",
    correct: "a",
  },
  {
    question: "swim / tired / warm kelimelerinin Türkçesi nedir?  ",
    a: "gökyüzü / yardımsever / uçmak",
    b: "yüzmek / yorgun / ılık",
    c: "şehir / mutlu / arı",
    d: "ağaç / arı / mutlu",
    correct: "b",
  },
  {
    question: "İstiklal Marşımızı yazan şairimiz kimdir?",
    a: "Mustafa Kemal Atatürk",
    b: "Osman Zeki Üngör",
    c: "Mehmet Akif Ersoy",
    d: "Ali Rıfat Çağatay",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> Testi tamamladın, ${score * 20} puan aldın 🥳 </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
    `;
    }
  }
});
