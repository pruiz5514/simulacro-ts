import { CitiesController } from "./Cities.controller";
import { Card } from './Card'
import { Spinner } from "./Spinner";
import { IWeather } from "../Model/IWeather";
const logoutButton = document.querySelector("#logout-button") as HTMLElement;
const carSection = document.querySelector("#cards-section") as HTMLElement;
const loaderContainer = document.querySelector(".loader-container") as HTMLDivElement;

const url = "http://localhost:3000/";

loaderContainer.append(Spinner());
window.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("token")) {
        window.location.href = "/";
    }
    loaderContainer.style.display = "flex";
});

window.addEventListener("load", () => {
    setTimeout(() => {
        loaderContainer.style.display = "none";
    }, 500)

})



logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
})

async function showCities() {
    const citiesController = new CitiesController(url);
    const cities = await citiesController.getCities("cities");

    cities.forEach(async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=1433f62652d56feaa76a71063b993a94`);
        const data: IWeather = await response.json();
        carSection?.append(Card(city, data.main.temp))
    })
}


showCities()

