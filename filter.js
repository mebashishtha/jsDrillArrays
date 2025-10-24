    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test


function filter(elements, cb) {
    if(!Array.isArray(elements) || typeof cb !== 'function'){
        return [];
    }

    let result = [];

    for (let index = 0; index < elements.length; index++) {
        
            if(cb(elements[index])){
                result.push(elements[index]);
            }
        
    }

    return result;
}


module.exports = filter;


 
