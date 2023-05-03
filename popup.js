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
  });

document
  .getElementById("languages-native")
  .addEventListener("change", async (event) => {
    console.log(`Changed NATIVE language to ${event.target.value}`);
    await chrome.storage.sync.set({ langNative: event.target.value });
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

const toggle = document.querySelector(".toggle-input");

toggle.addEventListener("change", function () {
  if (toggle.checked) {
    // Hide Netflix subtitles
    // Show lang1 & lang2 on the screen
    console.log("toggle ON");
  } else {
    // OFF:
    // Delete lang1 & lang2 from elements on the screen
    // Show original Netflix subtitles again
    // Set audio  back to English?
    console.log("toggle OFF");
  }
});
