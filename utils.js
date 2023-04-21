function convertTimeToHHMMSS(secs) {
  //ES2015
  var toHHMMSS = (secs) => {
    var sec_num = parseFloat(secs, 10);
    var hours = Math.floor(sec_num / 3600) % 24;
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;
    return [hours, minutes, parseFloat(seconds).toFixed(3)]
      .map((v) => (v < 10 ? "0" + v : v))
      .join(":");
  };
  return toHHMMSS(secs);
}

function constructBlobURL(subtitle) {
  var url = URL.createObjectURL(new Blob([subtitle], { type: "text/vtt" }));
  return url.toString();
}

function parse(content, type) {
  var dom = new DOMParser();
  return dom.parseFromString(content, "text/xml");
}
