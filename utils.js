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

function formatTimeTrack(time) {
  var divider = 1000 * 1000 * 10;
  // First make time to HHMMSS
  if (isFormatTimeStamp(time)) {
    time = time.replace(/[^\d]/g, "") / divider;
    time = convertTimeToHHMMSS(time);
  }
  // Then convert to seconds
  return parseTime(time);
}

function isFormatTimeStamp(time) {
  var regex_hh_mm_ss_ttt = /\d{2}:\d{2}:\d{2}\.\d{3}/;
  var isFormatTimeStamp = time.match(regex_hh_mm_ss_ttt) == undefined;
  return isFormatTimeStamp;
}

function parseTime(timeString) {
  const timeParts = timeString.split(":");
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  const secondsParts = timeParts[2].split(".");
  const seconds = parseInt(secondsParts[0]);
  const milliseconds = parseInt(secondsParts[1]);
  return hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;
}

function isNonwesternLanguage(lang) {
  const nwlangs = [
    "Arabic",
    "Simplified Chinese",
    "Traditional Chinese",
    "Greek",
    "Hebrew",
    "Hindi",
    "Korean",
    "Russian",
    "Swahili",
    "Tamil",
    "Ukrainian",
    "Thai",
  ];
  return nwlangs.includes(lang);
}
