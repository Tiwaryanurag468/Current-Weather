const API_KEY = `ffd3358318ce5e57556654edc2828061`


const search=document.querySelector("#search");
const btn=document.querySelector("#btn");
const text=document.querySelector("#p2");
const feels_like=document.querySelector("#feels_like");
const humidity=document.querySelector("#humidity");
const pressure=document.querySelector("#pressure");
const temp=document.querySelector("#temp");
const temp_max=document.querySelector("#temp_max");
const temp_min=document.querySelector("#temp_min");
const wind=document.querySelector("#wind");

const displayData=((data)=>{
    feels_like.innerText="feels_like: "+data.main.feels_like+"°C";
    humidity.innerText="humidity: "+data.main.humidity+"%";
    pressure.innerText="pressure: "+data.main.pressure+" mb";
    temp.innerText="temp: "+data.main.temp+"°C";
    temp_max.innerText="temp_max: "+data.main.temp_max+"°C";
    temp_min.innerText="temp_min: "+data.main.temp_min+"°C";
    wind.innerText="wind: "+data.wind.speed+" m/s";

})
const getWeather=(async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response=await fetch(url);
    const data=await response.json();
    displayData(data);

})
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    getWeather(search.value);
})