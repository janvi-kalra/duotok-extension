var s = document.createElement("script");
s.src = chrome.runtime.getURL("inject.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

function addWordListeners(wordElement) {
  wordElement.addEventListener("pointerover", function () {
    wordElement.style.textDecoration = "underline dotted 3px";
  });

  wordElement.addEventListener("pointerout", function (event) {
    wordElement.style.textDecoration = "none";

    // document.querySelector("video").play();
    // const definitionPopup = document.getElementById("definitionPopup");
    // definitionPopup.style.display = "none";
  });

  wordElement.addEventListener("pointerdown", async function () {
    document.querySelector("video").pause();

    const definitionPopup = document.getElementById("definitionPopup");
    showLoader();
    positionPopupAboveWord(definitionPopup, wordElement);

    const sentence = Array.from(
      wordElement.parentElement.querySelectorAll("span")
    )
      .map((word) => word.textContent)
      .join(" ");

    const langPractice = (await chrome.storage.sync.get(["langPractice"]))
      ?.langPractice;

    const definition = await getDefinition(
      wordElement.innerText,
      langPractice,
      sentence
    );

    if (
      definition &&
      definition.word &&
      definition.definition &&
      definition.partOfSpeech &&
      definition.exampleSentence
    ) {
      const popupWord = document.getElementById("popupWord");
      const popupRoman = document.getElementById("popupRoman");
      const popupPOS = document.getElementById("popupPOS");
      const popupEx = document.getElementById("popupEx");
      // Populate definition modal
      popupWord.textContent = `${definition.word} ⇢ ${definition.definition}`;
      popupRoman.textContent = definition.romanization ?? "";
      popupPOS.textContent = definition.partOfSpeech;
      popupEx.textContent = definition.exampleSentence;
      showDataContainer();
    } else {
      showErrorGettingDefinition(wordElement.textContent);
    }
  });
}

async function getDefinition(word, language, sentence) {
  // return {
  //   word: "this is a very long word",
  //   definition: "this is a very very very very long definition",
  //   partOfSpeech: "Noun",
  //   exampleSentence:
  //     "this is a very very very very very very very very very very very very very very very very very very very very very long definition",
  //   romanization: "Pahli",
  // };

  if (!word || !language || !sentence) {
    return;
  }
  try {
    const response = await queryOpenAi(word, language, sentence);
    const bestChoice = response.choices.pop();
    const list = JSON.parse(bestChoice.text);

    return {
      word: word,
      definition: list[0],
      partOfSpeech: list[2],
      exampleSentence: list[1],
      romanization: list?.[3],
    };
  } catch (error) {
    console.log(error);
  }
}

function showLoader() {
  const error = document.getElementById("definitionError");
  error.style.display = "none";

  const dataContainer = document.getElementById("dataContainer");
  dataContainer.style.display = "none";

  const loader = document.getElementById("loader");
  loader.style.display = "block";
}

function showDataContainer() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";

  const error = document.getElementById("definitionError");
  error.style.display = "none";

  const dataContainer = document.getElementById("dataContainer");
  dataContainer.style.display = "block";
}

function showErrorGettingDefinition(word) {
  const loader = document.getElementById("loader");
  loader.style.display = "none";

  const dataContainer = document.getElementById("dataContainer");
  dataContainer.style.display = "none";

  const error = document.getElementById("definitionError");
  error.textContent = `Uh oh... unable to grab definition of ${word}`;
  error.style.display = "block";
}

function positionPopupAboveWord(popupElement, wordElement) {
  const popupRect = popupElement.getBoundingClientRect();
  const wordRect = wordElement.getBoundingClientRect();

  // Calculate the top and left values for the popup element
  // popupElement.style.left = `${wordRect.left - popupRect.width / 2}px`;

  // popupElement.style.left = `${wordRect.left}px`;

  // // Set the position of the popup element
  // popupElement.style.bottom = `${bottom}px`;
  // popupElement.style.left = `${left}px`;

  // Show the popup element
  popupElement.style.display = "block";
}

function hideDefinitionPopup() {
  const element = document.getElementById("definitionPopup");
  element.style.display = "none";
}
