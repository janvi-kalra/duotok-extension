function addDuotokLayer() {
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
          <div class="sentenceContainer"></div>
        </div> 
  
        <div id="definitionPopup">
          <div id="loader" class="loader"></div>
          <div id="dataContainer" class="hidden">
            <h3 id="popupWord"></h3>
            <p id="popupRoman"></p>
            <p id="popupPOS"></p>
            <p id="popupEx"></p>
          </div>
          <div id="definitionError" class="hidden"></div>  
        </div>
  
        <div id="nativeSub">
          <div class="nativeSubText"></div>
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
