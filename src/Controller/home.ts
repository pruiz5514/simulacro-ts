import { CitiesController } from "./Cities.controller";
import { Card } from './Card'
const logoutButton = document.querySelector("#logout-button");
const carSection = document.querySelector("#cards-section");

const url = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("token")) {
        window.location.href = "/";
    }
})

logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
})

async function showCities() {
    const citiesController = new CitiesController(url);
    const cities = await citiesController.getCities("cities");

    console.log(cities);

}

showCities()

carSection?.append(Card())