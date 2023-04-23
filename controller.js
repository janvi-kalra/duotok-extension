Object.keys(localStorage)
  .filter((f) => f.match(/lang\d*-sub-\d*/))
  .forEach((i) => localStorage.removeItem(i));

var app = angular.module("MyApp", ["ng-file-model"]);
app.controller("MyCtrl", function ($scope, $http, $interval, $timeout) {
  $scope.languages = [];
  subtitleMap = {};
  $scope.enableLanguage = function (l) {
    l.enabled = !l.enabled;
    var idx = findTrackIndexById(l.name);
    $scope.video.textTracks[idx].mode = l.enabled ? "showing" : "disabled";
  };

  // $scope.showDivControllerWhenSync = function () {
  //   return !$scope.sync ? "divControllerHover" : "";
  // };

  // $scope.hideDivController = function () {
  //   $scope.sync = false;
  //   $scope.languages.forEach(function (x) {
  //     x.show = false;
  //   });
  // };

  $scope.unmarkAllExcept = function (s, lang, languages) {
    if (s.marked) {
      lang.subSelected = s;
    }
    lang.subtitles.forEach(function (v) {
      if (v.id != s.id) {
        v.marked = false;
      }
    });

    languages = languages.filter(function (l) {
      return l.show;
    });

    if (
      languages.length > 1 &&
      languages[0].subSelected != undefined &&
      languages[1].subSelected != undefined
    ) {
      if (s.marked) {
        var offset =
          languages[0].subSelected.startTime -
          languages[1].subSelected.startTime;
        var sign = offset < 0 ? "" : "+";
        var offsetMsg = Number(offset).toFixed(2);
        $scope.video.pause();
        var r = window.confirm(`The difference between ${
          languages[0].name
        } and ${languages[1].name} is ${offsetMsg}\n
Do you want adjust time of subtitle ${languages[1].name} with ${
          sign + offsetMsg
        } s?`);
        if (r) {
          languages[1].offset = offset;
          $scope.changeTimeTrack(lang);
        }
        languages.forEach(function (lang) {
          lang.subtitles.forEach(function (v) {
            v.marked = false;
          });
        });
        languages[1].subSelected = undefined;
      }
    }
  };

  $scope.reconstructSubtitle = function (l) {
    var idx = findTrackIndexById(l.name);
    var cues = $scope.video.textTracks[idx].cues;
    l.subtitles = [];
    for (var i = 0; i < cues.length; i++) {
      var id = $(cues[i].text).attr("id");
      var cue = {
        text: cues[i].getCueAsHTML().textContent,
        startTime: cues[i].startTime,
        id: id,
        endTime: cues[i].endTime,
        marked: false,
        startTimeHumanReadable: convertTimeToHHMMSS(cues[i].startTime).match(
          /\d{2}:\d{2}:\d{2}/
        )[0],
        endTimeHumanReadable: convertTimeToHHMMSS(cues[i].endTime).match(
          /\d{2}:\d{2}:\d{2}/
        )[0],
      };
      cues[i].id = id;
      l.subtitles.push(cue);
    }
  };

  $scope.showSubtitlesTrack = function (l) {
    $scope.subtitleSelectTitle =
      $scope.languages.filter(function (x) {
        return x.show;
      }).length > 1
        ? `Select one track in subtitle ${$scope.languages[1].name} to syncronize with one track in subtitle ${$scope.languages[0].name}`
        : "";

    var idx = findTrackIndexById(l.name);

    $scope.reconstructSubtitle(l);

    if (!l.cueChangeEvent) {
      $("#sub" + l.name).dblclick(function () {
        document.execCommand("copy");
      });
      l.cueChangeEvent = true;
      $scope.video.textTracks[idx].addEventListener("cuechange", function (x) {
        if (l.show && x.target.activeCues.length > 0) {
          /*var act = x.target.activeCues;
          var finalText = "";
          for(var i = 0; i < act.length; i++){
            console.log(act[i]);
            finalText += act[i].text;
          }
          finalText = finalText.replace(/c\..*'/, `span id="${act[0].track.id}"`);
          finalText = finalText.replace('</c>', '</span>');
          finalText = finalText.replace(/\n/, '<br>');
          $('#subtitlesBottom').html(finalText);*/

          $scope.jumpTrackTo(l, x.target.activeCues[0].id);
        }
      });
    }
  };

  $scope.pauseVideo = function () {
    var play = $("[aria-label=Play]");
    if (!$scope.video.paused && play.length > 0) {
      $(play)[0].click();
    }
  };

  // $scope.jumpTrackTo = function (lang, trackId, pauseVideo) {
  //   if (pauseVideo) {
  //     $scope.pauseVideo();
  //   }
  //   if (
  //     trackId != undefined &&
  //     trackId.length >= 3 &&
  //     !lang.name.startsWith(trackId)
  //   ) {
  //     lang.listNameSearch = lang.listName;
  //     if (lang.jumpTo != undefined && lang.jumpTo.startsWith(lang.name)) {
  //       lang.jumpTo = "";
  //       lang.listNameSearch = "";
  //     }
  //   } else {
  //     lang.listNameSearch = "";
  //   }
  //   var e = trackId != undefined && trackId.length > 0 ? $("#" + trackId) : "";
  //   if (e.length > 0) {
  //     var seletorSubOverflow = "#sub" + lang.name + " .overflow";
  //     $(seletorSubOverflow)[0].scrollTop = $(e)[0].offsetTop - 20;
  //   }
  // };

  // $scope.changeTimeTrack = function (l) {
  //   Array.from($scope.video.textTracks).forEach((track) => {
  //     if (track.mode === "showing" && track.id == l.name) {
  //       var time = l.offset - track.lastOffset;
  //       Array.from(track.cues).forEach((cue) => {
  //         cue.startTime += time;
  //         cue.endTime += time;
  //       });
  //       track.lastOffset = l.offset;
  //     }
  //   });
  //   $scope.reconstructSubtitle(l);
  //   $("body").trigger("mousemove");
  // };

  $scope.nonWesternLanguages = function () {
    if ($scope.nonWesternLanguagesObserver == undefined) {
      $scope.nonWesternLanguagesObserver = true;
    }
  };

  $scope.changePosition = function (l, wait) {
    if (wait) {
      $timeout(function () {
        $scope.changePosition(l, false);
      }, 10000);
    } else {
      var idx = findTrackIndexById(l.name);
      if (
        $scope.video != undefined &&
        $scope.video.textTracks != undefined &&
        $scope.video.textTracks[idx] != undefined
      ) {
        var cues = $scope.video.textTracks[idx].cues;
        var line = l.position == "Top" ? 0 : -1;
        for (var i = 0; i < cues.length; i++) {
          cues[i].line = line;
        }
        localStorage.setItem(l.name + "-" + "fontPosition", l.position);
      }
    }
  };

  // $scope.deleteTrack = function (l) {
  //   var r = window.confirm("Are you sure?");
  //   if (r) {
  //     l.enabled = false;
  //     l.deleted = true;
  //     $scope.enableLanguage(l);
  //     localStorage.removeItem(description + "-sub-" + trackId);
  //   }
  // };

  $scope.newSubtitleRequest = function (data) {
    var description = LANG_TYPE === "lang1" ? "lang1" : "lang2";
    console.log(
      `${LANG_TYPE} received new subtitle request for ${description}`
    );
    var sub = processDXFPToVTT(data, description);
    var video = $("video");
    var half =
      (video.length > 0 && video[0].currentTime / video[0].duration <= 0.75) ||
      video.length == 0;
    if (
      data.indexOf("<?xml") >= 0 &&
      sub[1] >= 200 &&
      // $scope.languages.length <= 1 &&
      half
    ) {
      $scope.addSubtitleToVideo(sub, description);
    }
    console.log(`${LANG_TYPE} completed adding new subtitle`);
  };

  $scope.addSubtitleToVideo = function (sub, description) {
    // When adding for the first time, add the subs to the local storage. Skip after that.
    // var lengthOfSubs = Object.keys(localStorage).filter(function (e) {
    //   return (
    //     e.match(/lang\d-sub-/) &&
    //     e.split("-sub-")[1] == trackId &&
    //     localStorage.getItem(e) == sub[0]
    //   );
    // }).length;

    // if (lengthOfSubs == 0) {
    localStorage.setItem(description + "-sub-" + trackId, sub[0]);
    console.log(
      `${LANG_TYPE} updated the local storage with key value ${
        description + "-sub-" + trackId
      }`
    );
    // }

    $scope.languages = $scope.languages.filter((l) => l.name != description);
    $scope.languages.push({
      name: description,
      enabled: true,
      // offset: PRACTICE_LANG_OFFSET,
      // position: PRACTICE_LANG_POSITION,
      cueChangeEvent: false,
      deleted: false,
      subtitles: [],
      show: true,
      mode: "showing",
    });
    // console.log(sub[0]);
    var url = constructBlobURL(sub[0]);

    // addTrackVideo(url, description, description);

    // localStorage.removeItem(description + "-sub-load");
    $scope.saveSubtitleToStorage({
      name: description + "-sub-load",
      url: url,
      id: description,
      href: document.location.toString(),
      date: new Date().getTime(),
    });
  };

  $scope.saveSubtitleToStorage = function (sub) {
    localStorage.setItem(sub.name, JSON.stringify(sub));
    console.log(
      `${LANG_TYPE} saved subtitle to storage for subname ${sub.name}`
    );
  };

  // $scope.changeFontSize = function (lang) {
  //   localStorage.setItem(lang.name + "-" + "fontSize", lang.fontSize);
  // };

  // $scope.changeFontColor = function (lang) {
  //   localStorage.setItem(lang.name + "-" + "fontColor", lang.color);
  // };

  // $scope.showDivControllerFirstTime = function () {
  //   $("#divController").removeClass("divControllerHover");
  //   setTimeout(function () {
  //     $("#divController").addClass("divControllerHover");
  //   }, 1);
  // };

  // TODO: janvi. consider deleting if it's never used.
  $scope.dispatchMessage = function (data) {
    if (data.message == "NEW_SUBTITLE") {
      console.log(`${LANG_TYPE} called NEW_SUBTITLE}`);
      $scope.newSubtitleRequest(data);
      // $scope.showDivControllerFirstTime();
      $scope.applySavedConfigs();
    } else if (data.message == "RESET") {
      console.log(`${LANG_TYPE} called RESET}`);
      $scope.languages = [];
      subtitleMap = {};
      // $scope.showDivControllerFirstTime();
    }
  };

  document.addEventListener("New_Subtitle", function (e) {
    var { url, data } = e.detail;
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
      // $scope.showDivControllerFirstTime();
      $scope.applySavedConfigs();
    } catch (err) {
      console.log("unable to apply them err:", err);
    }
  });

  chrome.storage.onChanged.addListener((changes, namespace) => {
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

  // $scope.$watch("subtitleUpload", function () {
  //   if (
  //     $scope.subtitleUpload != undefined &&
  //     $scope.subtitleUpload.data != undefined
  //   ) {
  //     var description = "lang" + ($scope.languages.length + 1);
  //     var textSub = $scope.subtitleUpload.data;
  //     var sub = processSRTToVTT(textSub, description);
  //     $scope.addSubtitleToVideo(sub, description);
  //   }
  // });

  $interval(function () {
    $scope.applySavedConfigs();
  }, 100);

  $interval(function () {
    var timeTextTrack = ".image-based-timed-text svg";
    if ($(timeTextTrack).length > 0 && $scope.timeTextTrackDeleted) {
      var target = document.querySelector(timeTextTrack);
      if (target != undefined) {
        var observer = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (
              mutation.addedNodes != undefined &&
              mutation.addedNodes.length > 0 &&
              mutation.addedNodes[0].nodeName == "image"
            ) {
              mutation.addedNodes[0].setAttribute(
                "y",
                $scope.nonWesternLanguagesPosition || 50
              );
            }
          });
        });
        var config = { childList: true };
        observer.observe(target, config);
        $scope.timeTextTrackDeleted = false;
      }
    } else {
      $scope.timeTextTrackDeleted = true;
    }

    // $scope.showDivController =
    //   document.location.toString().indexOf("https://www.netflix.com/watch/") ==
    //   0;

    var subs = Object.keys(localStorage).filter(function (e) {
      return e.match(/lang\d-sub-load/);
    });
    subs.forEach(function (lang) {
      var lang = JSON.parse(localStorage.getItem(lang));
      if ($("video").length > 0) {
        if (lang != undefined) {
          $scope.video = $("video")[0];
          $($scope.video).css("height", "100%");
          addTrackVideo(lang.url, lang.id, lang.id);
          localStorage.removeItem(lang.name);
        }
      }
    });
  }, 5000);

  $scope.receiveMessage = function (event) {
    if (
      event.origin !== localStorage.getItem("main_url") ||
      event.data.secret != "somerandompassword"
    ) {
      return;
    }
    $scope.dispatchMessage(event.data);
  };
  window.addEventListener("message", $scope.receiveMessage, false);
  $scope.bottomPositionNonWesternLanguages = window.screen.availHeight - 150;
  $scope.timeTextTrackDeleted = true;

  $scope.applySavedConfigs = function () {
    var savedConfig = Object.keys(localStorage).filter(function (e) {
      return e.startsWith("lang");
    });

    // $scope.languages.forEach(function (language) {
    //   // Practicing Language
    //   if (language.name === "lang1") {
    //     language.color = PRACTICE_LANG_COLOR;
    //     language.fontSize = PRACTICE_LANG_FONTSIZE;
    //     language.position = PRACTICE_LANG_POSITION;
    //     language.offset = PRACTICE_LANG_OFFSET;
    //     language.show = true;
    //   }
    //   // Native Language
    //   else if (language.name === "lang2") {
    //     language.color = NATIVE_LANG_COLOR;
    //     language.fontSize = NATIVE_LANG_FONTSIZE;
    //     language.position = NATIVE_LANG_POSITION;
    //     language.offset = NATIVE_LANG_OFFSET;
    //     language.show = true;
    //   }
    // });

    // savedConfig.forEach(function (c) {
    //   var languageName = c.split("-")[0];
    //   var valueProperty = localStorage.getItem(c);
    //   if (c.indexOf("-sub-") >= 0 && c.split("-sub-")[1].endsWith(trackId)) {
    //     $scope.addSubtitleToVideo([valueProperty], languageName);
    //   }
    // });

    savedConfig.forEach(function (c) {
      var languageName = c.split("-")[0];
      var currentLanguage = $scope.languages.filter(
        (l) => l.name === languageName
      )[0];
      if (currentLanguage != undefined) {
        var valueProperty = localStorage.getItem(c);
        if (c.endsWith("fontSize")) {
          currentLanguage.fontSize = parseInt(valueProperty);
        }
        if (c.endsWith("fontColor")) {
          currentLanguage.color = valueProperty;
        }
        if (c.endsWith("fontPosition")) {
          currentLanguage.position = valueProperty;
          $scope.changePosition(currentLanguage, true);
        }
      }
    });
  };

  $scope.applySavedConfigs();
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
setInterval(function () {
  if (location.href != oldLocation) {
    oldLocation = location.href;
    trackId =
      document.location.toString().match(/.*?\/watch\/(\d+).*/) != null &&
      document.location.toString().match(/.*?\/watch\/(\d+).*/).length > 1
        ? document.location.toString().match(/.*?\/watch\/(\d+).*/)[1]
        : "";
    if (window.location.toString().indexOf("/watch/") != -1) {
      window.postMessage(
        {
          detail: this.responseText,
          secret: "somerandompassword",
          message: "RESET",
        },
        document.location.toString()
      );
    }
  }
}, 10);

function findTrackIndexById(id) {
  var index = -1;
  if ($("video")[0]) {
    var tracks = $("video")[0].querySelectorAll("track");
    tracks.forEach(function (e, i) {
      if (e.id == id) {
        index = i;
      }
    });
  }
  return index;
}

function addTrackVideo(url, label, id) {
  var video = $("video")[0];
  var track;
  // Before adding a new element with the same ID see if one already exists
  track = document.querySelector(`track[id=${id}]`);
  if (!track) {
    track = document.createElement("track");
    track.kind = "captions";
    track.id = id;
  }
  track.src = url;

  video.appendChild(track);
  var idx = findTrackIndexById(id);
  video.textTracks[idx].mode = "showing";
  video.textTracks[idx].lastOffset = 10;
}

// For returning the XML returned from netflix to VTT.
function processDXFPToVTT(xml, description) {
  xml = xml.replace(/<br[ ]*\/>/g, "\n");
  xml = parse(xml, "text/xml");
  var div = xml.querySelector("div");
  var subtitles = div.querySelectorAll("p");
  var subtitle = "WEBVTT FILE\n\n";

  for (var i = 0; i < subtitles.length; i++) {
    var subtitle_begin = subtitles[i].getAttribute("begin");
    var subtitle_end = subtitles[i].getAttribute("end");
    subtitle_begin = formatTimeTrack(subtitle_begin);
    subtitle_end = formatTimeTrack(subtitle_end);

    subtitle += subtitle_begin + " --> " + subtitle_end;
    subtitle += "\n";
    var subtitle_content =
      `<c.${description} id='${description + i}'>` + subtitles[i].textContent;

    while (true) {
      var subtitle_next =
        i + 1 == subtitles.length
          ? "999999"
          : subtitles[i + 1].getAttribute("begin");
      subtitle_next = formatTimeTrack(subtitle_next);
      if (subtitle_begin == subtitle_next) {
        subtitle_content += "\n" + subtitles[i + 1].textContent;
        i++;
      } else {
        break;
      }
    }

    subtitle += subtitle_content + "</c>\n\n";
    old_begin = subtitle_begin;
  }
  return [subtitle, subtitles.length];
}

function formatTimeTrack(time) {
  var divider = 1000 * 1000 * 10;
  if (isFormatTimeStamp(time)) {
    time = time.replace(/[^\d]/g, "") / divider;
    time = convertTimeToHHMMSS(time);
  }
  return time;
}

function isFormatTimeStamp(time) {
  var regex_hh_mm_ss_ttt = /\d{2}:\d{2}:\d{2}\.\d{3}/;
  var isFormatTimeStamp = time.match(regex_hh_mm_ss_ttt) == undefined;
  return isFormatTimeStamp;
}

function processSRTToVTT(text, description) {
  var subtitle = "WEBVTT FILE\n\n";
  var size = text.split(/^\d+$/m).filter(function (x) {
    return x.replace("[\n]", "").length != 0;
  });
  subtitle += text
    .split(/^\d+$/m)
    .filter(function (x) {
      return x.replace("[\n]", "").length != 0;
    })
    .map(function (x, id) {
      return (
        x.split("\n").splice(0, 2).join("\n") +
        `<c.${description} id='${description + id}'>` +
        x.split("\n").splice(2).join("\n") +
        `</c>`
      );
    })
    .join("\n");
  subtitle = subtitle.replace(/(\d{2}:\d{2}:\d{2})(,)(\d{1,3})/gm, "$1.$3");
  return [subtitle, size];
}

function getUrlVars() {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function showControls() {
  const player = document.querySelector('[data-uia="player"]');
  const event = new PointerEvent("pointermove", {
    bubbles: true,
    cancelable: true,
    pointerType: "mouse", // set the pointer type to mouse
    clientX: 100, // set the x coordinate of the mouse pointer
    clientY: 200, // set the y coordinate of the mouse pointer
  });
  player.dispatchEvent(event);
}

function showSubtitleSelection() {
  showControls();
  const subtitleBtn = document.querySelector(
    "button[data-uia='control-audio-subtitle']"
  );
  if (!subtitleBtn) {
    console.log("Cannot find 'control-audio-subtitle' button in DOM");
  }
  subtitleBtn.click();
  const hiddenSubtitleDiv = document.querySelector(".ltr-4dcwks");
  if (!hiddenSubtitleDiv) {
    console.log("Cannot find '.ltr-4dcwks' hidden in DOM");
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
    const subtitleLanguage = document.querySelector(
      `li[data-uia="subtitle-item-${lang}"]`
    );
    if (!subtitleLanguage) {
      console.log(
        `Cannot find ${lang} in DOM. Tried looking for document.querySelector(li[data-uia="subtitle-item-${lang}"]`
      );
    }
    subtitleLanguage?.click();
    hideSubtitleSelection();
  } catch (err) {
    errors = err;
  }
  if (!errors) {
    LANGUAGE = lang;
    console.log(`${LANG_TYPE} Netflix Subtitles changed to ${LANGUAGE}`);
  }
}

// Define your function
function myFunction() {
  chrome.runtime.sendMessage("getLanguages");
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
}

function checkForElement() {
  const element = document.querySelector("div.watch-video--loading-view");
  if (element === null) {
    // The element is no longer on the page, so call your function
    myFunction();
  } else {
    // The element is still on the page, so check again in 100 milliseconds
    setTimeout(checkForElement, 100);
  }
}

checkForElement();
