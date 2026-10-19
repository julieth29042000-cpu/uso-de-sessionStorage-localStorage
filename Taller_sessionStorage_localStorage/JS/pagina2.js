//FUNCIÓN: leer el nombre y lo muestra
function mostrarNombre(){
                                //getItem--> busca o recupera información
    const nombre = localStorage.getItem("nombre");        //lee de la bodega
    const ciudad = localStorage.getItem("ciudad");

    if (nombre === null || nombre === ""){
        document.getElementById("saludo").textContent = "No hay ningún nombre guardado.";
    } else if (ciudad){
        document.getElementById("saludo").textContent = "Hola, " + nombre + ", de "+ ciudad;
    } else{
        document.getElementById("saludo").textContent = "Hola, " + nombre;
    }
}


//FUNCIÓN: borrar el nombre y vuelve a mostrar el resultado
function borrar(){
                //removeItem--> Elimina una parte de la información
    localStorage.removeItem("nombre")       //Elimina solo el nombre o la variable que se necesite
    mostrarNombre();        //Aqui se actualiza la pagina o mensaje 
}      

function limpiar(){
    localStorage.clear();       //Borrar todo 
    mostrarNombre();
}

//EVENTOS
document.addEventListener("DOMContentLoaded", ()=> {
    mostrarNombre();       //Muestra al cargar la página
document.getElementById("btn-borrar").addEventListener("click", borrar);        //Borra el nombre al dar click
document.getElementById("btn-limpiar").addEventListener("click", limpiar);
});