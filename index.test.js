const { mapMethod } = require(".");

describe('map method', ()=> {
    it('takes an array and a callback of signature item => {} and creates a new array with the return value of each called callback', ()=> {
        const arr = [1,2,3,4];
        const newArr = mapMethod(arr,(n)=> n*2)
      expect(newArr).toEqual([2,4,6,8])
    })

})
