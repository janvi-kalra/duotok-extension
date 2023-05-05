var s = document.createElement("script");
s.src = chrome.runtime.getURL("inject.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

let duotokEnabled = true;
// TODO(janvi): Have a message on the content script that goes "is it enabled?" -> goes to background script that
// asks if it's on/off -> background script sends a boolean response which you use to update "duotokEnabled".
// Then - in popup whenever you turn on/off, reload the Netflix page for simplicity for now.

if (!document.querySelector(".ng-binding") && duotokEnabled) {
  // Create a new style element for the PRACTICE_LANGUAGES
  const practiceLangStyle = document.createElement("style");
  practiceLangStyle.setAttribute("class", "ng-binding ng-scope");
  practiceLangStyle.textContent =
    "::cue(c.lang1) {\n    font-size: 50px;\n    color: #ffffff;\n}";
  document.body.appendChild(practiceLangStyle);

  // Create a new style element for the NATIVE_LANGUAGES
  const nativeLangStyle = document.createElement("style");
  nativeLangStyle.setAttribute("class", "ng-binding ng-scope");
  nativeLangStyle.textContent =
    "::cue(c.lang2) {\n    font-size: 30px; color: #f3f361\n}";
  document.body.appendChild(nativeLangStyle);
}

// Turn off.

// BUG: Doesn't get the languages if you install the extension while watching a Netflix show. Unable to grab all the potential languages.
//  Also, stop paying for Typeform!
// TODO: Add different files for the content script / code for each component. Example -- files for the flow of the toggle.
