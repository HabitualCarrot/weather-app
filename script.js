const degrees = document.querySelector("#degrees");
const form = document.querySelector("form");
const inp = document.querySelector("#inp");
const city = document.querySelector("#city");
const img = document.querySelector("img");

inp.setAttribute("size", inp.getAttribute("placeholder").length);

async function getWeather(place) {
  const resolve = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=5eb6238a5c794ab294e160627242602&q=" +
      place,
    { mode: "cors" }
  );
  const resolveData = await resolve.json();

  degrees.textContent = resolveData.current.temp_f + " F";
  city.textContent =
    resolveData.location.name + ", " + resolveData.location.region;
  img.src = resolveData.current.condition.icon;
}

form.addEventListener("keyup", (e) => {
  let place = inp.value;
  if (e.key === "Enter") {
    getWeather(place);
    inp.value = "";
  }
});

// default location
getWeather("Houston");
