Object.keys(localStorage)
  .filter((f) => f.match(/lang\d*-sub-\d*/))
  .forEach((i) => localStorage.removeItem(i));

var app = angular.module("MyApp", ["ng-file-model"]);
app.controller("MyCtrl", function ($scope, $http, $interval, $timeout) {
  $scope.languages = [];
  subtitleMap = {};

  $scope.nonWesternLanguages = function () {
    if ($scope.nonWesternLanguagesObserver == undefined) {
      $scope.nonWesternLanguagesObserver = true;
    }
  };

  $scope.newSubtitleRequest = function (data) {
    const parsedSubtitles = parseXMLSubtitles(data);
    currentSubtitle = parsedSubtitles;
  };

  $scope.saveSubtitleToStorage = function (sub) {
    localStorage.setItem(sub.name, JSON.stringify(sub));
    console.log(
      `${LANG_TYPE} saved subtitle to storage for subname ${sub.name}`
    );
  };

  document.addEventListener("RESET", function () {
    $scope.languages = [];
    subtitleMap = {};
    LANGUAGE = ""; // Connecting Network interception with selected lang in Netflix UI.
    INITIAL_SUBS = "";
  });

  document.addEventListener("NEW_SUBTITLE", function (e) {
    var { data } = e.detail;
    if (LANGUAGE === "") {
      INITIAL_SUBS = data;
      console.log(`First time Netflix loading`);
    }
    if (LANGUAGE) {
      subtitleMap[LANGUAGE] = data;
      console.log(`Received and stored subtitles for ${LANGUAGE}`);
    }
    try {
      $scope.newSubtitleRequest(data);
    } catch (err) {
      console.log("unable to apply them err:", err);
    }
  });

  chrome.storage.onChanged.addListener((changes) => {
    for (let [item, { oldValue, newValue }] of Object.entries(changes)) {
      if (item === "duotokEnabled") {
        chrome.runtime.sendMessage({ type: "RELOAD" });
      }
      if (item === "") {
        setLanguage(newValue, "practice");
        const alreadyLoadedSubs = subtitleMap[LANGUAGE];
        if (alreadyLoadedSubs) {
          $scope.newSubtitleRequest(alreadyLoadedSubs);
        }
      }
    }
  });

  $scope.bottomPositionNonWesternLanguages = window.screen.availHeight - 150;
  $scope.timeTextTrackDeleted = true;
  $scope.applySavedConfigs = function () {};
});

//if page changes then reset controls eg: another episode of a series
var LANGUAGE = "";
var INITIAL_SUBS = "";
var oldLocation = location.href;
var trackId =
  document.location.toString().match(/.*?\/watch\/(\d+).*/) != null &&
  document.location.toString().match(/.*?\/watch\/(\d+).*/).length > 1
    ? document.location.toString().match(/.*?\/watch\/(\d+).*/)[1]
    : "";
var subtitlesPractice = [];
var subtitlesNative = [];
// Pointer to subtitlesPractice or subtitlesNative depending on what should be updated. Initially, it's subtitlesNative and then from there on out it's
// subtitlesPractice because that is what actually changes.
var currentSubtitle;

setInterval(function () {
  if (location.href != oldLocation) {
    oldLocation = location.href;
    trackId =
      document.location.toString().match(/.*?\/watch\/(\d+).*/) != null &&
      document.location.toString().match(/.*?\/watch\/(\d+).*/).length > 1
        ? document.location.toString().match(/.*?\/watch\/(\d+).*/)[1]
        : "";
    if (window.location.toString().indexOf("/watch/") != -1) {
      document.dispatchEvent(new CustomEvent("RESET", {}));
      initialSetup();
    }
  }
}, 10);

function showControls() {
  const player = document.querySelector('[data-uia="player"]');
  const event = new PointerEvent("pointermove", {
    bubbles: true,
    cancelable: true,
    pointerType: "mouse", // set the pointer type to mouse
    clientX: 100, // set the x coordinate of the mouse pointer
    clientY: 200, // set the y coordinate of the mouse pointer
  });
  player?.dispatchEvent(event);
}

function showSubtitleSelection() {
  showControls();
  const subtitleBtn = document.querySelector(
    "button[data-uia='control-audio-subtitle']"
  );
  if (!subtitleBtn) {
    console.log("Cannot find 'control-audio-subtitle' button in DOM");
    return;
  }
  subtitleBtn.click();
  const hiddenSubtitleDiv = document.querySelector(".ltr-4dcwks");
  if (!hiddenSubtitleDiv) {
    console.log("Cannot find '.ltr-4dcwks' hidden in DOM");
    return;
  }
  hiddenSubtitleDiv.classList?.add("show");
}

// TODO(Janvi): Hacky way to close the controller tbh.
function hideSubtitleSelection() {
  const elem = document.querySelector(".ltr-4dcwks.show");
  elem.classList.remove("show");
}

function getSelectedSubtitleLanguage() {
  showSubtitleSelection();
  const chosenSub = document.querySelector(
    'li[data-uia*="subtitle-item-selected"]'
  );
  return chosenSub.innerText;
}

function changeNetflixAudioSubtitle(element, lang) {
  const languages = element.querySelectorAll("li");
  for (let i = 0; i < languages.length; i++) {
    const text = languages[i].innerText;
    if (text.includes(lang)) {
      languages[i].click();
      return languages[i];
    }
  }
  console.log(`Cannot find ${lang} in DOM`);
}

// function getAvailableLanguages() {
//   showSubtitleSelection();
//   var subtitleEl = document.querySelector(
//     'div[data-uia="selector-audio-subtitle"]'
//   ).children[1];
//   const availableSubtitles = subtitleEl.innerText.split("\n");
//   const availableLanguages = availableSubtitles.filter((language) => {
//     if (language === "Subtitles") return false;
//     const hasCounterpart = availableSubtitles.some(
//       (otherLanguage) => otherLanguage === language + " (CC)"
//     );
//     return !hasCounterpart || language.endsWith("(CC)");
//   });
//   hideSubtitleSelection();
//   return availableLanguages;
// }

function setLanguage(lang) {
  var errors;
  currentSubtitle = subtitlesPractice;

  try {
    showSubtitleSelection();
    const [audioEl, subtitleEl] = document.querySelector(
      'div[data-uia="selector-audio-subtitle"]'
    ).children;
    changeNetflixAudioSubtitle(audioEl, lang);
    changeNetflixAudioSubtitle(subtitleEl, lang);
    hideSubtitleSelection();
  } catch (err) {
    errors = err;
  }
  if (!errors) {
    LANGUAGE = lang;
    console.log(`Netflix Subtitles changed to ${LANGUAGE}`);
  }
}

function storeInitSubs() {
  if (LANGUAGE === "") {
    LANGUAGE = getSelectedSubtitleLanguage();
    subtitleMap[LANGUAGE] = INITIAL_SUBS;
    INITIAL_SUBS = "";
    console.log(`Netflix initial setting was ${LANGUAGE}, stored in map`);
  }
}

function setEnglishTranslations() {
  var errors;
  currentSubtitle = subtitlesNative;

  try {
    showSubtitleSelection();
    const [audioEl, subtitleEl] = document.querySelector(
      'div[data-uia="selector-audio-subtitle"]'
    ).children;
    changeNetflixAudioSubtitle(subtitleEl, "English");
    hideSubtitleSelection();
  } catch (err) {
    errors = err;
  }
  if (!errors) {
    LANGUAGE = "English";
    console.log(`Netflix Subtitles changed to ${LANGUAGE}`);
  }
}

function initialSetup() {
  const loadingVideo = document.querySelector("div.watch-video--loading-view");
  const videoScreen = document.querySelector("div.watch-video");
  const isOnVideoScreen = window.location.toString().indexOf("/watch/") != -1;

  if (!loadingVideo && videoScreen && isOnVideoScreen) {
    chrome.runtime.sendMessage({ type: "getInitialSetup" });

    chrome.runtime.onMessage.addListener((settings) => {
      if (!settings.duotokEnabled) {
        turnDuotokOff();
        return;
      }
      turnDuotokOn();
      storeInitSubs();
      setEnglishTranslations();
      setLanguage(settings.langPractice);
    });
  } else {
    // Still loading.
    // TODO: Make this a mutation observer. Will be more efficient.
    setTimeout(initialSetup, 100);
  }
}

function parseXMLSubtitles(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");

  const subtitles = Array.from(xmlDoc.getElementsByTagName("p")).map(
    (subtitleNode) => {
      const startTimeStr = subtitleNode.getAttribute("begin").replace("t", "");
      const endTimeStr = subtitleNode.getAttribute("end").replace("t", "");
      const spans = subtitleNode.querySelectorAll("span");
      let text = "";
      for (let span of spans) {
        text += `${span.textContent} `;
      }
      return {
        startTime: formatTimeTrack(startTimeStr),
        endTime: formatTimeTrack(endTimeStr),
        text,
      };
    }
  );
  return subtitles;
}

function updateNativeSubtitle(currentTime, subtitles) {
  const subtitleEl = document.getElementById("nativeSub");
  if (!subtitleEl || !subtitles) {
    return;
  }
  // Find the subtitle that matches the current time
  const currentSubtitle = subtitles.find((subtitle) => {
    return currentTime >= subtitle.startTime && currentTime < subtitle.endTime;
  });

  if (currentSubtitle) {
    // Has not changed
    if (currentSubtitle.text === CURR_NATIVE_SUB) {
      return;
    } else {
      CURR_NATIVE_SUB = currentSubtitle.text;
    }

    subtitleEl.querySelector(".nativeSubText").innerText = currentSubtitle.text;
  } else {
    subtitleEl.querySelector(".nativeSubText").innerText = "";
  }
}

let CURR_PRACTICE_SUB = "";
let CURR_NATIVE_SUB = "";

function updatePracticeSubtitle(currentTime, subtitles) {
  const subtitleEl = document.getElementById("practiceSub");
  if (!subtitleEl || !subtitles) {
    return;
  }
  // Find the subtitle that matches the current time
  const currentSubtitle = subtitles.find((subtitle) => {
    return currentTime >= subtitle.startTime && currentTime < subtitle.endTime;
  });

  if (currentSubtitle) {
    // Has not changed
    if (currentSubtitle.text === CURR_PRACTICE_SUB) {
      return;
    } else {
      CURR_PRACTICE_SUB = currentSubtitle.text;
    }

    const words = currentSubtitle.text.split(" ");
    const sentenceContainer = document.querySelector(".sentenceContainer");

    for (const word of words) {
      const wordSpan = document.createElement("span");
      wordSpan.className = "word";
      wordSpan.textContent = word;
      addWordListeners(wordSpan);
      sentenceContainer.appendChild(wordSpan);
    }
  } else {
    const sentenceContainer = document.querySelector(".sentenceContainer");
    const words = sentenceContainer.querySelectorAll(".word");
    for (const word of words) {
      sentenceContainer.removeChild(word);
    }
  }
}

// *********** entrypoint ***********
initialSetup();

// Update the relevant subtitle text
setInterval(() => {
  const video = document.querySelector("video");
  if (!video) {
    return;
  }
  let practiceSub = document.getElementById("practiceSub");
  let nativeSub = document.getElementById("nativeSub");

  updatePracticeSubtitle(video.currentTime, subtitlesPractice);
  updateNativeSubtitle(video.currentTime, subtitlesNative);
}, 100);
