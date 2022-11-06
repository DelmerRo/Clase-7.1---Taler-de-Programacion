import axios from "axios"

describe('PersonaRepository', () => {
  it('trae todos los registros', async () => {
    const repository = new PersonaRepository('array')

    const resultado = await repository.buscarTodos()

    console.log(resultado)
  })
})
