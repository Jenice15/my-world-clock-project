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

function addSearchCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityZone = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityZone.format("ddd, MMM Do YYYY")}</div>
            </div>
            <div class="time">
                ${cityZone.format("hh:mm:ss")} <small>${cityZone.format(
        "A"
    )}</small>
            </div>
        </div>
    `;
}

dateAndTime();
setInterval(dateAndTime, 1000);
setInterval(addSearchCity, 1000);

let searchCity = document.getElementById("search");
console.log(searchCity);
searchCity.addEventListener("change", addSearchCity);
