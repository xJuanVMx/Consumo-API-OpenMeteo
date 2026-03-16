export async function obtenerCoordenadas(ciudad){

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}&count=1&language=es&format=json`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    if(!data.results){
        throw new Error("Ciudad no encontrada");
    }

    return data.results[0];
}


export async function obtenerClima(lat, lon){

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    return data.current_weather;
}