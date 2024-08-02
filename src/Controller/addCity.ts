import { ICity } from "../Model/ICity";
import { CitiesController } from "./Cities.controller";

const form = document.querySelector("form") as HTMLFormElement;
const city = document.querySelector("#new-city") as HTMLInputElement;
const country = document.querySelector("#new-country") as HTMLInputElement;
const image = document.querySelector("#new-img") as HTMLInputElement;
const cityDescription = document.querySelector("#newCity-description") as HTMLTextAreaElement;

// const cityArray: ICity[] = JSON.parse(localStorage.getItem("cityArray") || "[]"); // con local storage

const url = 'http://localhost:3000/';
const citiesController = new CitiesController(url);

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const newCity: ICity = {
        city: city.value,
        country: country.value,
        image: image.value,
        date: new Date(),
        cityDescription: cityDescription.value
    }

    try {
        const cityAdded = await citiesController.postCities("cities", newCity);
        alert("Se agrego ciudad");
        form.reset();
        window.location.href = "../View/home.html";
        console.log(cityAdded);

    } catch (e) {
        console.log(e);
    }



    // Con local storage
    // cityArray.push(newCity);
    // localStorage.setItem("cityArray", JSON.stringify(cityArray));
    // form.reset();
    // alert("Se agrego ciudad");
})