import assert, { AssertionError } from 'assert'
import chai from 'chai'

import { Marcar } from '../commands/marcar.js'
import { PersonaFactory } from '../factories/persona_factory.js'
import { Persona } from '../models/persona.js'
import { PersonaRepository } from '../repositories/persona_repository.js'

const expect = chai.expect

describe("Marcar", () => {
    describe("#run()", () => {
        it("crea una marca para un corredor", () => {
            // Arrange
            const corredor = new PersonaFactory().crear("1", "JP", "corredor")

            const marcar = new Marcar(corredor, 2)

            expect(corredor.checkpoints().length).to.equal(0)

            // Act
            corredor.marcar(1)
            marcar.run()

            // Assert
            expect(corredor.checkpoints().length).to.equal(2)
        })

        it("crea una persona en el repo", () => {
            // Arrange
            const corredor = new PersonaFactory().crear("1", "JP", "corredor")

            const repo = new PersonaRepository()
            repo.guardar(corredor)

            expect(repo.buscarTodos()).to.include(corredor)
        })

        it("no crea una marca si el identificador no es válido", () => {
            // Arrange
            const corredor = new PersonaFactory().crear("1", "JP", "corredor")

            const marcar = new Marcar(corredor, 3)

            expect(corredor.checkpoints().length).to.equal(0)

            // Act
            corredor.marcar(1)
            const creador = () => {
                marcar.run()
            }

            // Assert
            expect(creador).to.throw(Error)
            expect(corredor.checkpoints().length).to.equal(1)
        })
    })
})
