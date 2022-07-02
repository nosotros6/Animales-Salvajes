import Leon from "./Leon.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";
import Aguila from "./Aguila.js";
import Data from "./Consulta.js";

let animales = [];

document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const data = await Data.getData();
  const dataAnimal = await data.animales;
  let nombre = document.getElementById("animal").value;
  let edad = document.getElementById("edad").value;
  let comentarios = document.getElementById("comentarios").value;
  let img = document.querySelector("#preview>img").src;
  const sonido = dataAnimal.find((a) => a.name == nombre).sonido;

  let newAnimal;

  if (nombre == "Aguila") {
    // constructor(nombre, edad, img, comentarios, sonido)
    newAnimal = new Aguila(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Leon") {
    newAnimal = new Leon(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Lobo") {
    newAnimal = new Lobo(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Oso") {
    newAnimal = new Oso(nombre, edad, img, comentarios, sonido);
  } else if (nombre == "Serpiente") {
    newAnimal = new Serpiente(nombre, edad, img, comentarios, sonido);
  }

  if (nombre && edad && comentarios) {
    animales.push(newAnimal);
    reloadTable();
  } else {
    alert("Faltan campos por llenar");
  }
});

const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML = "";
  animales.forEach((a, i) => {
    animalesTemplate.innerHTML += `
          <div class="card text-center cardAnimal" style="width: 14rem; margin:26px; background-color: grey">
            <img src="${a.img}" id="animal${i}" class="card-img-top imgAnimal" alt="..." data-toggle="modal" data-target="#exampleModal" type="button">
            <div class="card-body p-0 clickAudio" style="  background-color: grey">
              <img src="assets/imgs/audio.svg" class="card-img-bottom imgAudio" alt="...">
            </div>
          </div>
        `;
  });
  buscarAnimales()
  clickAudio()
}

const buscarAnimales = () => {
  const cardAnimal = [...document.getElementsByClassName("imgAnimal")]
  cardAnimal.forEach((item, i) => {
    item.addEventListener("click", () => {
      const exampleModal = document.querySelector(".modal-body")

      exampleModal.innerHTML = `
              <img src="${animales[i].img}" class="imagenAnimal rounded mx-auto d-block" alt="...">
              <h5 class="text-center m-3" style="color:white">${animales[i].nombre}</h5>
              <p class="text-center m-3" style="color:white">${animales[i].edad}</p>
              <p class="text-center m-3" style="color:white">Comentarios</p>
              <hr>
              <p class="text-center m-3" style="color:white">${animales[i].comentarios}</p>
        `
    })
  })
}
const clickAudio = ()=>{
  const divAudio = [...document.getElementsByClassName("clickAudio")]
  divAudio.forEach((item, i) => {
    item.addEventListener("click", () => {
      const sonidosAnimales = document.querySelector("#player")
      sonidosAnimales.setAttribute("src",'./assets/sounds/'+animales[i].sonido)
      sonidosAnimales.play()
    })
})
}
