chrome.runtime.onMessage.addListener(async (message, sender) => {
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
