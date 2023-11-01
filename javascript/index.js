function dateAndTime() {
    let tokyoElement = document.querySelector("#tokyo");
    let tokyoDate = tokyoElement.querySelector(".date");
    let tokyoTime = tokyoElement.querySelector(".time");
    let tokyo = moment().tz("Asia/Tokyo");

    tokyoDate.innerHTML = tokyo.format("ddd, MMM Do YYYY");
    tokyoTime.innerHTML = tokyo.format("hh:mm:ss [<small>]A[</small>]");

    let londonElement = document.querySelector("#london");
    let londonDate = londonElement.querySelector(".date");
    let londonTime = londonElement.querySelector(".time");
    let london = moment().tz("Europe/London");

    londonDate.innerHTML = london.format("ddd, MMM Do YYYY");
    londonTime.innerHTML = london.format("hh:mm:ss [<small>]A[</small>]");

    let newYorkElement = document.querySelector("#new-york");
    let newYorkDate = newYorkElement.querySelector(".date");
    let newYorkTime = newYorkElement.querySelector(".time");
    let newYork = moment().tz("America/New_York");

    newYorkDate.innerHTML = newYork.format("ddd, MMM Do YYYY");
    newYorkTime.innerHTML = newYork.format("hh:mm:ss [<small>]A[</small>]");
}
dateAndTime();
setInterval(dateAndTime, 1000);
