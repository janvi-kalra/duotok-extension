const addNewBookmark = (bookmarks, bookmark) => {
  const bookmarkTitleElement = document.createElement("div");
  const controlsElement = document.createElement("div");
  const newBookmarkElement = document.createElement("div");

  bookmarkTitleElement.textContent = bookmark.desc;
  bookmarkTitleElement.className = "bookmark-title";
  controlsElement.className = "bookmark-controls";

  setBookmarkAttributes("play", onPlay, controlsElement);
  setBookmarkAttributes("delete", onDelete, controlsElement);

  newBookmarkElement.id = "bookmark-" + bookmark.time;
  newBookmarkElement.className = "bookmark";
  newBookmarkElement.setAttribute("timestamp", bookmark.time);

  newBookmarkElement.appendChild(bookmarkTitleElement);
  newBookmarkElement.appendChild(controlsElement);
  bookmarks.appendChild(newBookmarkElement);
};

const viewBookmarks = (currentBookmarks = []) => {
  const bookmarksElement = document.getElementById("bookmarks");
  bookmarksElement.innerHTML = "";

  if (currentBookmarks.length > 0) {
    for (let i = 0; i < currentBookmarks.length; i++) {
      const bookmark = currentBookmarks[i];
      addNewBookmark(bookmarksElement, bookmark);
    }
  } else {
    bookmarksElement.innerHTML = '<i class="row">No bookmarks to show</i>';
  }

  return;
};

const onPlay = async (e) => {
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
  const activeTab = await getActiveTabURL();

  chrome.tabs.sendMessage(activeTab.id, {
    type: "PLAY",
    value: bookmarkTime,
  });
};

const onDelete = async (e) => {
  const activeTab = await getActiveTabURL();
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
  const bookmarkElementToDelete = document.getElementById(
    "bookmark-" + bookmarkTime
  );

  bookmarkElementToDelete.parentNode.removeChild(bookmarkElementToDelete);

  chrome.tabs.sendMessage(
    activeTab.id,
    {
      type: "DELETE",
      value: bookmarkTime,
    },
    viewBookmarks
  );
};

const setBookmarkAttributes = (src, eventListener, controlParentElement) => {
  const controlElement = document.createElement("img");

  controlElement.src = "assets/" + src + ".png";
  controlElement.title = src;
  controlElement.addEventListener("click", eventListener);
  controlParentElement.appendChild(controlElement);
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("here");
  // const activeTab = await getActiveTabURL();
  // if (activeTab.url.includes("netflix.com")) {
  //   chrome.storage.sync.get([currentVideo], (data) => {
  //     const currentVideoBookmarks = data[currentVideo]
  //       ? JSON.parse(data[currentVideo])
  //       : [];
  //     viewBookmarks(currentVideoBookmarks);
  //   });
  // } else {
  //   const container = document.getElementsByClassName("container")[0];
  //   container.innerHTML =
  //     '<div class="title">This is not a netflix video page.</div>';
  // }
  chrome.storage.sync.get(["langPractice"]).then((result) => {
    console.log("Value currently is " + result.key);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, {
        action: "changeLanguage",
        language: result,
      });
    });
  });
});

// document
//   .getElementById("language-select")
//   .addEventListener("change", (event) => {
//     chrome.storage.sync.set({ langPractice: event.target.value }, function () {
//       console.log("language to practice is set to " + event.target.value);
//     });
//   });

document
  .getElementById("language-select")
  .addEventListener("change", (event) => {
    console.log(`have changed the practice language to ${event.target.value}`);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, {
        action: "changeLanguage",
        language: event.target.value,
      });
      console.log("sent message!");
    });
  });
