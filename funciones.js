let boton_ocultar_txt = document.getElementById('boton_ocultar_txt')

let ocultar_txt = document.getElementById('ocultar_txt')

boton_ocultar_txt.addEventListener('click', ocultar_mostrar)

function ocultar_mostrar(){
    ocultar_txt.classList.toggle('show');

    if(ocultar_txt.classList.contains('show')) {
        boton_ocultar_txt.innerHTML = 'Leer Menos';
    }
    else {
        boton_ocultar_txt.innerHTML = 'Leer Más';
    }
}