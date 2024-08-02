import '../scss/Spinner.scss';
export const Spinner = (): HTMLDivElement => {
    const spinnerContainer = document.createElement("div") as HTMLDivElement;
    const spinner = document.createElement("div") as HTMLDivElement;

    spinnerContainer.className = "spinner-container";

    spinner.innerHTML = `<div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>`;

    spinnerContainer.append(spinner);

    return spinnerContainer
}