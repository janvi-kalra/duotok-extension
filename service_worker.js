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

  if (message.type === "AUDIO_AVAILABILITY") {
    await chrome.storage.sync.set({ audioAvailability: message.availability });
    return true;
  }

  if (message.type === "SUBTITLE_AVAILABILITY") {
    await chrome.storage.sync.set({
      subtitleAvailability: message.availability,
    });
    return true;
  }
  if (message.type === "RELOAD") {
    chrome.tabs.reload();
  }
});

// Get feedback on uninstall.
chrome.runtime.setUninstallURL("https://forms.gle/m3YRuRmBYQ9dE5gC6");
