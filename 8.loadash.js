const _ = require("lodash");
// import _ from "lodash";

// const debounceSave = _.debounce(saveChanges, 1000);
// inputElement.addEventListener("input", debounceSave);

// const throttleScroll = _.throttle(updateScrollPosition, 200);
// window.addEventListener("scroll", throttleScroll);

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

const squaredNumbers1 = _.map(numbers, (num) => num * num);
console.log(squaredNumbers1);

const evenNumbers = _.filter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

const sum = _.reduce(numbers, (acc, num) => acc + num, 0);
console.log(sum);

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
// const sortedUsers = _.orderBy(users, ["age"], ["asc"]);
const sortedUsers = _.orderBy(users, ["age"], ["desc"]);
console.log(sortedUsers);

const products = [
  { category: "Electronics", name: "Laptop" },
  { category: "Clothing", name: "Shirt" },
  { category: "Electronics", name: "Smartphone" },
];
// const groupedProducts = _.groupBy(products, "category");
const groupedProducts = _.groupBy(products, "category");
console.log(groupedProducts);

// creates a deep copy of an object, ensuring nested objects are duplicated
const originalObject = { a: 1, nested: { b: 2 } };
const clonedObject = _.cloneDeep(originalObject);
console.log(clonedObject);

// method merges two or more objects by deeply combining their properties.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = _.merge(obj1, obj2);
// mergedObj: { a: 1, b: 2 }
console.log(mergedObj);

// compares two values to determine if they are equivalent.
const obj3 = { a: 1, b: { c: 2 } };
const obj4 = { a: 1, b: { c: 2 } };
const isEqual = _.isEqual(obj3, obj4);
// isEqual: true
console.log(isEqual);

// allows you to select specific properties from an object:
const person = { name: "John", age: 30, email: "john@example.com" };
const selectedProps = _.pick(person, ["name", "email"]);
console.log(selectedProps);

const nestedArray = [1, [2, [3, [4]], 5]];

const fullyFlattenedArray3 = nestedArray.flat(2); // number level of depth
const fullyFlattenedArray2 = nestedArray.flat(Infinity);
console.log(fullyFlattenedArray2, fullyFlattenedArray3); // Output: [1, 2, 3, 4, 5]

// method flattens a nested array into a single array. one level deep
const flattenedArray = _.flatten(nestedArray);
// flattenedArray:[ 1, 2, [ 3, [ 4 ] ], 5 ]
console.log(flattenedArray);

// method flattens a nested array into a single array.
const fullyFlattenedArray = _.flattenDeep(nestedArray);
console.log(fullyFlattenedArray); // Output: [1, 2, 3, 4, 5]
