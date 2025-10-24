    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];


function flatten(elements) {
    if (!Array.isArray(elements)){
        return [];
    }
        let result = [];
    for (let index = 0; index < elements.length; index++) {
            const temp = elements[index];

            if (Array.isArray(temp)) {
                 result.push(...flatten(temp));
            } else {
                result.push(temp);
            }
        
    }

    return result;
}


module.exports = flatten;
