'use strict';
/*//9- Quiz: Using Sets
/!*
 * Programming Quiz: Using Sets (3-1)
 *
 * Create a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 *!/
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
console.log(myFavoriteFlavors);*/

/*
//11- Quiz: Working With WeakSets

/!*
 * Programming Quiz: Using Sets (3-2)
 *
 * Create the following variables:
 *     - uniqueFlavors and set it to a new WeakSet object
 *     - flavor1 and set it equal to `{ flavor: 'chocolate' }`
 *     - flavor2 and set it equal to an object with property 'flavor' and value of your choice!
 *
 * Use the `.add()` method to add the objects `flavor1` and `flavor2` to `uniqueFlavors`
 * Use the `.add()` method to add the `flavor1` object (again!) to the `uniqueFlavors` set
 *!/
// create uniqueFlavors and set it to a new WeakSet object
const uniqueFlavors =new WeakSet();

//create objects and assign to values flavor 1 flavor 2
const flavor1={flavor:'chocolate'};
const flavor2={flavor:'Vanilla'};

//use add method to add flavors
uniqueFlavors.add(flavor1)
uniqueFlavors.add(flavor2)
console.log(uniqueFlavors)//test data before add flavor 1 again
uniqueFlavors.add(flavor1)
console.log(uniqueFlavors)//test data after add flavor 1 again
*/

//13- Creating & Modifying Maps
const employees = new Map();
//The .set() method takes two arguments. The first argument is the key, which is used to reference the second argument, the value.
employees.set('james.parkes@udacity.com', {
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer'
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);