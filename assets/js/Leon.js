import Animal from "./Animal.js"
export default class Leon extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    //Método rugir
    rugir(){
        return this.sonido
    }
}

