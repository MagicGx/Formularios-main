const expresiones={
    usuarios:/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    contraseña: /^.{4,12}$/,
}

const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const formulario = document.getElementById('form');
const btnInicio = document.getElementById('btn-inicio');

formulario.addEventListener('submit', e=> {
    e.preventDefault();
    /* Validacion de ususario */
    if(expresiones.usuarios.test(usuario.value)==false){
        alert('Usuario no valido');
        usuario.focus();
    }
    if(usuario.length<2){
        alert('Nombre de usuario muy corto');
        usuario.focus();
    }
    if(usuario.length>15){
        alert('Nombre de usuario muy largo')
    }
    /* Validacion de contraseña */

    if(expresiones.contraseña.test(contraseña.value)==false){
        alert('contraseña incorrecta')
    }
    btnInicio.addEventListener('click', ()=>{
        window.location.assign('D:/visualstudiocode/pryfin2/Formularios-main/Formulario-de-questionario/index.html');
    })
})