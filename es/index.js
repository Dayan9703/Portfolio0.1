const logo = document.querySelectorAll("#logo-name path");
var animationLength = 2;
var animationDelay = 0.3;

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  var path = logo[i],
    length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.style.display = "block";
  path.style.animation = "line-anim " + animationLength + "s ease forwards " + animationDelay * i + "s";
  setTimeout(fixStroke.bind(undefined, path), (i * animationDelay + animationLength) * 1000);
}

function fixStroke(path) {
  path.style.strokeDasharray = 0;
}


var check = document.querySelector(".check");
check.addEventListener('click', idioma);

/*function idioma() {
  let id = check.checked;
  if (id = true) {
    location.href = "../index.html";
  } else {
    location.href = "index.html"
  }
}*/

async function idioma() {
  let id = check.checked;
  if (id = true) {
    try {
      await new Promise(window.location.href = '../index.html');
    } catch (error) {
      console.error('Error al cambiar de página', error);
    }
  } else {
    await new Promise(window.location.href = 'index.html');
  }
}

function mostrarMensaje(numero) {
  // Ocultar todos los mensajes
  document.getElementById("message1").classList.remove("visible");
  document.getElementById("message2").classList.remove("visible");
  document.getElementById("message3").classList.remove("visible");
  document.getElementById("message4").classList.remove("visible");
  document.getElementById("message5").classList.remove("visible");

  document.getElementById("message1").classList.add("oculto2");
  document.getElementById("message2").classList.add("oculto2");
  document.getElementById("message3").classList.add("oculto2");
  document.getElementById("message4").classList.add("oculto2");
  document.getElementById("message5").classList.add("oculto2");

  // Mostrar el mensaje seleccionado
  document.getElementById("message" + numero).classList.remove("oculto2");
  document.getElementById("message" + numero).classList.add("mensaje");
  // Mostrar el mensaje seleccionado
  document.getElementById("message" + numero).classList.add("visible");
}

function copiarEmail() {
  var email = "dayan.basultoreyes@gmail.com";
  var tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("¡Correo copiado!");
}
