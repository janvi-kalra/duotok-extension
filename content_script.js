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
  createPracticeSubtitle();
  createNativeSubtitle();
}

function createPracticeSubtitle() {
  // create the outermost div element
  const mainSub = document.createElement("div");
  mainSub.id = "mainSub";
  mainSub.style.left = "210.652px";
  mainSub.style.right = "0px";
  mainSub.style.display = "flex";
  mainSub.style.flexDirection = "column";
  mainSub.style.alignItems = "center";
  mainSub.style.position = "absolute";
  mainSub.style.width = "318.695px";
  mainSub.style.top = "665.623px";

  // create the inner div element
  const textBasedSub = document.createElement("div");
  textBasedSub.classList.add("textBasedSub");
  textBasedSub.style.fontSize = "26.2237px";
  textBasedSub.style.fontWeight = "500";
  textBasedSub.style.fontFamily =
    '"Netflix Sans", "Helvetica Neue", "Segoe UI", Roboto, Ubuntu, sans-serif';
  textBasedSub.style.color = "rgb(255, 255, 255)";
  textBasedSub.style.backgroundColor = "rgba(219, 0, 0, 0)";

  // append the inner div to the outermost div
  mainSub.appendChild(textBasedSub);

  // add the element to the document body
  const video = document.querySelector("video");
  if (video?.parentNode) {
    video.parentNode.appendChild(mainSub);
  }
}

function createNativeSubtitle() {
  // create the outermost div element
  const secondSub = document.createElement("div");
  secondSub.id = "secondSub";
  secondSub.style.left = "269.883px";
  secondSub.style.right = "0px";
  secondSub.style.display = "flex";
  secondSub.style.flexDirection = "column";
  secondSub.style.alignItems = "center";
  secondSub.style.position = "absolute";
  secondSub.style.width = "200.234px";
  secondSub.style.top = "708.481px";

  // create the inner div element
  const textBasedSub = document.createElement("div");
  textBasedSub.classList.add("textBasedSub");
  textBasedSub.style.fontSize = "14.985px";
  textBasedSub.style.fontWeight = "500";
  textBasedSub.style.fontFamily = "Arial, sans-serif";
  textBasedSub.style.color = "rgb(255, 255, 255)";
  textBasedSub.style.backgroundColor = "rgba(0, 0, 0, 0)";

  // append the inner div to the outermost div
  secondSub.appendChild(textBasedSub);

  const video = document.querySelector("video");
  if (video?.parentNode) {
    video.parentNode.appendChild(secondSub);
  }
}
