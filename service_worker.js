chrome.runtime.onMessage.addListener(async (message, sender) => {
  if (message.type === "getInitialSetup") {
    await chrome.storage.sync.get(
      ["langPractice", "langNative", "duotokEnabled"],
      (result) => {
        const settings = {
          langPractice: result.langPractice,
          langNative: result.langNative,
          duotokEnabled: result.duotokEnabled,
        };
        chrome.tabs.sendMessage(sender.tab.id, settings);
      }
    );
  }
  if (message.type === "setAvailableLanguages") {
    await chrome.storage.sync.set({ availableLanguages: message.data });
  }
});

// chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
//   if (message.type === "isDuotokEnabled") {
//     const isDuotokEnabled = (await chrome.storage.sync.get(["duotokON"]))
//       .duotokON;
//     sendResponse({ response: "Message received" });
//     return true;
//   }
// });

// Get feedback on uninstall.
chrome.runtime.setUninstallURL("https://neyxaiuqdgy.typeform.com/to/jlwxlHC2");
