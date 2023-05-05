var s = document.createElement("script");
s.src = chrome.runtime.getURL("inject.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

// TODO(janvi): Have a message on the content script that goes "is it enabled?" -> goes to background script that
// asks if it's on/off -> background script sends a boolean response which you use to update "duotokEnabled".
// Then - in popup whenever you turn on/off, reload the Netflix page for simplicity for now.

// BUG: Doesn't get the languages if you install the extension while watching a Netflix show. Unable to grab all the potential languages.
//  Also, stop paying for Typeform!
// TODO: Add different files for the content script / code for each component. Example -- files for the flow of the toggle.

let duotokEnabled = true;

if (duotokEnabled) {
  addDuotokLayer();
}

function addDuotokLayer() {
  const duotokEl = document.createElement("div");
  duotokEl.style.height = "100%";
  duotokEl.style.width = "100%";
  duotokEl.style.display = "flex";
  duotokEl.style.position = "relative";
  duotokEl.style.justifyContent = "center";
  duotokEl.style.alignItems = "flex-end";

  const subtitlesHTML = `
    <div style="position: absolute; text-align: center; margin-bottom: 100px"> 
      <div id="practiceSub" style="display: flex; flex-direction: column; align-items: center;">
        <div class="textBasedSub" style="font-size: 16px; font-weight: 600; 
        font-family: Inter, -apple-system, 'system-ui', sans-serif; color: rgb(255, 255, 255);
        text-align: center; background-color: rgba(0, 0, 0, 0);">
        </div>
      </div>

      <div id="nativeSub" style="display: flex; flex-direction: column; align-items: center; margin-top: 12px;">
        <div class="textBasedSub" style="font-size: 16px; font-weight: 600; 
        font-family: Inter, -apple-system, 'system-ui', sans-serif; color: rgb(255, 255, 255);
        text-align: center; background-color: rgba(0, 0, 0, 0);">
        </div>
      </div>
    </div> 
  `;

  duotokEl.innerHTML = subtitlesHTML;

  const timedTextEl = document.querySelector(".player-timedtext");
  if (timedTextEl) {
    timedTextEl.insertAdjacentElement("afterend", duotokEl);
  }
}
