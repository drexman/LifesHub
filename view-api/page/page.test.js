const rewire = require("rewire")
const page = rewire("./page")
const nextSlide = page.__get__("nextSlide")
const prevSlide = page.__get__("prevSlide")
const marketDot = page.__get__("marketDot")
// @ponicode
describe("nextSlide", () => {
    test("0", () => {
        let callFunction = () => {
            nextSlide()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("prevSlide", () => {
    test("0", () => {
        let callFunction = () => {
            prevSlide()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("marketDot", () => {
    test("0", () => {
        let callFunction = () => {
            marketDot(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            marketDot(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            marketDot(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            marketDot(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            marketDot(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            marketDot(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
