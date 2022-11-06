import assert, { AssertionError } from 'assert'
import chai from 'chai'

import { Persona as ClaseCorredor } from '../models/persona.js'

const expect = chai.expect

describe("Persona", () => {
    describe("atributos", () => {
        it('debe tener un atributo ID', () => {
            // Arrange
            const corredor = new ClaseCorredor("2039", "Jorge")
            const atributosDelObjetoCorredor = Object.keys(corredor)

            // Act
            // --

            // Assert
            assert.equal(atributosDelObjetoCorredor[0], 'id')
        })

        it('debe tener un atributo nombre', () => {
            // Arrange
            const corredor = new ClaseCorredor("2039", "Jorge")
            const atributosDelObjetoCorredor = Object.keys(corredor)

            // Act
            // --

            // Assert
            assert.equal(atributosDelObjetoCorredor[1], 'nombre')
        })
    })

    let corredor

    beforeEach(() => {
        corredor = new ClaseCorredor("2039", "Jorge")
    })

    describe("#constructor()", () => {
        describe("con datos válidos", () => {
            it("crea Persona", () => {
                // const corredor = new ClaseCorredor("2039", "Jorge")

                expect(corredor).to.have.property('id').with.equal("2039")
                expect(corredor).to.have.property('nombre').with.equal("Jorge")
            })
        })
        describe("con datos inválidos", () => {
            it("impide la creación", () => {
                const creador = () => {
                    const corredorErroneo = new ClaseCorredor("2039")
                }

                expect(creador).to.throw(Error)
            })
        })
    })

    describe("JSON", () => {
        it("presenta JSON", () => {
            corredor.direccion = {
                calle: "Valor",
                numero: 3399
            }
            const json = JSON.stringify(corredor)

            // JS Object Notation
            console.log(corredor)
            console.log(json)

            const nuevoCorredor = JSON.parse(json)
            console.log(nuevoCorredor)

            corredor.correr()
            nuevoCorredor.correr()
        })
    })

    describe("#correr()", () => {
        it('establece el modo correr', () => {
            // Arrange
            // const corredor = new ClaseCorredor("2039", "Jorge")

            // Act
            corredor.correr()

            // Assert
            expect(corredor.corriendo()).to.equal(true)

            // assert.notEqual(corredor.correr, undefined)
            // assert.equal(typeof corredor.correr, 'function')
            // assert.ok(typeof corredor.correr == 'function')
            // if (typeof corredor.correr != 'string')
            //     throw new AssertionError("Mal tipo")
        })
    })

    describe("#terminar()", () => {
        it('debe tener un metodo para terminar la carrera', () => {
            // Arrange
            // const corredor = new ClaseCorredor("2039", "Jorge")

            // Act
            // --

            // Assert
            expect(corredor.terminar).to.be.a('function')

        })
    })

    describe('#checkpoints()', () => {
        it('tiene un listado de checkpoints', () => {
            expect(corredor.checkpoints()).to.be.an('array')
        })
    })

    describe('#marcar()', () => {
        it('marca un checkpoint', () => {
            corredor.marcar()

            expect(corredor.checkpoints().length).to.equal(1)
        })
    })

})
