**JavaScript Data Structures: Arrays, Strings, Objects, Sets, and Maps**

### 1. Array
An array is an ordered collection of values. Each value is called an element, and each element has a numeric index.

**Methods:**
- `push()`: Adds an element to the end.
- `pop()`: Removes the last element.
- `shift()`: Removes the first element.
- `unshift()`: Adds an element to the beginning.
- `splice()`: Adds/removes elements at a specific index.
- `slice()`: Returns a shallow copy of a portion of the array.
- `forEach()`: Iterates over the array.
- `map()`: Creates a new array by applying a function to each element.
- `filter()`: Creates a new array with elements that pass a test.
- `reduce()`: Reduces the array to a single value.
- `split()` : returns an array of strings by splits a string into an array based on a specified delimiter.
- `join()`

✅ find() / findIndex() - Finding elements
✅ includes() - Checking existence
✅ some() / every() - Testing conditions
✅ sort() - Sorting arrays
✅ fill() / Array.from() - Creating arrays (especially for DP!)
✅ flat() - For nested array problems

string.split(separator, limit);
separator (optional) → The character or pattern to split by.
limit (optional) → The maximum number of splits.

**Initialization:**
```javascript
let arr = [1, 2, 3]; // Literal syntax
let arr2 = new Array(1, 2, 3); // Constructor syntax
```

**Iteration:**
```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.forEach((item) => console.log(item));
```

---
### 2. String
A string is a sequence of characters used to represent text.

**Methods:**
- `charAt()`: Returns the character at a specific index.
- `concat()`: Combines two or more strings.
- `includes()`: Checks if a string contains a substring.
- `indexOf()`: Returns the index of the first occurrence of a substring.
- `slice()`: Extracts a portion of the string.
- `split()`: Splits a string into an array of substrings.
- `toLowerCase()`: Converts the string to lowercase.
- `toUpperCase()`: Converts the string to uppercase.
- `trim()`: Removes whitespace from both ends.

**Initialization:**
```javascript
let str = "Hello, World!";
let str2 = new String("Hello, World!");
```

**Iteration:**
```javascript
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
for (let char of str) {
  console.log(char);
}
```

---
### 3. Object
An object is a collection of key-value pairs. Keys are strings (or Symbols), and values can be any data type.

**Methods:**
- `Object.keys()`: Returns an array of keys.
- `Object.values()`: Returns an array of values.
- `Object.entries()`: Returns an array of key-value pairs.
- `hasOwnProperty()`: Checks if a property exists.

**Initialization:**
```javascript
let obj = { name: "Alice", age: 25 }; // Literal syntax
let obj2 = new Object({ name: "Bob", age: 30 }); // Constructor syntax
```

**Iteration:**
```javascript
for (let key in obj) {
  console.log(key, obj[key]);
}
Object.keys(obj).forEach((key) => console.log(key, obj[key]));
```

---
### 4. Set
A Set is a collection of unique values. It does not allow duplicates.

**Methods:**
- `add()`: Adds a value to the set.
- `delete()`: Removes a value from the set.
- `has()`: Checks if a value exists in the set.
- `clear()`: Removes all values from the set.

**Initialization:**
```javascript
let set = new Set([1, 2, 3]);
```

**Iteration:**
```javascript
set.forEach((value) => console.log(value));
for (let value of set) {
  console.log(value);
}
```

---
### 5. Map
A Map is a collection of key-value pairs where keys can be of any type.

**Methods:**
- `set()`: Adds a key-value pair.
- `get()`: Retrieves the value for a key.
- `has()`: Checks if a key exists.
- `delete()`: Removes a key-value pair.
- `clear()`: Removes all key-value pairs.

**Initialization:**
```javascript
let map = new Map();
map.set("name", "Alice");
map.set("age", 25);
```

**Iteration:**
```javascript
map.forEach((value, key) => console.log(key, value));
for (let [key, value] of map) {
  console.log(key, value);
}
```

``` javascript
let obj = { name: "Alice" };
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("age")); // false

let set = new Set([1, 2, 3]);
console.log(set.has(2)); // true
console.log(set.has(5)); // false

let map = new Map([["name", "Alice"]]);
console.log(map.has("name")); // true
console.log(map.has("age")); // false
```
---
## Coding Questions
### Arrays:
1. Find the sum of all elements in an array.
2. Reverse an array without using the `reverse()` method.
3. Remove duplicates from an array.
4. Find the largest number in an array.
5. Merge two sorted arrays into one sorted array.
6. Rotate an array to the right by k steps.
7. Find the second smallest element in an array.
8. Check if an array is a palindrome.
9. Find the intersection of two arrays.
10. Flatten a nested array.

### Strings:
11. Reverse a string.
12. Check if a string is a palindrome.
13. Count the number of vowels in a string.
14. Find the first non-repeating character in a string.
15. Capitalize the first letter of each word in a string.
16. Check if two strings are anagrams.
17. Remove all whitespace from a string.
18. Find the longest word in a string.
19. Replace all occurrences of a substring in a string.
20. Split a string into an array of words.

### Objects:
21. Merge two objects.
22. Count the number of properties in an object.
23. Check if an object is empty.
24. Deep clone an object.
25. Convert an object to an array of key-value pairs.

### Sets:
26. Find the union of two sets.
27. Find the intersection of two sets.
28. Check if a set is a subset of another set.
29. Convert a set to an array.
30. Remove all duplicate elements from an array using a set.

### Maps:
31. Count the frequency of elements in an array using a map.
32. Convert a map to an object.
33. Check if two maps are equal.
34. Find the key with the highest value in a map.
35. Group objects by a property using a map.

---