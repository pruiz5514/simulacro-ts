import { ICity } from "../Model/ICity";
import '../scss/Card.scss'

export const Card = (props: ICity): HTMLElement => {
    let { id, city, country, image, cityDescription } = props;
    const cardContainer = document.createElement("article") as HTMLElement;
    cardContainer.className = "card-container";

    const img = document.createElement("img") as HTMLImageElement;
    img.className = "img-card";

    const infoContainer = document.createElement("div") as HTMLElement;
    infoContainer.className = "cardInfo-container";

    const cardTitle = document.createElement("h4") as HTMLHeadElement;
    cardTitle.className = "card-title"
    const cardCountry = document.createElement("p") as HTMLParagraphElement;
    const cardDescription = document.createElement("p") as HTMLParagraphElement;

    img.src = image;
    cardTitle.innerText = city;
    cardCountry.innerText = country;
    cardDescription.innerText = cityDescription;

    const crossContainer = document.createElement("span");
    crossContainer.className = "cross-container";
    crossContainer.innerHTML = `<i product-id = ${id} class="bi bi-x-circle-fill"></i>`;

    infoContainer.append(cardTitle, cardCountry, cardDescription);

    cardContainer.append(img, infoContainer, crossContainer);

    return cardContainer;
}