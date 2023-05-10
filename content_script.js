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
          <h3 id="wordDefinition"></h3>
          <p id="partOfSpeech"></p>
          <p id="exampleSentence"></p>
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
    document.querySelector("video").pause();
    const definitionPopup = document.getElementById("definitionPopup");
    const wordDefinition = document.getElementById("wordDefinition");
    const partOfSpeech = document.getElementById("partOfSpeech");
    const exampleSentence = document.getElementById("exampleSentence");

    // TODO: Update with backend code.
    const definition = getDefinition(wordElement.innerText);

    wordDefinition.textContent = definition.word;
    partOfSpeech.textContent = definition.partOfSpeech;
    exampleSentence.textContent = definition.exampleSentence;

    // Positioning the popup above the word
    // const wordRect = wordElement.getBoundingClientRect();
    // const top = wordRect.top - definitionPopup.offsetHeight - 10;
    // const left =
    //   wordRect.left + (wordRect.width - definitionPopup.offsetWidth) / 2;
    // definitionPopup.style.top = `${top}px`;
    // definitionPopup.style.left = `${left}px`;

    // Displaying the popup
    definitionPopup.style.display = "block";
  });

  wordElement.addEventListener("pointerout", function (event) {
    document.querySelector("video").play();
    const definitionPopup = document.getElementById("definitionPopup");
    // const wordRect = word.getBoundingClientRect();
    // const left =
    //   wordRect.left + (wordRect.width - definitionPopup.offsetWidth) / 2;
    // definitionPopup.style.left = `${left}px`;
    definitionPopup.style.display = "none";
  });
}

// Simulating the definition retrieval for a word
function getDefinition(word) {
  return {
    word: word,
    partOfSpeech: "Noun",
    exampleSentence: `This is an example sentence with the word "${word}".`,
  };
}
