import { other_netflix_shows } from "../other_netflix_shows.js";

document.addEventListener("DOMContentLoaded", async () => {
  // await getAvailableLanguages();
  // On DOM load, set the language in the popup to the language in storage
  await setPracticeLanguage();
  await setDuotokEnabled();
  await setAvailability();
});

listenForUpdatesInPopupSettings();
chrome.storage.onChanged.addListener(handleStorageChange);

function listenForUpdatesInPopupSettings() {
  document
    .getElementById("languages-practice")
    .addEventListener("change", async (event) => {
      // console.log(`Changed PRACTICE language to ${event.target.value}`);
      await chrome.storage.sync.set({ langPractice: event.target.value });
      updateMoreShowsSubtitle(event.target.value);
    });
}

// Function to handle changes in storage
function handleStorageChange(changes) {
  for (let [item, { oldValue, newValue }] of Object.entries(changes)) {
    if (item === "audioAvailability") {
      updateAvailabilityStatus("dubbingStatus", newValue);
    }
    if (item === "subtitleAvailability") {
      updateAvailabilityStatus("subtitleStatus", newValue);
    }
  }
}

const toggle = document.querySelector(".toggle-input");
toggle.addEventListener("change", async () => {
  await chrome.storage.sync.set({ duotokEnabled: toggle.checked });
  toggle.checked ? showPopupBody() : hidePopupBody();
});

async function setDuotokEnabled() {
  var init_value = true; // On installation, duotok is on.
  const duotokEnabled = await chrome.storage.sync.get(["duotokEnabled"]);
  if (duotokEnabled) {
    document.querySelector(".toggle-input").checked =
      duotokEnabled.duotokEnabled;

    duotokEnabled.duotokEnabled ? showPopupBody() : hidePopupBody();
  } else {
    await chrome.storage.sync.set({ duotokEnabled: init_value });
  }
}

async function setPracticeLanguage() {
  var init_practice_lang = "Spanish"; // Default practice language
  // Grab practice language from sync store and update selected item in popup list
  const langPractice = await chrome.storage.sync.get(["langPractice"]);
  if (langPractice) {
    var langPracticeList = document.getElementById("languages-practice");
    langPracticeList.value = langPractice.langPractice;
    init_practice_lang = langPractice.langPractice;
  } else {
    await chrome.storage.sync.set({ langPractice: init_practice_lang });
  }
  updateMoreShowsSubtitle(init_practice_lang);
  return init_practice_lang;
}

async function setAvailability() {
  var audioIsAvailable = false;
  const audioAvailability = await chrome.storage.sync.get([
    "audioAvailability",
  ]);
  var element = document.getElementById("dubbingStatus");
  if (audioAvailability) {
    audioIsAvailable = audioAvailability.audioAvailability;
  }
  if (audioIsAvailable) {
    element.textContent = `✅ Dubbing Available`;
  } else {
    element.textContent = `❌ Dubbing Unavailable`;
  }

  var subtitleIsAvailable = false;
  element = document.getElementById("subtitleStatus");
  const subtitleAvailability = await chrome.storage.sync.get([
    "subtitleAvailability",
  ]);
  if (subtitleAvailability) {
    subtitleIsAvailable = subtitleAvailability.subtitleAvailability;
  }
  if (subtitleIsAvailable) {
    element.textContent = `✅ Subtitles Available`;
  } else {
    element.textContent = `❌ Subtitles Unavailable`;
  }
}

// Function to update the availability status
function updateAvailabilityStatus(elementId, available) {
  const element = document.getElementById(elementId);
  const type = elementId === "subtitleStatus" ? "Subtitles" : "Dubbing";
  if (available) {
    element.textContent = `✅ ${type} Available`;
  } else {
    element.textContent = `❌ ${type} Unavailable`;
  }
}

function updateMoreShowsSubtitle(practiceLanguage) {
  var button = document.getElementById("watchOther");
  var linkToMore = other_netflix_shows[practiceLanguage];
  button.href = linkToMore;
  button.innerHTML = `More shows in ${practiceLanguage}`;
}

function showPopupBody() {
  document.querySelector(".containerBody").style.display = "block";
}

function hidePopupBody() {
  document.querySelector(".containerBody").style.display = "none";
}
