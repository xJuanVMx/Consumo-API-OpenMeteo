export function guardarDatos(data){

    localStorage.setItem("clima", JSON.stringify(data));

}


export function cargarDatos(){

    const data = localStorage.getItem("clima");

    if(data){
        return JSON.parse(data);
    }

    return null;
}