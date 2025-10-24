const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

const each = require("./each.js");
    each(items,(ele, ind) => {console.log(`each result ${ele}`);});



const filter = require("./filter.js"); 
    const even = filter(items, (num) => { return num >= 2;});
    console.log(`filter resu;t ${even}`);



const find = require("./find.js");
    const great = find(items, (num) => { return num % 2 == 0;});
    console.log(`find result ${great}`);



const map = require("./map.js");
    const itemSqure = map(items, (ele) => {return ele * ele;});
    console.log(`map result ${itemSqure}`);


const reduce = require("./reudce.js");
    const itemMax = reduce(items, ((acc,curr) => { return acc + curr;}));
    console.log(`reduce result ${itemMax}`);


const flatten = require("./flatten.js");
    const test = [1, [2], [3, [[4]]]];
    console.log(`flatten result ${flatten(test)}`);