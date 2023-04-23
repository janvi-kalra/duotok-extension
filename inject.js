(function (xhr) {
  var XHR = XMLHttpRequest.prototype;
  var open = XHR.open;
  var send = XHR.send;
  var setRequestHeader = XHR.setRequestHeader;
  XHR.open = function (method, url) {
    this._method = method;
    this._url = url;
    this._requestHeaders = {};
    this._startTime = new Date().toISOString();
    return open.apply(this, arguments);
  };
  XHR.setRequestHeader = function (header, value) {
    this._requestHeaders[header] = value;
    return setRequestHeader.apply(this, arguments);
  };
  XHR.send = function (postData) {
    this.addEventListener("load", function () {
      var myUrl = this._url ? this._url.toLowerCase() : this._url;
      if (myUrl) {
        if (myUrl.indexOf("/?o=") != -1) {
          var responseData = this.response;

          console.log(`Intercepted Netflix subtitles at ${myUrl}`);

          document.dispatchEvent(
            new CustomEvent("yourCustomEvent", {
              url: myUrl,
              detail: responseData,
            })
          );

          this.addEventListener("load", function () {
            window.postMessage(
              {
                detail: this.responseText,
                secret: "somerandompassword",
                message: "NEW_SUBTITLE",
              },
              document.location.toString()
            );
          });
        }
      }
    });
    return send.apply(this, arguments);
  };
})(XMLHttpRequest);
