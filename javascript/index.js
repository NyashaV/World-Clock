function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let interlakenElement = document.querySelector("#interlaken");
  let interlakenDateElement = interlakenElement.querySelector(".date");
  let interlakenTimeElement = interlakenElement.querySelector(".time");
  let interlakenTime = moment().tz("Europe/Zurich");

  interlakenDateElement.innerHTML = interlakenTime.format("MMMM Do YYYY");
  interlakenTimeElement.innerHTML = interlakenTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let capeTownElement = document.querySelector("#cape-town");
  let capeTownDateElement = capeTownElement.querySelector(".date");
  let capeTownTimeElement = capeTownElement.querySelector(".time");
  let capeTownTime = moment().tz("Africa/Johannesburg");

  capeTownDateElement.innerHTML = capeTownTime.format("MMMM Do YYYY");
  capeTownTimeElement.innerHTML = capeTownTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
