$("html").attr("ng-app", "MyApp");
$("html").attr("ng-controller", "MyCtrl");

var script = document.createElement("script");
chrome.runtime.sendMessage({ message: "intercept" }, function (response) {
  script.innerHTML = response.message;
  document.head.appendChild(script);
});

chrome.runtime.sendMessage({ message: "panel_inserted" }, function (response) {
  $("body").append(response.message);
});

chrome.runtime.sendMessage({ message: "main_url" }, function (response) {
  localStorage.setItem("main_url", response.message);
});
