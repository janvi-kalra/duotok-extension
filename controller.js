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

    // var allText = "";
    // parsedSubtitles.map((line) => (allText = `${allText} + ${line.text}`));

    console.log(`${LANG_TYPE} completed adding new subtitle`);
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
    LANG_TYPE = "lang1"; // Connecting Network interception with lang changed in popup.
    LANGUAGE = ""; // Connecting Network interception with selected lang in Netflix UI.
    INITIAL_SUBS = "";
  });

  document.addEventListener("NEW_SUBTITLE", function (e) {
    var { data } = e.detail;
    if (LANGUAGE === "") {
      INITIAL_SUBS = data;
      console.log(`${LANG_TYPE} first time Netflix loading`);
    }
    if (LANGUAGE) {
      subtitleMap[LANGUAGE] = data;
      console.log(`${LANG_TYPE} received and stored subtitles for ${LANGUAGE}`);
    }
    try {
      $scope.newSubtitleRequest(data);
    } catch (err) {
      console.log("unable to apply them err:", err);
    }
  });

  chrome.storage.onChanged.addListener((changes) => {
    for (let [item, { oldValue, newValue }] of Object.entries(changes)) {
      // NOTE: take away the use of lang1/2, just have a variable called - "currentSubs" that I update here based on what changed.
      if (item === "langPractice") {
        LANG_TYPE = "lang1";
      }
      if (item === "langNative") {
        LANG_TYPE = "lang2";
      }
      if (item === "duotokEnabled") {
        chrome.runtime.sendMessage({ type: "RELOAD" });
      }
      console.log(`${LANG_TYPE} changed from ${oldValue} to ${newValue}`);
      setLanguage(newValue);
      const alreadyLoadedSubs = subtitleMap[LANGUAGE];
      if (alreadyLoadedSubs) {
        $scope.newSubtitleRequest(alreadyLoadedSubs);
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
      return languages[i];
    }
  }
  console.log(`Cannot find ${lang} in DOM`);
}

function getAvailableLanguages() {
  showSubtitleSelection();
  var subtitleEl = document.querySelector(
    'div[data-uia="selector-audio-subtitle"]'
  ).children[1];
  const availableLanguages = subtitleEl.innerText
    .split("\n")
    .filter((l) => l !== "Subtitles" && !l.includes("(CC)"));
  hideSubtitleSelection();
  return availableLanguages;
}

function setLanguage(lang) {
  var errors;

  // First time setting the language. Store the original Netflix language.
  if (LANGUAGE === "") {
    LANGUAGE = getSelectedSubtitleLanguage();
    subtitleMap[LANGUAGE] = INITIAL_SUBS;
    INITIAL_SUBS = "";
    console.log(
      `${LANG_TYPE} Netflix initial setting was ${LANGUAGE}, stored in map`
    );
  }

  try {
    showSubtitleSelection();
    const [audioEl, subtitleEl] = document.querySelector(
      'div[data-uia="selector-audio-subtitle"]'
    ).children;
    if (LANG_TYPE == "lang1") {
      changeNetflixAudioSubtitle(audioEl, lang);
    }
    changeNetflixAudioSubtitle(subtitleEl, lang);
    hideSubtitleSelection();
  } catch (err) {
    errors = err;
  }
  if (!errors) {
    LANGUAGE = lang;
    console.log(`${LANG_TYPE} Netflix Subtitles changed to ${LANGUAGE}`);
  }
}

function initialSetup() {
  const loadingVideo = document.querySelector("div.watch-video--loading-view");
  const videoScreen = document.querySelector("div.watch-video");
  const isOnVideoScreen = window.location.toString().indexOf("/watch/") != -1;

  if (!loadingVideo && videoScreen && isOnVideoScreen) {
    chrome.runtime.sendMessage({ type: "getInitialSetup" });
    const availableLanguages = getAvailableLanguages();
    chrome.runtime.sendMessage({
      type: "setAvailableLanguages",
      data: availableLanguages,
    });

    chrome.runtime.onMessage.addListener((settings) => {
      if (!settings.duotokEnabled) {
        showOriginalNetflixSubtitles();
        return;
      }
      // Hide original Netflix subtitles
      addDuotokLayer();
      if (settings.langPractice) {
        LANG_TYPE = "lang1";
        setLanguage(settings.langPractice);
      }
      if (settings.langNative) {
        LANG_TYPE = "lang2";
        setLanguage(settings.langNative);
      }
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

function updateSubtitle(subtitleEl, currentTime, subtitles) {
  if (!subtitleEl || !subtitles) {
    return;
  }
  // Find the subtitle that matches the current time
  const currentSubtitle = subtitles.find((subtitle) => {
    return currentTime >= subtitle.startTime && currentTime < subtitle.endTime;
  });

  if (currentSubtitle) {
    subtitleEl.querySelector(".textBasedSub").innerText = currentSubtitle.text;
  } else {
    subtitleEl.querySelector(".textBasedSub").innerText = "";
  }
}

initialSetup();
setInterval(() => {
  const video = document.querySelector("video");
  if (!video) {
    return;
  }
  let practiceSub = document.getElementById("practiceSub");
  let nativeSub = document.getElementById("nativeSub");

  // TODO: Remove this block. Instead, on document load, add the duotok layer with the appropriate settings (from storage)
  if (!practiceSub || !nativeSub) {
    addDuotokLayer();
  }

  updateSubtitle(practiceSub, video.currentTime, subtitlesPractice);
  updateSubtitle(nativeSub, video.currentTime, subtitlesNative);
}, 100);

function showOriginalNetflixSubtitles() {
  // const textContainer = document.querySelector(".player-timedtext-text-container");
  // if (textContainer) {
  //   textContainer.style?.display = "none !important";
  // }
}

function hideOriginalNetflixSubtitles() {
  // const textContainer = document.querySelector(".player-timedtext-text-container");
  // if (textContainer) {
  //   textContainer.style?.display = "block !important";
  // }
}
