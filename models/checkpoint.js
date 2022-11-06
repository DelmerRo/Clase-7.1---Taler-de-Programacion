export class Checkpoint {
    constructor(identificador) {
        this.marca = new Date()
        this.identificador = identificador
    }
}

export function correr() {}

export default new Checkpoint()
