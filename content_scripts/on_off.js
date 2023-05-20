function turnDuotokOff() {
  removeDuotokLayer();
  resetNetflixSettings();
  showOriginalNetflixSubtitles();
}

function turnDuotokOn() {
  hideOriginalNetflixSubtitles();
  addDuotokLayer();
}

// ************** Helper Functions **************
function removeDuotokLayer() {
  document.querySelector(".duotokRoot")?.remove();
  showOriginalNetflixSubtitles();
}

function showOriginalNetflixSubtitles() {
  const textContainer = document.querySelector(".player-timedtext");
  if (textContainer) {
    textContainer.style.setProperty("display", "block", "important");
  }
}

function hideOriginalNetflixSubtitles() {
  const textContainer = document.querySelector(".player-timedtext");
  if (textContainer) {
    textContainer.style.setProperty("display", "none", "important");
  }
}

// Subtitles OFF. Audio to ORIGINAL.
function resetNetflixSettings() {
  showSubtitleSelection();
  const [audioEl, subtitleEl] = document.querySelector(
    'div[data-uia="selector-audio-subtitle"]'
  ).children;
  changeNetflixAudioSubtitle(audioEl, "Original");
  changeNetflixAudioSubtitle(subtitleEl, "Off");
  hideSubtitleSelection();
  LANG_TYPE = "lang1";
}
