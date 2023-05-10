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
      <div id="practiceSub" style="display: flex; flex-direction: column; align-items: center; pointer-events: auto;">
        <div class="textBasedSub" style="font-size: 40px; font-weight: 600; 
        font-family: Inter, -apple-system, 'system-ui', sans-serif; color: rgb(255, 255, 255);
        text-shadow: 0px 4px 7px rgba(18, 18, 18, 1);
        text-align: center; background-color: rgba(0, 0, 0, 0);">
        </div>
        <div id="definitionOverlay" 
          style="position: absolute; top: 0; left: 0; display: none; 
          background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 10px; font-size: 18px;">
        </div>
      </div>

      <div id="nativeSub" style="display: flex; flex-direction: column; align-items: center; margin-top: 12px;">
        <div class="textBasedSub" style="font-size: 20px; font-weight: 600; 
        font-family: Inter, -apple-system, 'system-ui', sans-serif; color: rgb(255, 255, 255);
        text-align: center; background-color: rgba(0, 0, 0, 0);">
        </div>
      </div>
    </div> 
  `;

  duotokEl.innerHTML = subtitlesHTML;

  const watchVideoEl = document.querySelector(".watch-video");
  if (watchVideoEl) {
    watchVideoEl.insertAdjacentElement("afterbegin", duotokEl);
  }

  // Then in background script make the API calls.
  // Add mutation observer.
  const practiceDiv = document.getElementById("practiceSub");
  const textDiv = document.querySelector(".textBasedSub");
  const overlayDiv = document.getElementById("definitionOverlay");
  const definition = 'The definition of the word "text".';

  practiceDiv.addEventListener("pointerover", () => {
    overlayDiv.style.display = "block";
    overlayDiv.innerText = definition;
  });

  practiceDiv.addEventListener("pointerout", () => {
    overlayDiv.style.display = "none";
  });
}
