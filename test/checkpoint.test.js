import assert, { AssertionError } from 'assert'
import chai from 'chai'

import { Checkpoint } from '../models/checkpoint.js'

const expect = chai.expect

describe("Checkpoint", () => {
    describe("#constructor()", () => {
        it("crea un checkpoint", () => {
            const checkpoint = new Checkpoint()
            expect(checkpoint).to.be.an('object')
        })
    })
})
