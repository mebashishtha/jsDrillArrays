     // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.


function reduce(elements, cb, startingValue) {
   if(!Array.isArray(elements) || typeof cb !== 'function'){
    return [];
   }


    let accumalater;
    let startingIndex = 0;
    if(startingValue !== undefined){
        accumalater = startingValue;
        startingIndex = 0;
    } else {
        accumalater = elements[0];
        startingIndex = 1;
    }


   for (let index = startingIndex; index < elements.length; index++) {
        accumalater = (cb(accumalater, elements[index]));
    
   }

   return accumalater;

}


module.exports = reduce;



