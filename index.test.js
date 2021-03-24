const { mapMethod,filterMethod,findMethod, reduceMethod } = require(".");

describe('map method', ()=> {
    it('takes an array and a callback of signature item => {} and creates a new array with the return value of each called callback', ()=> {
        const arr = [1,2,3,4];
        const newArr = mapMethod(arr,(n)=> n*2)
      expect(newArr).toEqual([2,4,6,8])
    })
    it('takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value', ()=> {
        const arr = [1,2,4,6,8];
        const newArr = filterMethod(arr,(n)=> n % 2 === 0)
      expect(newArr).toEqual([2,4,6,8])

    })
    it('takes an Array and callback of signature item => {} and returns the index of the first item whose callback returns true or a truthy value.', ()=> {
        const arr = [1,2,4,6,8];
        const newArr = findMethod(arr,(n)=> n % 2 === 0)
      expect(newArr).toEqual(1)

    })
    it('Takes an Array and callback of signature (accumulator, item) => {} and an (optional) second initialValue parameter that is the initial value of the accumulator. After each function call, the return value is passed as the accumulator argument of the next function call', ()=> {
        const arr = [5,5,5,5];
        const sum = (a,b)=>a+b;
        const newArr = reduceMethod(arr,sum)
      expect(newArr).toEqual(20)

    })
    it('Takes an Array and callback of signature item => {} and returns an overall true value if all callback return true or a truthy value', ()=> {
        const arr = [2,4,6,8];
        const newArr = everyMethod(arr,(n)=> n % 2 === 0)
      expect(newArr).toBeTruthy()

    })

})
