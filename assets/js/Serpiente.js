import Animal from "./Animal.js"
export default class Serpiente extends Animal{

    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    //Método sisear
    sisear(){
        return this.sonido
    }
}
