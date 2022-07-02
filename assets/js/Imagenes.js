import Animales from "./Consulta.js";

document.getElementById("animal").addEventListener("change", async (event) => {
    const { animales } = await Animales.getData()
    const valor = event.target.value
    const imagenAnimal = animales.find((a) => a.name == valor).imagen

    document.getElementById("preview").innerHTML = `<img class="w-100" src="assets/imgs/${imagenAnimal}" />`
})

