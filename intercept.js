(function () {
  var xhr = {};
  xhr.open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    if (url.indexOf("/?o=") != -1) {
      this.addEventListener("load", function () {
        window.postMessage(
          {
            detail: this.responseText,
            secret: "somerandompassword",
            message: "NEW_SUBTITLE",
          },
          document.location.toString()
        );
        // console.log(
        //   `calling intercept of subs with document.location ${document.location.toString()} and response text: ${
        //     this.responseText
        //   }`
        // );
      });
    }
    xhr.open.apply(this, arguments);
  };
})();
