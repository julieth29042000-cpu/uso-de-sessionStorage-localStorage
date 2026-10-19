// Función: guarda el nombre y cambia de página 
function guardar(){
                            //getItem--> busca o recupera información
    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;
    const error = document.getElementById("error");

    if (nombre === "") {
        alert("Escribe tu nombre");
        return;
    } 
    
    if (ciudad === ""){
        alert("Por favor, ingrese también la ciudad");
        return;
    }
    
    localStorage.setItem("nombre", nombre); // setItem --> Guarda en la bodega
    localStorage.setItem("ciudad", ciudad); 

    window.location.href = "pagina2.html";
}


//EVENTO: al hacer click en el boton, se ejecuta y guarda
document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("btn-guardar").addEventListener("click",guardar)
});