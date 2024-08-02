import { CitiesController } from "./Cities.controller";
import { Card } from './Card'
import { Spinner } from "./Spinner";
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

    cities.forEach(city => {
        carSection?.append(Card(city))
    })
}

showCities()

