const person = { name: "Peter" };
//const updated = Object.assign({}, person, { name: "Jax", age: 30 });

const updated = { ...person, name: "Nathan" }; // essentially a shallow copy of the original list
//A hard copy of an object is to specify the change it needs to make

/**
 * example of deep copy
 * const person = { name: "Peter",
 *                  address: {
 *                              country: "USA",
 *                              city" "San Francisco"} };
 *
 *
 * const updated = { ...person, name: "Nathan",
 *                  address: {
 *                          ...person.address,
 *                              city: "New York"}
 *  };
 */
console.log(updated);

// adding array
const num = [1, 2, 3];
const index = num.indexOf(2);
//inserting it in index of 2
const add = [...num.slice(0, index), 4, ...num.slice(index)];
//taking the existing list of number, slice starting at index 0, add 4 and add to the specified index
console.log("added:", add);
//const add = [...num, 4];

//removing array
const remove = add.filter((n) => n !== 3); // removing the number 3 value, not index of 3
console.log("remove:", remove);

const update = num.map((n) => (n === 3 ? 20 : n)); // asking the system to check the array list
// if there is 2, change it to 20. Otherwise return the list
console.log("update", update);
