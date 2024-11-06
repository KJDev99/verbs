let isSequential = true;
let currentIndex = 0;

// Random index for verbs
let randomVerbIndex = 0;

// HTML elements
const presentFormElement = document.getElementById("presentForm");
const pastFormElement = document.getElementById("pastForm");
const participleFormElement = document.getElementById("participleForm");
const verbTranslationElement = document.getElementById("verbTranslation");
const verbTranslationBtn = document.getElementById("verbTranslationBtn");
const verbListElement = document.getElementById("verbList");

// const nextWordBtn = document.createElement("button");
// nextWordBtn.innerText = "Keyingi fe'l";
// nextWordBtn.id = "nextWordBtn";
// nextWordBtn.style.marginTop = "20px";
// document.body.appendChild(nextWordBtn);

// Function to show verbs
function showVerbs() {
  if (isSequential) {
    randomVerbIndex = currentIndex;
  } else {
    randomVerbIndex = Math.floor(Math.random() * verbs.length);
  }

  presentFormElement.innerText = verbs[randomVerbIndex].present;
  pastFormElement.innerText = verbs[randomVerbIndex].past;
  participleFormElement.innerText = verbs[randomVerbIndex].participle;

  verbTranslationElement.innerText = ""; // Clear previous translation
}

// Show translation for verbs
verbTranslationBtn.addEventListener("click", () => {
  verbTranslationElement.innerText = `Tarjima: ${verbs[randomVerbIndex].uzbek}`;
});

// Move to the next verb
nextWordBtn.addEventListener("click", () => {
  if (isSequential) {
    currentIndex = (currentIndex + 1) % verbs.length; // Loop back when reaching the end
  }
  showVerbs();
});

// Button functionality for sequential or random order
document.getElementById("sequentialBtn").addEventListener("click", () => {
  isSequential = true;
  currentIndex = 0;
  showVerbs();
});

document.getElementById("randomBtn").addEventListener("click", () => {
  isSequential = false;
  showVerbs();
});

// Toggle visibility of the verb list
function showVerbList() {
  verbListElement.innerHTML = verbs
    .map(
      (verb, index) =>
        `<p>${index + 1}. ${verb.present} - ${verb.past} - ${
          verb.participle
        } - ${verb.uzbek}</p>`
    )
    .join("");
  verbListElement.style.display = "block";
}

function toggleAllLists() {
  const isListVisible = verbListElement.style.display === "block";

  if (isListVisible) {
    verbListElement.style.display = "none";
  } else {
    showVerbList();
  }
}

document
  .getElementById("showAllListsBtn")
  .addEventListener("click", toggleAllLists);

showVerbs();
