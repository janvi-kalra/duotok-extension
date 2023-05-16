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
    var description = LANG_TYPE === "lang1" ? "lang1" : "lang2";
    console.log(
      `${LANG_TYPE} received new subtitle request for ${description}`
    );

    const parsedSubtitles = parseXMLSubtitles(data);
    if (LANG_TYPE === "lang1") {
      subtitlesPractice = parsedSubtitles;
    } else {
      subtitlesNative = parsedSubtitles;
    }
  };

  document.addEventListener("RESET", function () {
    $scope.languages = [];
    subtitleMap = {};
    LANG_TYPE = "lang1"; // Connecting Network interception with lang changed in popup.
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
      if (item === "langPractice") {
        LANG_TYPE = "lang1";
        setPracticeLanguage(newValue);
        const alreadyLoadedSubs = subtitleMap[LANGUAGE];
        if (alreadyLoadedSubs) {
          $scope.newSubtitleRequest(alreadyLoadedSubs);
        }
      }
      if (item === "duotokEnabled") {
        chrome.runtime.sendMessage({ type: "RELOAD" });
      }
    }
  });

  $scope.bottomPositionNonWesternLanguages = window.screen.availHeight - 150;
  $scope.timeTextTrackDeleted = true;
  $scope.applySavedConfigs = function () {};
});

//if page changes then reset controls eg: another episode of a series
var LANG_TYPE = "lang1";
var LANGUAGE = "";
var PRACTICE_LANGUAGE = "";
var INITIAL_SUBS = "";
var oldLocation = location.href;
var trackId =
  document.location.toString().match(/.*?\/watch\/(\d+).*/) != null &&
  document.location.toString().match(/.*?\/watch\/(\d+).*/).length > 1
    ? document.location.toString().match(/.*?\/watch\/(\d+).*/)[1]
    : "";
var subtitlesPractice = [];
var subtitlesNative = [];

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
      return true;
    }
  }
  return false;
}

function setPracticeLanguage(lang) {
  var errors;
  wipeCurrPracticeSubtitle();

  try {
    showSubtitleSelection();
    const [audioEl, subtitleEl] = document.querySelector(
      'div[data-uia="selector-audio-subtitle"]'
    ).children;

    const audio_avail = changeNetflixAudioSubtitle(audioEl, lang);
    if (!audio_avail) {
      changeNetflixAudioSubtitle(audioEl, "Original");
    }
    chrome.runtime.sendMessage({
      type: "AUDIO_AVAILABILITY",
      availability: audio_avail,
    });

    const subs_avail = changeNetflixAudioSubtitle(subtitleEl, lang);
    if (!subs_avail) {
      subtitlesPractice = [];
    }
    chrome.runtime.sendMessage({
      type: "SUBTITLE_AVAILABILITY",
      availability: subs_avail,
    });

    hideSubtitleSelection();
  } catch (err) {
    errors = err;
  }
  if (!errors) {
    LANGUAGE = lang;
    PRACTICE_LANGUAGE = lang;
    console.log(`Netflix Subtitles changed to ${LANGUAGE}`);
  }
}

function storeInitSubs() {
  if (LANGUAGE === "") {
    LANGUAGE = getSelectedSubtitleLanguage();
    subtitleMap[LANGUAGE] = INITIAL_SUBS;
    LANGUAGE.includes("English")
      ? (subtitlesNative = parseXMLSubtitles(INITIAL_SUBS))
      : (subtitlesPractice = parseXMLSubtitles(INITIAL_SUBS));
    INITIAL_SUBS = "";
    console.log(`Netflix initial setting was ${LANGUAGE}, stored in map`);
  }
}

function setEnglishTranslations() {
  LANG_TYPE = "lang2";
  var errors;

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
      if (settings.langPractice) {
        LANG_TYPE = "lang1";
        setPracticeLanguage(settings.langPractice);
      }
      setEnglishTranslations();
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
      let text = extractSentenceFromHTML(subtitleNode);
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

  // No subtitles currently
  if (!currentSubtitle) {
    hideDefinitionPopup();
    wipeCurrPracticeSubtitle();
    return;
  }

  // Subtitle hasn't changed
  if (currentSubtitle.text === CURR_PRACTICE_SUB) {
    return;
  }

  // Update subtitle
  hideDefinitionPopup();
  CURR_PRACTICE_SUB = currentSubtitle.text;

  // Break into individual words
  let words;
  if (PRACTICE_LANGUAGE.includes("Chinese")) {
    words = [...currentSubtitle.text];
  } else {
    words = currentSubtitle.text.split(" ");
  }
  const sentenceContainer = document.querySelector(".sentenceContainer");

  // Create spans for each words
  for (const word of words) {
    const wordSpan = document.createElement("span");
    wordSpan.className = "word";
    wordSpan.textContent = word;
    addWordListeners(wordSpan);
    sentenceContainer.appendChild(wordSpan);
  }
}

function wipeCurrPracticeSubtitle() {
  const sentenceContainer = document.querySelector(".sentenceContainer");
  if (sentenceContainer) {
    sentenceContainer.innerHTML = "";
  }
}

function extractSentenceFromHTML(html) {
  let sentence = "";
  const nodes = html.childNodes;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    sentence += `${node.textContent.trim()} `;
  }
  return sentence.trim();
}

// *********** entrypoint ***********
initialSetup();

// Update the relevant subtitle text
setInterval(() => {
  const video = document.querySelector("video");
  if (!video) {
    return;
  }

  updatePracticeSubtitle(video.currentTime, subtitlesPractice);
  updateNativeSubtitle(video.currentTime, subtitlesNative);
}, 100);
