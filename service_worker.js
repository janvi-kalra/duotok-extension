// chrome.runtime.getPackageDirectoryEntry(function (root) {
//   root.getFile(
//     "intercept.js",
//     {},
//     function (fileEntry) {
//       fileEntry.file(function (file) {
//         var reader = new FileReader();
//         reader.onloadend = function (e) {
//           localStorage.setItem("intercept", e.currentTarget.result);
//         };
//         reader.readAsText(file);
//       }, null);
//     },
//     null
//   );
//   root.getFile(
//     "panel_inserted.html",
//     {},
//     function (fileEntry) {
//       fileEntry.file(function (file) {
//         var reader = new FileReader();
//         reader.onloadend = function (e) {
//           localStorage.setItem("panel_inserted", e.currentTarget.result);
//         };
//         reader.readAsText(file);
//       }, null);
//     },
//     null
//   );
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message == "intercept") {
//     sendResponse({ message: localStorage.getItem("intercept") });
//   } else if (request.message == "main_url") {
//     sendResponse({ message: localStorage.getItem("main_url") });
//   } else if (request.message == "panel_inserted") {
//     sendResponse({ message: localStorage.getItem("panel_inserted") });
//   }
// });

// var main_url = chrome.app.getDetails().content_scripts[0].matches[0];
// main_url = main_url.substring(0, main_url.substring(8).indexOf("/") + 8);
// localStorage.setItem("main_url", main_url);

// var callback = async function (details) {
//   if (details.url.indexOf("/?o=") != -1) {
//     try {
//       const response = await fetch(details.url);
//       const data = response.json();
//       console.log(data);

//       // test it out with a typical fetch call
//       fetch(details.url)
//         .then((response) => response.json())
//         .then((json) => console.log("original caller received:", json))
//         .catch((err) => console.error(err));

//       // chrome.storage.local.set({ key: value }).then(() => {
//       //   console.log("Value is set to " + value);
//       // });
//     } catch (e) {
//       console.log("hit an error", e);
//     }
//   }
// };

// chrome.webRequest.onBeforeRequest.addListener(callback, {
//   urls: ["<all_urls>"],
// });

// url.indexOf("/?o=") != -1
