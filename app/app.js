
function search() {
    let input = document.getElementById('input').value;

    let cle = document.getElementById('cle');
    let icon = document.getElementById('icon');
    let location = document.getElementById('location');
    let date = document.getElementById('date');
    let temperature = document.getElementById('temperature');
    let humidity = document.getElementById('humidity');
    let wind = document.getElementById('wind');
    let tblforcast = document.getElementById('tblforcast');
    //-----------------------------------------------------------------------
    let forcastdate = document.getElementById('forcastdate');
    let forcastimg = document.getElementById('forcastimg');
    let forcasttemp = document.getElementById('forcasttemp');
    let forcastdescrip = document.getElementById('forcastdescrip');
    let forcasthumidity = document.getElementById('forcasthumidity');
    let forcastwind = document.getElementById('forcastwind');

    let tblforcastboy = '';

    // ------------------------------------- curunt weather-------------------------------------

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=7c372a48fe7e4edc926141237243009&q=${input}&days=3`)
        .then(res => res.json())
        .then(data => {
            cle.innerText = data.current.temp_c;
            temperature.innerText = data.current.temp_c;
            icon.src = data.current.condition.icon
            location.innerHTML = data.location.name
            date.innerHTML = data.location.localtime
            humidity.innerHTML = data.current.humidity
            wind.innerHTML = data.current.wind_kph
            // wind_kph


            console.log(data);
            //   console.log(data.current.condition.icon);
        })

    //-------------------------------------forcast----------------------------------------------



    fetch(`http://api.weatherapi.com/v1/forecast.json?key=7c372a48fe7e4edc926141237243009 &q=${input}&days=3`)
        .then(res => res.json())
        .then(data => {
            data.forecast.forecastday.forEach(element => {
                tblforcastboy += `<tr>
                <td>${element.date}</td>
                <td><img src="${element.day.condition.icon}" alt="Weather icon"></td>
                <td>${element.day.mintemp_c} ℃</td>
                <td>daily_chance_of_rain ${element.day.daily_chance_of_rain} %</td>
                <td>${element.day.maxwind_kph} Kmph</td>
            </tr>`;
            });

            tblforcast.innerHTML = tblforcastboy;
        })
    console.log(input);
    
}

//--------------------------------------curunt- forcast sri lanka-----------------------------------
let tblcuruntforcastboy = '';
let tblforcast=document.getElementById('tblforcast')

   
    

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=7c372a48fe7e4edc926141237243009&q=sri lanka&days=3&aqi=no&alerts=yes`)
        .then(res => res.json())
        .then(data => {
            data.forecast.forecastday.forEach(element => {
                tblcuruntforcastboy += `<tr>
                <td>${element.date}</td>
                <td><img src="${element.day.condition.icon}" alt="Weather icon"></td>
                <td>${element.day.mintemp_c} ℃</td>
                <td>daily_chance_of_rain ${element.day.daily_chance_of_rain} %</td>
                <td>${element.day.maxwind_kph} Kmph</td>
            </tr>`;

            cle.innerText = data.current.temp_c;
            temperature.innerText = data.current.temp_c;
            icon.src = data.current.condition.icon
            location.innerHTML = data.location.name
            date.innerHTML = data.location.localtime
            humidity.innerHTML = data.current.humidity
            wind.innerHTML = data.current.wind_kph

            console.log(data);
            
            });


            tblforcast.innerHTML = tblcuruntforcastboy;
        })

    