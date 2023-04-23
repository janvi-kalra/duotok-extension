var s = document.createElement("script");
s.src = chrome.runtime.getURL("inject.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

// Create a new style element for the PRACTICE_LANGUAGES
const practiceLangStyle = document.createElement("style");
practiceLangStyle.setAttribute("ng-repeat", "l in languages");
practiceLangStyle.setAttribute("class", "ng-binding ng-scope");
practiceLangStyle.textContent =
  "::cue(c.lang1) {\n    font-size: 50px;\n    color: #ffffff;\n}";
document.body.appendChild(practiceLangStyle);

// Create a new style element for the NATIVE_LANGUAGES
const nativeLangStyle = document.createElement("style");
nativeLangStyle.setAttribute("ng-repeat", "l in languages");
nativeLangStyle.setAttribute("class", "ng-binding ng-scope");
nativeLangStyle.textContent =
  "::cue2(c.lang2) {\n    font-size: 30px; color: #f3f361\n}";
document.body.appendChild(nativeLangStyle);
