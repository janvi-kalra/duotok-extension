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
      const popupDef = document.getElementById("popupDef");
      const popupPOS = document.getElementById("popupPOS");
      const popupEx = document.getElementById("popupEx");
      // Populate definition modal
      popupWord.textContent = `${definition.word} ⇢ ${
        definition.definition
      } + ${definition.romanization ?? "none"}`;
      popupPOS.textContent = definition.partOfSpeech;
      popupEx.textContent = definition.exampleSentence;
      hideLoader();
      showData();
      positionPopupAboveWord(definitionPopup, wordElement);
    } else {
      errorGettingDefinition();
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
  // };

  if (!word || !language || !sentence) {
    return;
  }
  try {
    const url = "https://api.openai.com/v1/completions";

    const prompt = isNonwesternLanguage(language)
      ? `Given the ${language} sentence "${sentence}". Return the list of strings: ["Short English definition", "New example ${language} sentence", "part of speech", "Romanization with spaces"] for the word "${word}"`
      : `Given the ${language} sentence "${sentence}". Return the list of strings: ["Short English definition", "New example ${language} sentence", "part of speech"] for the word "${word}"`;

    const completionResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt,
        temperature: 0.2,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      }),
    });

    // Select the top choice.
    const completion = await completionResponse.json();
    const bestChoice = completion.choices.pop();
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
  const loader = document.getElementById("loader");
  const dataContainer = document.getElementById("dataContainer");

  loader.classList.remove("hidden");
  dataContainer.classList.add("hidden");
}

function hideLoader() {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
}

function showData() {
  const dataContainer = document.getElementById("dataContainer");
  dataContainer.classList.remove("hidden");
}

function errorGettingDefinition() {
  const error = document.getElementById("definitionError");
  error.textContent =
    "Uh Oh... we faced an error and we not able to grab the definition";
  hideLoader();
  error.classList.remove("hidden");
}

function positionPopupAboveWord(popupElement, wordElement) {
  const popupRect = popupElement.getBoundingClientRect();
  const wordRect = wordElement.getBoundingClientRect();

  // Calculate the top and left values for the popup element
  // popupElement.style.left = `${wordRect.left - popupRect.width / 2}px`;

  popupElement.style.left = `${wordRect.left}px`;

  // // Set the position of the popup element
  // popupElement.style.bottom = `${bottom}px`;
  // popupElement.style.left = `${left}px`;

  // Show the popup element
  popupElement.style.display = "block";
}
