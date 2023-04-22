document.addEventListener("DOMContentLoaded", async () => {
  // On DOM load, set the language in the popup to the language in storage
  const result = await chrome.storage.sync.get(["langPractice"]);
  if (result) {
    var langPractice = document.getElementById("languages-practice");
    langPractice.value = result.langPractice;
  } // Default subtitle is Spanish
  // TODO(janvi): What happens if no Spanish subtitle?
  else {
    await chrome.storage.sync.set({ langPractice: "Spanish" });
  }
});

// Change language in popup -> change language practice in storage
document
  .getElementById("languages-practice")
  .addEventListener("change", async (event) => {
    await chrome.storage.sync.set({ langPractice: event.target.value });
  });

// console.log(`have changed the practice language to ${event.target.value}`);
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   var tabId = tabs[0].id;
//   chrome.tabs.sendMessage(tabId, {
//     action: "changeLanguage",
//     language: event.target.value,
//   });
//   console.log("sent message!");
// });
