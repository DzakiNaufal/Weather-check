const apiKey = "Masukkan Token API Anda di sini";

document.getElementById("searchBtn").addEventListener("click", function() {
  const city = document.getElementById("cityInput").value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Masukkan nama kota terlebih dahulu!");
  }
});

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Kota tidak ditemukan!");
      return response.json();
    })
    .then(data => {
      document.getElementById("weatherResult").classList.remove("hidden");
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temp").textContent = `Suhu: ${data.main.temp} °C`;
      document.getElementById("desc").textContent = `Cuaca: ${data.weather[0].description}`;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(error => {
      alert(error.message);
      document.getElementById("weatherResult").classList.add("hidden");
    });
}
