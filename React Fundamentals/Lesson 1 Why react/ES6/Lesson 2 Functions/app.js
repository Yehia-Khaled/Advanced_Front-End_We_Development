'use strict';
// console.log('hi yehia') //test File

/*
//Arrow Functions
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);
console.log(upperizedNames)*/
//Quiz: Convert Function into an Arrow Function (2-1)
/*
* Before modification


// convert to an arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(square) {
    return square * square;
});

console.log(...squares);
*/
//After modification to arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * square);

console.log(...squares);

