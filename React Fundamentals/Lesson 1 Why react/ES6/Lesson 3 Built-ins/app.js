'use strict';
//9- Quiz: Using Sets
/*
 * Programming Quiz: Using Sets (3-1)
 *
 * Create a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 */
//create a set of object
const myFavoriteFlavors= new Set();

//add the following items to set
myFavoriteFlavors.add('chocolate chip');
myFavoriteFlavors.add('cookies and cream');
myFavoriteFlavors.add('strawberry');
myFavoriteFlavors.add('vanilla');
// Test set
console.log(myFavoriteFlavors);
//delete items on set
myFavoriteFlavors.delete('strawberry');
// required set
console.log(myFavoriteFlavors);

