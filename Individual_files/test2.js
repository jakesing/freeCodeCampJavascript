var _ = require('underscore');
function bcontainsa(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    //return 
    for (var i = 0; i < aProps.length; i++) {
         var propName = aProps[i];
        
     if (a[propName] !== b[propName]) {
             return false;
         }
     }
    // If we made it this far, objects
    // are considered equivalent
    return true
}

let collection = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }]
let source = { "apple": 1, "bat": 2 }

let collection1 = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
let source1 = { last: "Capulet" }

console.log(collection.filter(i => bcontainsa(source,i)))