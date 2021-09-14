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
/*

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

console.log(employees);*/
/*

//15- Looping Through Maps
    //2. Using a for...of Loop
/!*
 * //Fixme Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 *!/

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

// for (const member of members) {
//     let key=member.key;
//     let value =member.values()
//      console.log(key, value);
//
// }
//3. Using a forEach Loop
//Your last option for looping through a Map is with the .forEach() method.

members.forEach((value, key) => console.log(key, value));

//Notice how with the help of an arrow function, the forEach loop reads fairly straightforward. For each value and key in members, log the value and key to the console.
*/
/*

//16- WeakMaps
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);*/

//21- Proxies
    //1-Get Trap
    // const richard = {status: 'looking for work'};
    // const handler = {
    //     get(target, propName) {
    //         console.log(target); // the `richard` object, not `handler` and not `agent`
    //         console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    //     }
    // };
    // const agent = new Proxy(richard, handler);
    // agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)

    //2-Accessing the Target object from inside the proxy
    const richard = {status: 'looking for work'};
    const handler = {
        get(target, propName) {
            console.log(target);
            console.log(propName);
            return target[propName];
        }
    };
    const agent = new Proxy(richard, handler);
    agent.status; // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status