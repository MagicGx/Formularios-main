const boton = document.getElementById('bom');
let Video;

function video(){
    alert("Ahora se le presentará un video informativo sobre el tema")
    Video=window.open("https://www.paho.org/es/temas/prevencion-violencia#:~:text=La%20violencia%20es%20el%20“uso,muerte%2C%20privación%20o%20mal%20desarrollo.","width=800","height=600","scrollback=false")
}

boton.addEventListener('click',()=>{
    video();
})