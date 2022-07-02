export default class Animal {

    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = () => nombre
        this._edad = () => edad
        this._img = () => img
        this._comentarios = () => comentarios
        this._sonido = () => sonido
    }

    //Getting y Setting
    get nombre() {
        return this._nombre()
    }
    get edad() {
        return this._edad()
    }
    get img() {
        return this._img()
    }
    get comentarios() {
        return this._comentarios()
    }
    set comentarios(new_comentarios) {
        return this._comentarios = () =>new_comentarios
    }
    get sonido() {
        return this._sonido()
    }

}