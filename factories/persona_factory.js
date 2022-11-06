import { Persona } from "../models/persona.js";

export class PersonaFactory {
  constructor() {

  }

  crear(id, nombre, tipo) {
    // condiciones
    if (tipo == 'corredor') {
      return new Persona(id, nombre)
    } else {
      return new Controlador()
    }
  }
}

// const persona = new PersonaFactory().crear()
