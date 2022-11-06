export class Marcar {
    constructor(corredor, marcaActual) {
        this.corredor = corredor
        this.marcaActual = marcaActual
    }

    run() {
        // esta comparación es una regla de negocio
        if (this.corredor.ultimaMarca() == this.marcaActual - 1) {
            this.corredor.marcar(this.marcaActual)
        } else {
            throw new Error("Hubo un error de validacion del checkpoint")
        }
    }

    corredorActual() {
        return this.corredor
    }
}
