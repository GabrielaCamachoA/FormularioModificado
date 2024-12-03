const usuario ={
    nombre: "",
    edad: "",
    correo: "",
    telefono: "",
    direccion: "",
    urlFoto: ""
};

const div_perfil = document.getElementById("perfil");
const div_form = document.getElementById("formulario")
const titulo = document.getElementById("titulo");

function actualizarPerfil(event) {
    event.preventDefault();
    document.getElementById("foto").style.display= "block";
    usuario.nombre = document.getElementById("input-name").value;
    usuario.edad = document.getElementById("input-edad").value;
    usuario.correo = document.getElementById("input-correo").value;
    usuario.telefono = document.getElementById("input-tel").value;
    usuario.direccion = document.getElementById("input-direccion").value;
    usuario.urlFoto = document.getElementById("foto").src;
    
    titulo.style.display = 'none'
    titulo.innerHTML = ""
    div_form.innerHTML = "";
    div_form.classList.remove("form")
    
    div_perfil.innerHTML =  `
    <h1 class="h1Perfil">${usuario.nombre}</h1>
    <p>Edad: ${usuario.edad}</p>
    <p>Correo: ${usuario.correo}</p>
    <p>Telefono: ${usuario.telefono}</p>
    <p>Direccion: ${usuario.direccion}</p>
    <button type="button" onclick="mostrarFormulario()">Modificar</button>
    `
    div_perfil.style.padding = "20px 50px";
    div_perfil.style.display = "flex";
    div_perfil.style.flexDirection = "column";
    div_perfil.style.gap = "10px";
    h1.classList.add("h1Perfil");
}

function mostrarFormulario() {
    document.getElementById("foto").style.display= "none";
    div_perfil.innerHTML = "";
    titulo.style.display = 'block';
    titulo.innerText = "Welcome back!!!";
    div_form.classList.add("form")
    div_perfil.style.padding= "0";
    div_form.innerHTML = `
    <h2>Modificar datos</h2>
    <form onsubmit="actualizarPerfil(event)">
    <label for="input-name">Nombre</label>
    <input type="text" id="input-name" required value="${usuario.nombre}">
    <label for="input-edad">Edad</label>
    <input type="number" id="input-edad" required value="${usuario.edad}">
    <label for="input-correo">Correo</label>
            <input type="email" id="input-correo" required value="${usuario.correo}">
             <label for="input-tel">Telefono</label>
            <input type="text" id="input-tel" required value="${usuario.telefono}">
            <label for="input-direccion">Direccion</label>
            <input type="text" id="input-direccion" required value="${usuario.direccion}">
            <button type="button" onclick="cambiar_foto()">
                Seleccionar foto
            </button>
            <button type="button" onclick="soloFormulario()">Cancelar</button>
            <button type="submit" >Actualizar</button>
        </form>
     `
}

function soloFormulario() {
    document.getElementById("foto").style.display= "block"
    titulo.style.display = 'none';
    titulo.innerHTML = "";
    div_perfil.style.padding = "20px 50px",    
    div_form.classList.remove("form")
    div_form.innerHTML = "";
    div_perfil.innerHTML =  `
    <h1 class="h1Perfil">${usuario.nombre}</h1>
    <p>Edad: ${usuario.edad}</p>
    <p>Correo: ${usuario.correo}</p>
    <p>Telefono: ${usuario.telefono}</p>
    <p>Direccion: ${usuario.direccion}</p>
    <button type="button" onclick="mostrarFormulario()">Modificar</button>
     `
}

function cambiar_foto(){
    document.getElementById("foto").src = prompt("Ingresa la url de tu foto");
}