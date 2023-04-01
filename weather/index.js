function get_report(city){

    if(city==""){
        heading,innerHTML="Please enter a city name";
    }
    heading.innerHTML="Details of "+city.toUpperCase();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bcb7667987msh998f1e128b05246p129d12jsn50f863642a71',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city='+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        CO2.innerHTML = response.CO.aqi;
        NO2.innerHTML = response.NO2.aqi;
        // PM2_5.innerHTML = response[3][0];
        SO2.innerHTML = response.SO2.aqi;
        Overall_aqi.innerHTML = response.overall_aqi;
    }).catch(err => console.error(err));
    
    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bcb7667987msh998f1e128b05246p129d12jsn50f863642a71',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options2)
    .then(response => response.json())
    .then(response => {
        Cloud_pct.innerHTML = response.cloud_pct;
        Feels_like.innerHTML = response.feels_like;
        Humidity.innerHTML = response.humidity;
        Max_temp.innerHTML = response.max_temp;
        Min_temp.innerHTML = response.min_temp;
        Temprature.innerHTML = response.temp;
        Wind_degrees.innerHTML = response.wind_degrees;
        Wind_speed.innerHTML = response.wind_speed;})
    .catch(err => console.error(err));
    
}
function find_city(){
    let city = document.getElementById('city_ent').value;
    get_report(city);
}
city_del.addEventListener("click",function() {
    city='delhi';
    get_report(city);
});
city_gur.addEventListener("click",function() {
    city='gurugram';
    get_report(city);
});
city_cha.addEventListener("click",function() {
    city='chandigarh';
    get_report(city);
});
city_luc.addEventListener("click",function() {
    city='lucknow';
    get_report(city);
});
city_ban.addEventListener("click",function() {
    city='bangalore';
    get_report(city);
});