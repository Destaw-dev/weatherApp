let body = document.body;
let input = document.querySelector("input");
let btn = document.querySelector("button");
let output = document.querySelector(".output-container");

let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector(".p4");
let p5 = document.querySelector(".p5");
let p6 = document.querySelector(".p6");

function changeWeather(response, temp) {
  if (temp <= 0) {
    body.style.background =
      "url(https://images.unsplash.com/photo-1478719059408-592965723cbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=712&q=80)";
  } else if (
    response == "overcast clouds" ||
    response == "scattered clouds" ||
    response == "broken clouds"
  ) {
    body.style.background =
      "url(https://images.unsplash.com/photo-1483977399921-6cf94f6fdc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=793&q=80)";
  } else if (
    response == "light rain" ||
    response == "heavy rain" ||
    response == "rain" ||
    response == "moderate rain"
  ) {
    body.style.background =
      "url(https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlYXZ5JTIwcmFpbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)";
  } else if (response == "haze") {
    body.style.background =
      "url(https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=813&q=80)";
  } else {
    body.style.background =
      "url(https://images.unsplash.com/photo-1553901753-215db344677a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80)";
  }
}

btn.addEventListener("click", function () {
  let cityName = input.value;
  if (cityName != "") {
    let desc;
    let temp;
    let tempMin, tempMax, tempAll;
    let humidity;
    let time = new Date();

    const API_KEY = "4d563f8f7ab1768fab777425ea895522";
    const API = ` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=he`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", API);
    xhr.onload = function () {
      let deta = JSON.parse(xhr.responseText);
      console.log(deta);
      desc = deta.weather[0].description;
      temp = deta.main.temp;
      tempMin = deta.main.temp_min;
      tempMax = deta.main.temp_max;
      humidity = deta.main.humidity;

      temp = temp - 273.15;
      temp = Math.round(temp);


      changeWeather(desc, temp)
      temp = temp + 'C';
      output.innerHTML = `  
      <p class="p1"> bbbb${temp}</p>
      <p class="p2">${tempMin}</p>
      <p class="p3">${tempMin}</p>
      <p class="p4">${humidity}</p>
      <p class="p5"></p>
      <p class="p6"></p>`
    };
    xhr.send();
  }
});
