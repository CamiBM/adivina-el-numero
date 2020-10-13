//establaciendo las variables necesarias para el juego
let random = Math.floor(Math.random() * 100) + 1;

let respuestas = document.querySelector(".campo-respuestas");
let enviarNum = document.querySelector(".enviar-numero");

let cantidad = document.querySelector(".cantidad");
let ultimoNum = document.querySelector(".num-anteriores");
let altoBajo = document.querySelector(".num-alto-o-bajo");

let contIntentos = 1;
let botonReinicio;

function verficicarNumero() {
  //se usa el metodo Number para corroborar que sea un número
  let respuestaUsuario = Number(respuestas.value);

  if (contIntentos === 1) {
    cantidad.textContent = "Números ingresados: ";
  }
  cantidad.textContent += respuestaUsuario + " ";

  if (respuestaUsuario === random) {
    ultimoNum.textContent = "¡Felicidades! Acertaste el número, haz ganado.";
    ultimoNum.style.backgroundColor = "green";
    ultimoNum.style.padding = "5px 10px";
    ultimoNum.style.display = "inline";
    imagenGanador();

    altoBajo.textContent = "";
    finDelJuego();
  } else if (contIntentos === 10) {
    ultimoNum.textContent = "Fin del Juego. Se acabaron los intentos.";
    altoBajo.textContent = "";
    finDelJuego();
  } else {
    ultimoNum.textContent = "Número equivocado. Sigue intentando.";
    ultimoNum.style.backgroundColor = "red";
    ultimoNum.style.display = "inline";
    ultimoNum.style.padding = "5px 10px";
    if (respuestaUsuario < random) {
      altoBajo.textContent =
        "Pista: el número ingresado es muy bajo. Intente con uno mayor.";
    } else if (respuestaUsuario > random) {
      altoBajo.textContent =
        "Pista: el número ingresado es muy alto. Intente con uno menor.";
    }
  }

  contIntentos++;
  respuestas.value = "";
  respuestas.focus();
}

enviarNum.addEventListener("click", verficicarNumero);

function finDelJuego() {
  //disabled para deshabilitar la entrada de texto y el boton
  respuestas.disabled = true;
  enviarNum.disabled = true;
  botonReinicio = document.createElement("button");
  //agregue un id al boton
  botonReinicio.id = "btn-reinicio";
  botonReinicio.textContent = "Iniciar nuevo juego";
  document.body.appendChild(botonReinicio);

  botonReinicio.addEventListener("click", reiniciarJuego);
}

function imagenGanador() {
  let img = document.createElement("img");
  img.src = "img/award.png";
  img.id = "img-ganador";
  let src = document.getElementById("div-img");
  src.appendChild(img);
}

function reiniciarJuego() {
  contIntentos = 1;

  const resetearContenido = document.querySelectorAll(".resultados p");

  for (let i = 0; i < resetearContenido.length; i++) {
    resetearContenido[i].textContent = "";
  }

  botonReinicio.parentNode.removeChild(botonReinicio);
  //elimino la imagen
  let src = document.getElementById("div-img");
  src.remove();

  ultimoNum.style.padding = "0";

  respuestas.disabled = false;
  enviarNum.disabled = false;
  respuestas.value = "";
  respuestas.focus();

  ultimoNum.style.background = "linear-gradient(to right, #da4453, #89216b);";

  random = Math.floor(Math.random() * 100) + 1;
}
