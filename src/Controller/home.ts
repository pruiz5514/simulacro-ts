const logoutButton = document.querySelector("#logout-button");

document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("token")) {
        window.location.href = "/";
    }
})

logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
})