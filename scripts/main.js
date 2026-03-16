import { iniciarApp, manejarBusqueda } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {

    iniciarApp();

    const form = document.getElementById("formClima");

    form.addEventListener("submit", manejarBusqueda);

});