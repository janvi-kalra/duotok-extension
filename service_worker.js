chrome.runtime.onMessage.addListener(async (message, sender) => {
  if (message.type === "getInitialSetup") {
    await chrome.storage.sync.get(
      ["langPractice", "duotokEnabled"],
      (result) => {
        const settings = {
          langPractice: result.langPractice,
          duotokEnabled: result.duotokEnabled,
        };
        chrome.tabs.sendMessage(sender.tab.id, settings);
      }
    );
    return true;
  }
  // if (message.type === "setAvailableLanguages") {
  //   await chrome.storage.sync.set({ availableLanguages: message.data });
  //   return true;
  // }
  if (message.type === "RELOAD") {
    chrome.tabs.reload();
  }
});

// Get feedback on uninstall.
chrome.runtime.setUninstallURL("https://neyxaiuqdgy.typeform.com/to/jlwxlHC2");
