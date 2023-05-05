Object.keys(localStorage)
  .filter((f) => f.match(/lang\d*-sub-\d*/))
  .forEach((i) => localStorage.removeItem(i));

var app = angular.module("MyApp", ["ng-file-model"]);
app.controller("MyCtrl", function ($scope, $http, $interval, $timeout) {
  $scope.languages = [];
  subtitleMap = {};
  // $scope.enableLanguage = function (l) {
  //   l.enabled = !l.enabled;
  //   var idx = findTrackIndexById(l.name);
  //   $scope.video.textTracks[idx].mode = l.enabled ? "showing" : "disabled";
  // };

  // $scope.reconstructSubtitle = function (l) {
  //   var idx = findTrackIndexById(l.name);
  //   var cues = $scope.video.textTracks[idx].cues;
  //   l.subtitles = [];
  //   for (var i = 0; i < cues.length; i++) {
  //     var id = $(cues[i].text).attr("id");
  //     var cue = {
  //       text: cues[i].getCueAsHTML().textContent,
  //       startTime: cues[i].startTime,
  //       id: id,
  //       endTime: cues[i].endTime,
  //       marked: false,
  //       startTimeHumanReadable: convertTimeToHHMMSS(cues[i].startTime).match(
  //         /\d{2}:\d{2}:\d{2}/
  //       )[0],
  //       endTimeHumanReadable: convertTimeToHHMMSS(cues[i].endTime).match(
  //         /\d{2}:\d{2}:\d{2}/
  //       )[0],
  //     };
  //     cues[i].id = id;
  //     l.subtitles.push(cue);
  //   }
  // };

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
    // var sub = processDXFPToVTT(data, description);

    parseXMLSubtitles(data);

    // var video = $("video");
    // var half =
    //   (video.length > 0 && video[0].currentTime / video[0].duration <= 0.75) ||
    //   video.length == 0;
    // if (
    //   data.indexOf("<?xml") >= 0 &&
    //   sub[1] >= 200 &&
    //   // $scope.languages.length <= 1 &&
    //   half
    // ) {
    //   $scope.addSubtitleToVideo(sub, description);
    // }
    // updateNetflixTrack();
    console.log(`${LANG_TYPE} completed adding new subtitle`);
  };

  // $scope.addSubtitleToVideo = function (sub, description) {
  // When adding for the first time, add the subs to the local storage.
  // localStorage.setItem(description + "-sub-" + trackId, sub[0]);
  // console.log(
  //   `${LANG_TYPE} updated the local storage with key value ${
  //     description + "-sub-" + trackId
  //   }`
  // );
  // $scope.languages = $scope.languages.filter((l) => l.name != description);
  // $scope.languages.push({
  //   name: description,
  //   enabled: true,
  //   cueChangeEvent: false,
  //   deleted: false,
  //   subtitles: [],
  //   show: true,
  //   mode: "showing",
  // });
  // var url = constructBlobURL(sub[0]);
  // $scope.saveSubtitleToStorage({
  //   name: description + "-sub-load",
  //   url: url,
  //   id: description,
  //   href: document.location.toString(),
  //   date: new Date().getTime(),
  // });
  // };

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
    for (let [langType, { oldValue, newValue }] of Object.entries(changes)) {
      if (langType === "langPractice") {
        LANG_TYPE = "lang1";
      }
      if (langType === "langNative") {
        LANG_TYPE = "lang2";
      }
      console.log(`${LANG_TYPE} changed from ${oldValue} to ${newValue}`);
      setLanguage(newValue);
      const alreadyLoadedSubs = subtitleMap[LANGUAGE];
      if (alreadyLoadedSubs) {
        $scope.newSubtitleRequest(alreadyLoadedSubs);
      }
    }
  });

  // $interval(function () {
  //   $scope.applySavedConfigs();
  // }, 100);

  // function updateNetflixTrack() {
  //   var subs = Object.keys(localStorage).filter(function (e) {
  //     return e.match(/lang\d-sub-load/);
  //   });
  //   subs.forEach(function (lang) {
  //     var lang = JSON.parse(localStorage.getItem(lang));
  //     if ($("video").length > 0) {
  //       if (lang != undefined) {
  //         $scope.video = $("video")[0];
  //         $($scope.video).css("height", "100%");

  //         addTrackVideo(lang.url, lang.id);
  //         localStorage.removeItem(lang.name);
  //       }
  //     }
  //   });
  // }

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
var globalSubtitles = [];

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
      getLangsFromStorage();
    }
  }
}, 10);

// function findTrackIndexById(id) {
//   var index = -1;
//   if ($("video")[0]) {
//     var tracks = $("video")[0].querySelectorAll("track");
//     tracks.forEach(function (e, i) {
//       if (e.id == id) {
//         index = i;
//       }
//     });
//   }
//   return index;
// }

// function addTrackVideo(url, id) {
//   var video = $("video")[0];
//   var track;
//   // Before adding a new element with the same ID see if one already exists
//   track = document.querySelector(`track[id=${id}]`);
//   if (!track) {
//     track = document.createElement("track");
//     track.kind = "captions";
//     track.id = id;
//   }
//   track.src = url;

//   video.appendChild(track);
//   var idx = findTrackIndexById(id);
//   video.textTracks[idx].mode = "showing";
//   video.textTracks[idx].lastOffset = 10;
// }

// // For returning the XML returned from netflix to VTT.
// function processDXFPToVTT(xml, description) {
//   xml = xml.replace(/<br[ ]*\/>/g, "\n");
//   xml = parse(xml, "text/xml");
//   var div = xml.querySelector("div");
//   var subtitles = div.querySelectorAll("p");
//   var subtitle = "WEBVTT FILE\n\n";

//   for (var i = 0; i < subtitles.length; i++) {
//     var subtitle_begin = subtitles[i].getAttribute("begin");
//     var subtitle_end = subtitles[i].getAttribute("end");
//     subtitle_begin = formatTimeTrack(subtitle_begin);
//     subtitle_end = formatTimeTrack(subtitle_end);

//     subtitle += subtitle_begin + " --> " + subtitle_end;
//     subtitle += "\n";
//     var subtitle_content =
//       `<c.${description} id='${description + i}'>` + subtitles[i].textContent;

//     while (true) {
//       var subtitle_next =
//         i + 1 == subtitles.length
//           ? "999999"
//           : subtitles[i + 1].getAttribute("begin");
//       subtitle_next = formatTimeTrack(subtitle_next);
//       if (subtitle_begin == subtitle_next) {
//         subtitle_content += "\n" + subtitles[i + 1].textContent;
//         i++;
//       } else {
//         break;
//       }
//     }

//     subtitle += subtitle_content + "</c>\n\n";
//     old_begin = subtitle_begin;
//   }
//   return [subtitle, subtitles.length];
// }

function formatTimeTrack(time) {
  var divider = 1000 * 1000 * 10;
  // First make time to HHMMSS
  if (isFormatTimeStamp(time)) {
    time = time.replace(/[^\d]/g, "") / divider;
    time = convertTimeToHHMMSS(time);
  }
  // Then convert to seconds
  return parseTime(time);
}

function isFormatTimeStamp(time) {
  var regex_hh_mm_ss_ttt = /\d{2}:\d{2}:\d{2}\.\d{3}/;
  var isFormatTimeStamp = time.match(regex_hh_mm_ss_ttt) == undefined;
  return isFormatTimeStamp;
}

// function processSRTToVTT(text, description) {
//   var subtitle = "WEBVTT FILE\n\n";
//   var size = text.split(/^\d+$/m).filter(function (x) {
//     return x.replace("[\n]", "").length != 0;
//   });
//   subtitle += text
//     .split(/^\d+$/m)
//     .filter(function (x) {
//       return x.replace("[\n]", "").length != 0;
//     })
//     .map(function (x, id) {
//       return (
//         x.split("\n").splice(0, 2).join("\n") +
//         `<c.${description} id='${description + id}'>` +
//         x.split("\n").splice(2).join("\n") +
//         `</c>`
//       );
//     })
//     .join("\n");
//   subtitle = subtitle.replace(/(\d{2}:\d{2}:\d{2})(,)(\d{1,3})/gm, "$1.$3");
//   return [subtitle, size];
// }

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
    .filter((l) => l !== "Subtitles");
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

// Get langs in storage once Netflix loads.
function getLangsFromStorage() {
  const loadingVideo = document.querySelector("div.watch-video--loading-view");
  const videoScreen = document.querySelector("div.watch-video");
  const isOnVideoScreen = window.location.toString().indexOf("/watch/") != -1;
  // Don't run when loading.
  if (!loadingVideo && videoScreen && isOnVideoScreen) {
    chrome.runtime.sendMessage({ type: "getLanguages" });
    const availableLanguages = getAvailableLanguages();
    chrome.runtime.sendMessage({
      type: "setAvailableLanguages",
      data: availableLanguages,
    });

    chrome.runtime.onMessage.addListener((languages) => {
      if (languages.langPractice) {
        LANG_TYPE = "lang1";
        setLanguage(languages.langPractice);
      }
      if (languages.langNative) {
        LANG_TYPE = "lang2";
        setLanguage(languages.langNative);
      }
    });
  } else {
    // Still loading.
    setTimeout(getLangsFromStorage, 100);
  }
}

function parseXMLSubtitles(xmlText) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");

  globalSubtitles = Array.from(xmlDoc.getElementsByTagName("p")).map(
    (subtitleNode) => {
      const startTimeStr = subtitleNode.getAttribute("begin").replace("t", "");
      const endTimeStr = subtitleNode.getAttribute("end").replace("t", "");
      const text = subtitleNode.textContent;
      return {
        startTime: formatTimeTrack(startTimeStr),
        endTime: formatTimeTrack(endTimeStr),
        text,
      };
    }
  );
}

function parseTime(timeString) {
  const timeParts = timeString.split(":");
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  const secondsParts = timeParts[2].split(".");
  const seconds = parseInt(secondsParts[0]);
  const milliseconds = parseInt(secondsParts[1]);
  return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;
}

function showSubtitle(currentTime) {
  const subtitles = globalSubtitles;
  // Find the subtitle that matches the current time
  const currentSubtitle = subtitles.find((subtitle) => {
    return currentTime >= subtitle.startTime && currentTime < subtitle.endTime;
  });

  // Display the current subtitle in the subtitle div
  let subtitleDiv = document.getElementById("mainSub");

  if (!subtitleDiv) {
    addDuotokLayer();
    subtitleDiv = document.getElementById("mainSub");
  }

  // if (currentSubtitle) {
  //   subtitleDiv.childNodes[0].innerHTML = currentSubtitle.text;
  // } else {
  //   subtitleDiv.childNodes[0].innerHTML = "";
  // }
}

// Call the showSubtitle function periodically with the current time of your video player
setInterval(() => {
  const video = document.querySelector("video");
  if (!video) {
    return;
  }
  showSubtitle(video.currentTime);
}, 100);
