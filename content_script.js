var s = document.createElement("script");
s.src = chrome.runtime.getURL("inject.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

// BUG: Doesn't get the languages if you install the extension while watching a Netflix show. Unable to grab all the potential languages.
//  Also, stop paying for Typeform!
// TODO: Add different files for the content script / code for each component. Example -- files for the flow of the toggle.

function addDuotokLayer() {
  hideOriginalNetflixSubtitles();
  const duotokEl = document.createElement("div");
  duotokEl.className = "duotokRoot";
  duotokEl.style.height = "100%";
  duotokEl.style.width = "100%";
  duotokEl.style.display = "flex";
  duotokEl.style.position = "relative";
  duotokEl.style.justifyContent = "center";
  duotokEl.style.alignItems = "flex-end";

  const subtitlesHTML = `
    <div style="position: absolute; text-align: center; margin-bottom: 200px; z-index: 1;"> 
      <div id="practiceSub">
        <div class="sentenceContainer" >
        </div>

        <div id="definitionPopup">
          <div id="loader" class="loader"></div>
          <div id="dataContainer" class="hidden">
            <h3 id="popupWord"></h3>
            <p id="popupPOS"></p>
            <p id="popupEx"></p>
          </div>
        </div>
      </div>

      <div id="nativeSub">
        <div class="nativeSubText">
        </div>
      </div>
    </div> 
  `;

  duotokEl.innerHTML = subtitlesHTML;

  const watchVideoEl = document.querySelector(".watch-video");
  if (watchVideoEl) {
    watchVideoEl.insertAdjacentElement("afterbegin", duotokEl);
  }

  const words = document.getElementsByClassName("word");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    addWordListeners(word);
  }
}

function addWordListeners(wordElement) {
  wordElement.addEventListener("pointerover", function () {
    wordElement.style.textDecoration = "underline dotted 3px";
    // Positioning the popup above the word
    // const wordRect = wordElement.getBoundingClientRect();
    // const top = wordRect.top - definitionPopup.offsetHeight - 10;
    // const left =
    //   wordRect.left + (wordRect.width - definitionPopup.offsetWidth) / 2;
    // definitionPopup.style.top = `${top}px`;
    // definitionPopup.style.left = `${left}px`;
  });

  wordElement.addEventListener("pointerout", function (event) {
    wordElement.style.textDecoration = "none";

    // document.querySelector("video").play();
    // const definitionPopup = document.getElementById("definitionPopup");
    // definitionPopup.style.display = "none";

    // const wordRect = word.getBoundingClientRect();
    // const left =
    //   wordRect.left + (wordRect.width - definitionPopup.offsetWidth) / 2;
    // definitionPopup.style.left = `${left}px`;
  });

  wordElement.addEventListener("pointerdown", async function () {
    document.querySelector("video").pause();

    const definitionPopup = document.getElementById("definitionPopup");
    showLoader();
    definitionPopup.style.display = "block";

    const sentence = Array.from(
      wordElement.parentElement.querySelectorAll("span")
    )
      .map((word) => word.textContent)
      .join(" ");
    const definition = await getDefinition(
      wordElement.innerText,
      "Spanish",
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
      popupWord.textContent = `${definition.word} ⇢ ${definition.definition}`;
      popupPOS.textContent = definition.partOfSpeech;
      popupEx.textContent = definition.exampleSentence;

      hideLoader();
      showData();
    }

    // Positioning the popup above the word
    // const wordRect = wordElement.getBoundingClientRect();
    // const top = wordRect.top - definitionPopup.offsetHeight - 10;
    // const left =
    //   wordRect.left + (wordRect.width - definitionPopup.offsetWidth) / 2;
    // definitionPopup.style.top = `${top}px`;
    // definitionPopup.style.left = `${left}px`;
  });
}

// Simulating the definition retrieval for a word
async function getDefinition(word, language, sentence) {
  return {
    word: "word",
    definition: "definition",
    partOfSpeech: "Noun",
    exampleSentence: "This is a sentence",
  };

  if (!word || !language || !sentence) {
    return;
  }
  try {
    const url = "https://api.openai.com/v1/completions";

    const completionResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Given the ${language} sentence "${sentence}". Return the list of strings: ["English definition", "Example ${language} sentence", "part of speech"] for the word "${word}"`,
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
