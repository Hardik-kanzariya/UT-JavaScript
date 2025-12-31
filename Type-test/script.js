// DOM Elements
const quoteElement = document.getElementById("quote");
const input = document.getElementById("input");
const timerElement = document.getElementById("timer");
const errorElement = document.getElementById("errors");
const accuracyElement = document.getElementById("accuracy");
const wordsElement = document.getElementById("words");
const restartButton = document.getElementById("restart");
const quoteBox = document.getElementById("quote-box");
const startButton = document.getElementById("start");

// Quotes
const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Success is not for the lazy.",
  "Your limitation is only your imagination.",
  "Dream it. Wish it. Do it.",
  "Great things never come from comfort zones.",
  "Dream bigger. Do bigger.",
  "Don't stop when it hurts. Stop when you're done.",
  "Wake up with determination. Go to bed with satisfaction."

];

// Game variables
let currentQuote = "";
let time = 60;
let timerInterval = null;
let totalErrors = 0;
let totalTyped = 0;
let correctTyped = 0;
let wordsTyped = 0;

// Load a new quote
function loadQuote() {
  if (time <= 0) return;
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  renderQuote();
  input.value = "";
}

// Render quote
function renderQuote() {
  quoteElement.innerHTML = "";
  currentQuote.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    quoteElement.appendChild(span);
  });
}

// Start timer
function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    time--;
    timerElement.textContent = time;
    if (time <= 0) {
      clearInterval(timerInterval);
      input.disabled = true;
    }
  }, 1000);
}

// Start game
startButton.addEventListener("click", () => {
  input.style.display = "block";
  quoteBox.style.display = "block";
  loadQuote();
  startButton.style.display = "none";
  input.disabled = false;
  startTimer();
  input.focus();
});

// Handle typing
input.addEventListener("input", () => {
  if (time <= 0) return;

  const typedText = input.value;
  const quoteSpans = quoteElement.querySelectorAll("span");

  let currentErrors = 0;
  correctTyped = 0;

  quoteSpans.forEach((span, i) => {
    const char = typedText[i];
    if (!char) {
      span.classList.remove("correct", "incorrect");
    } else if (char === currentQuote[i]) {
      span.classList.add("correct");
      span.classList.remove("incorrect");
      correctTyped++;
    } else {
      span.classList.add("incorrect");
      span.classList.remove("correct");
      currentErrors++;
    }
  });

  totalErrors = currentErrors;
  errorElement.textContent = totalErrors;

  wordsTyped = typedText.trim().split(/\s+/).filter(Boolean).length;
  wordsElement.textContent = wordsTyped;

  totalTyped = typedText.length;
  accuracyElement.textContent = totalTyped ? Math.round((correctTyped / totalTyped) * 100) : 100;

  if (typedText.length >= currentQuote.length) loadQuote();
});

// Restart game
restartButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 60;
  totalErrors = 0;
  totalTyped = 0;
  correctTyped = 0;
  wordsTyped = 0;

  timerElement.textContent = time;
  accuracyElement.textContent = "100";
  wordsElement.textContent = "0";
  errorElement.textContent = "0";

  input.value = "";
  input.disabled = false;
  input.style.display = "none";
  quoteBox.style.display = "none";
  startButton.style.display = "block";
  startButton.setAttribute("class", "active");
});
