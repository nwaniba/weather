let btn = document.getElementById("searchBtn");
btn.addEventListener("click", weatherForecast);
function weatherForecast() {
    let userInp = document.getElementById("cityInput");
    userInp = userInp.value
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${userInp}&appid=a92e106b9306e3cdfd393545aaa68f7f`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`)
            }
            return response.json();
        })

        .then(data => {
            let printInfo = document.getElementById("weatherInfo");
            let temp = data.main.temp;
            let descript = data.weather[0].descrition;
            let humid = data.main.humidity;

            let printInterest = `<p> Temperature: ${temp}C </p> <br> Description: ${descript} </p> <br> Humidity: ${humid}C </p>`;

            printInfo.innerHTML = printInterest
        })
        .catch(error => {
            console.error(`Error`, error);
        });
}