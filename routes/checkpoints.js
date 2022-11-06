
import express from 'express'
import { PersonaRepository } from '../repositories/persona_repository';
import { CheckpointUseCase } from '../use_cases/checkpoint';


const router = express.Router();

/* GET users listing. */
// GET /checkpoints/
router.post('/', async function(req, res, next) {

  const { idPersona, identificador } = req.body

  const persona = (await new PersonaRepository()).buscarUno(idPersona)
  const responseRepo = await (new CheckpointUseCase(persona)).mark(identificador)

  res.json(responseRepo);
})

//
export default router
