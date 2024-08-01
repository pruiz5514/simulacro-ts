export const Card = () => {

    const container = document.createElement("article") as HTMLElement;
    const title = document.createElement("h3") as HTMLHeadElement;
    const country = document.createElement("p") as HTMLParagraphElement;
    const description = document.createElement("p") as HTMLParagraphElement;

    title.innerText = "Medellin";
    country.innerText = "Colombia";
    description.innerText = "Prueba";
    container.append(title, country, description);

    return container
}