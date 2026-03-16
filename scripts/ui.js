import { obtenerCoordenadas, obtenerClima } from "./service.js";
import { guardarDatos, cargarDatos } from "./persistance.js";
import { state } from "./state.js";

export function iniciarApp(){

    const guardado = cargarDatos();

    if(guardado){
        mostrarClima(guardado.ciudad, guardado.clima);
    }

}


export async function manejarBusqueda(e){

    e.preventDefault();

    const ciudad = document.getElementById("ciudad").value;

    try{

        const datosCiudad = await obtenerCoordenadas(ciudad);

        const clima = await obtenerClima(
            datosCiudad.latitude,
            datosCiudad.longitude
        );

        state.ciudad = datosCiudad.name;
        state.clima = clima;

        mostrarClima(state.ciudad, state.clima);

        guardarDatos(state);

    }catch(error){

        mostrarError("No se pudo obtener el clima");

    }

}


function mostrarClima(ciudad, clima){

    const contenedor = document.getElementById("resultado");

    contenedor.innerHTML = `
        <div class="card">
            <h2>${ciudad}</h2>
            <p>Temperatura: ${clima.temperature} °C</p>
            <p>Viento: ${clima.windspeed} km/h</p>
            <p>Código clima: ${clima.weathercode}</p>
            <p> ${clima.time}</p>
        </div>
    `;
}


function mostrarError(mensaje){

    const contenedor = document.getElementById("resultado");

    contenedor.innerHTML = `<p>${mensaje}</p>`;
}