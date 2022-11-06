import { Checkpoint } from "./checkpoint.js"
import cualquierCosa from "./checkpoint.js"

export class Persona {
    constructor(id, nombre) {
        if (!id || !nombre) {
            throw new Error
        }
        this.id = id
        this.nombre = nombre
        this.estaCorriendo = false
        this.checkpointsCorredor = []
    }

    ultimaMarca() {
        const ultimoCheckpoint = this.checkpointsCorredor.at(-1)
        return ultimoCheckpoint.identificador
    }

    correr() {
        this.estaCorriendo = true
    }

    terminar() {

    }

    corriendo() {
        return this.estaCorriendo
    }

    checkpoints() {
        return this.checkpointsCorredor
    }

    marcar(identificador) {
        // revisar si es válido el Checkpoint?
        this.checkpointsCorredor.push(new Checkpoint(identificador))
    }
}

export function correr() {}

// export default new Persona()

// mongodb+srv://juanpablo:juanpablo@cluster0.doavcex.mongodb.net/?retryWrites=true&w=majority
