const mapMethod=(arr, callback)=> { const mapArr = [...arr]; 
    for(let i=0;i<arr.length;i++) {        
    mapArr[i] = callback(mapArr[i]);
    }
    return mapArr;
}

const filterMethod=(arr, callback)=> { 
    let filterArr = [];
     for(let i=0;i<arr.length;i++) { 
         if(callback(arr[i]))
             filterArr=[...filterArr, arr[i]];
            }
            return filterArr;
    }
const findMethod=(arr, callback)=> { 
    let i = 0;

    let arrLength = arr.length
     for(let i=0;i<arr.length;i++) { 
         if(callback(arr[i]) === true) return i;
    }; 
    return -1
}

const reduceMethod =(arr, callback, initialValue)=>{    
    let accumulator = initialValue === undefined ? 0 : initialValue     
    for(let i=0;i<arr.length;i++)        accumulator = callback(accumulator, arr[i]);    return accumulator;}

module.exports ={
    mapMethod,
    filterMethod,
    findMethod,
    reduceMethod
}