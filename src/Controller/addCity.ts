import { ICity } from "../Model/ICity";

const form = document.querySelector("form") as HTMLFormElement;
const city = document.querySelector("#new-city") as HTMLInputElement;
const country = document.querySelector("#new-country") as HTMLInputElement;
const cityDescription = document.querySelector("#newCity-description") as HTMLTextAreaElement;

const cityArray: ICity[] = JSON.parse(localStorage.getItem("cityArray") || "[]");

form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const newCity = {
        city: city.value,
        country: country.value,
        date: new Date(),
        cityDescription: cityDescription.value
    }


    cityArray.push(newCity);
    localStorage.setItem("cityArray", JSON.stringify(cityArray));
    form.reset();
    alert("Se agrego ciudad");
})