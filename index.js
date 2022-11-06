// nativo o instalado por NPM
import fs from 'fs'
import chalk from 'chalk'

// modulo local del proyecto
import { Persona } from './models/persona.js'

const archivo = fs.readFileSync("./package.json")

console.log(
    chalk.blue(
        archivo.toString()
    )
)
