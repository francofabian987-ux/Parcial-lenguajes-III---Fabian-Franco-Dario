function validarNombre(){

    let nombre = document.getElementById("nombre").value;
    let error = document.getElementById("errorNombre");

    let expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if(nombre.length < 3){
        error.innerHTML = "Debe ingresar mínimo 3 caracteres.";
        return false;
    }

    if(!expresion.test(nombre)){
        error.innerHTML = "Solo se permiten letras.";
        return false;
    }

    error.innerHTML = "";
    return true;
}

function validarDni(){

    let dni = document.getElementById("dni").value;
    let error = document.getElementById("errorDni");

    if(isNaN(dni)){
        error.innerHTML = "El DNI debe contener números.";
        return false;
    }

    if(dni.length !== 8){
        error.innerHTML = "El DNI debe tener 8 dígitos.";
        return false;
    }

    error.innerHTML = "";
    return true;
}

function validarFecha(){

    let fecha = document.getElementById("fechaNacimiento").value;
    let error = document.getElementById("errorFecha");

    let nacimiento = new Date(fecha);
    let hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    if(
        hoy.getMonth() < nacimiento.getMonth() ||
        (hoy.getMonth() === nacimiento.getMonth() &&
        hoy.getDate() < nacimiento.getDate())
    ){
        edad--;
    }

    if(edad < 18 || isNaN(edad)){
        error.innerHTML = "Debe ser mayor de 18 años.";
        return false;
    }

    error.innerHTML = "";
    return true;
}

function validarFormulario(){

    let nombreOk = validarNombre();
    let dniOk = validarDni();
    let fechaOk = validarFecha();

    let mensaje = document.getElementById("mensaje");
    let botonPreguntas = document.getElementById("btnPreguntas");

    if(nombreOk && dniOk && fechaOk){

        mensaje.innerHTML = "Formulario validado correctamente.";

        botonPreguntas.disabled = false;

    }else{

        mensaje.innerHTML = "";

        botonPreguntas.disabled = true;
    }
}

function preguntas(){

    let pregunta1 = prompt("¿Cuál es tu nacionalidad?");
    let pregunta2 = prompt("¿Cuál es tu nivel de conocimiento en programación?");
    let pregunta3 = prompt("¿Por qué elegiste esta carrera?");

    if(pregunta1 === null || pregunta1 === ""){
        pregunta1 = "No respondió";
    }

    if(pregunta2 === null || pregunta2 === ""){
        pregunta2 = "No respondió";
    }

    if(pregunta3 === null || pregunta3 === ""){
        pregunta3 = "No respondió";
    }

    let resultado = document.getElementById("resultadoPreguntas");

    resultado.innerHTML = `
        <h3>Respuestas del Usuario</h3>
        <p><strong>Pregunta 1:</strong> ${pregunta1}</p>
        <p><strong>Pregunta 2:</strong> ${pregunta2}</p>
        <p><strong>Pregunta 3:</strong> ${pregunta3}</p>
    `;
}
