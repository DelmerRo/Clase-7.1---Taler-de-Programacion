import { PersonaRepository } from "../repositories/persona_repository.js"

describe('PersonaRepository', () => {
  it('trae todos los registros', async () => {
    const repository = new PersonaRepository('array')

    const resultado = await repository.buscarTodos()

    console.log(resultado)
  })
})
