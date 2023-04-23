// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message == "intercept") {
//     sendResponse({ message: localStorage.getItem("intercept") });
//   } else if (request.message == "main_url") {
//     sendResponse({ message: localStorage.getItem("main_url") });
//   } else if (request.message == "panel_inserted") {
//     sendResponse({ message: localStorage.getItem("panel_inserted") });
//   }
// });

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message === "getLanguages") {
    await chrome.storage.sync.get(["langPractice", "langNative"], (result) => {
      const languages = {
        langPractice: result.langPractice,
        langNative: result.langNative,
      };
      chrome.tabs.sendMessage(sender.tab.id, languages);
    });
  }
});
