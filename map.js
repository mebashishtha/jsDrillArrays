    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.


function map(elements, cb) {
    if(!Array.isArray(elements) || typeof cb !== 'function'){
        return [];
    }

    const newArray = [];


    for (let index = 0; index < elements.length; index++) {
        
        newArray.push(cb(elements[index]))
    }

    return newArray;

}


module.exports = map;


