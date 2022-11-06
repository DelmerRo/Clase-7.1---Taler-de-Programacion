
import express from 'express'
import { PersonaRepository } from '../repositories/persona_repository.js';


const router = express.Router();

/* GET users listing. */
// GET /corredores/
router.get('/', async function(req, res, next) {
  const responseRepo = await (new PersonaRepository).buscarTodos()
  // const response = await (new PersonasUseCase).buscarCorredores()
  // const responseJson = JSON.stringify(responseRepo)

  res.json(responseRepo);
})

// GET /corredores/:id
router.get('/:id', async function(req, res, next) {
  const { id } = req.params

  const responseRepo = await (new PersonaRepository).buscarUno(id)
  // const responseJson = JSON.stringify(responseRepo)

  res.json(responseRepo);
})

export default router
