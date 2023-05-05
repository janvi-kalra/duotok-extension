import { other_netflix_shows } from "./other_netflix_shows.js";

document.addEventListener("DOMContentLoaded", async () => {
  await getAvailableLanguages();
  // On DOM load, set the language in the popup to the language in storage
  await setPracticeLanguage();
  await setNativeLanguage();
});

// Listen for updates in language popups
document
  .getElementById("languages-practice")
  .addEventListener("change", async (event) => {
    console.log(`Changed PRACTICE language to ${event.target.value}`);
    await chrome.storage.sync.set({ langPractice: event.target.value });
    updateMoreShowsSubtitle(event.target.value);
  });

document
  .getElementById("languages-native")
  .addEventListener("change", async (event) => {
    console.log(`Changed NATIVE language to ${event.target.value}`);
    await chrome.storage.sync.set({ langNative: event.target.value });
  });

// Update duotok on/off
const toggle = document.querySelector(".toggle-input");
toggle.addEventListener("change", async () => {
  if (toggle.checked) {
    await chrome.storage.sync.set({ duotokON: true });
  } else {
    await chrome.storage.sync.set({ duotokON: false });
  }
});

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

async function setNativeLanguage() {
  var init_native_lang = "English"; // Default native language
  // Grab native language from sync store and update selected item in popup list
  const langNative = await chrome.storage.sync.get(["langNative"]);
  if (langNative) {
    var langNativeList = document.getElementById("languages-native");
    langNativeList.value = langNative.langNative;
    init_native_lang = langNative.langNative;
  } else {
    await chrome.storage.sync.set({ langPractice: init_native_lang });
  }
  return init_native_lang;
}

async function getAvailableLanguages() {
  const availableLanguages = (
    await chrome.storage.sync.get(["availableLanguages"])
  ).availableLanguages;
  const select = document.querySelectorAll("select");
  // For both languages-native & languages-practice
  select?.forEach((list) => {
    availableLanguages?.forEach((l) => {
      const option = document.createElement("option");
      option.value = l;
      option.textContent = l;
      list.appendChild(option);
    });
  });
}

function updateMoreShowsSubtitle(practiceLanguage) {
  var subtitle = document.querySelector(".subtitle");
  var linkToMore = other_netflix_shows[practiceLanguage];
  subtitle.innerHTML = `Want to watching something else? <a target='blank' href=${linkToMore}>Here</a> are more shows that support learning ${practiceLanguage}`;
}
