'use strict';
// console.log('hi yehia') //test File

/*
//Arrow Functions
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);
console.log(upperizedNames)*/
/*
//Quiz: Convert Function into an Arrow Function (2-1)
/!*
* Before modification


// convert to an arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(square) {
    return square * square;
});

console.log(...squares);
*!/
//After modification to arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * square);

console.log(...squares);
*/

//11. Quiz: Using Default Function Parameters (2-2)
/*
 * Programming Quiz: Using Default Function Parameters (2-2)
 */

const buildHouse=function ({floors=1,color='red',walls='bricks'}={}){
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`
}

// your code goes here

 // tests
console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.
