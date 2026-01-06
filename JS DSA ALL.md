JavaScript practice

# JavaScript DSA Complete Cheat Sheet

## 1. Arrays

### Creation & Initialization

```javascript
// Basic creation
let arr = [1, 2, 3];
let arr2 = new Array(5); // [empty × 5]
let arr3 = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// Array.from() - Most useful for DSA!
Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]
Array.from({ length: 3 }, () => []); // [[], [], []]
Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']

// 2D Array (for DP/Matrix problems)
const rows = 3,
  cols = 4;
let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
// OR
let matrix2 = Array(rows)
  .fill(0)
  .map(() => Array(cols).fill(0));
```

### Adding/Removing Elements

```javascript
let arr = [1, 2, 3];

// Add to end
arr.push(4); // [1, 2, 3, 4] - Returns NEW length

// Remove from end
arr.pop(); // Returns 4, arr = [1, 2, 3]

// Add to beginning
arr.unshift(0); // [0, 1, 2, 3] - Returns NEW length

// Remove from beginning
arr.shift(); // Returns 0, arr = [1, 2, 3]

// Add/Remove at specific index
arr.splice(1, 1); // Remove 1 element at index 1, returns [2]
arr.splice(1, 0, 5); // Insert 5 at index 1, arr = [1, 5, 3]
arr.splice(1, 2, 7, 8); // Replace 2 elements with 7, 8
```

### Accessing Elements

```javascript
let arr = [1, 2, 3, 4, 5];

arr[0]; // 1
arr[arr.length - 1]; // 5 (last element)
arr.at(-1); // 5 (last element - cleaner!)
arr.at(-2); // 4 (second to last)
```

### Search & Find

```javascript
let arr = [1, 2, 3, 4, 5];

// find() - Returns FIRST element that matches
arr.find((x) => x > 3); // 4
arr.find((x) => x > 10); // undefined

// findIndex() - Returns INDEX of first match
arr.findIndex((x) => x > 3); // 3
arr.findIndex((x) => x > 10); // -1

// indexOf() - Returns index of value
arr.indexOf(3); // 2
arr.indexOf(10); // -1 (not found)

// lastIndexOf() - Last occurrence
[1, 2, 3, 2].lastIndexOf(2); // 3

// includes() - Boolean check
arr.includes(3); // true
arr.includes(10); // false
```

### Testing Conditions

```javascript
let arr = [1, 2, 3, 4, 5];

// some() - At least ONE element passes test
arr.some((x) => x > 3); // true
arr.some((x) => x > 10); // false

// every() - ALL elements pass test
arr.every((x) => x > 0); // true
arr.every((x) => x > 3); // false
```

### Transformation Methods

```javascript
let arr = [1, 2, 3, 4, 5];

// map() - Transform each element
arr.map((x) => x * 2); // [2, 4, 6, 8, 10]

// filter() - Keep elements that pass test
arr.filter((x) => x % 2 === 0); // [2, 4]

// reduce() - Reduce to single value
arr.reduce((sum, x) => sum + x, 0); // 15
arr.reduce((max, x) => Math.max(max, x), -Infinity); // 5

// reduceRight() - Reduce from right to left
arr.reduceRight((acc, x) => acc - x, 10); // 10-5-4-3-2-1 = -5

// slice() - Get subarray (doesn't mutate)
arr.slice(1, 3); // [2, 3]
arr.slice(-2); // [4, 5] (last 2)
arr.slice(); // [...arr] (shallow copy)

// flat() - Flatten nested arrays
[1, [2, [3, 4]]].flat(1); // [1, 2, [3, 4]]
[1, [2, [3, 4]]].flat(2); // [1, 2, 3, 4]
[1, [2, [3, 4]]].flat(Infinity); // [1, 2, 3, 4]

// flatMap() - map + flat in one step
[1, 2, 3].flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

### Sorting & Reversing

```javascript
let arr = [3, 1, 4, 1, 5];

// sort() - MUTATES original!
arr.sort(); // Sorts as strings: [1, 1, 3, 4, 5]
arr.sort((a, b) => a - b); // Ascending: [1, 1, 3, 4, 5]
arr.sort((a, b) => b - a); // Descending: [5, 4, 3, 1, 1]

// sort strings
arr.sort() asc and arr.sort().reverse()
arr.sort((a,b)=>a.localeCompare(b)) //asc for case-insensitive a.toLowerCase().localeCompare(b.toLowerCase())
arr.sort((a,b)=>b.localeCompare(a))  // des

// Sort objects
let people = [{age: 30}, {age: 20}];
people.sort((a, b) => a.age - b.age);

// reverse() - MUTATES original!
arr.reverse(); // [5, 4, 3, 1, 1]

// To avoid mutation
[...arr].sort((a, b) => a - b); // Creates copy first
```

### Combining Arrays

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];

// concat() - Returns NEW array
arr1.concat(arr2); // [1, 2, 3, 4]
arr1.concat(arr2, [5, 6]); // [1, 2, 3, 4, 5, 6]

// Spread operator (cleaner!)
[...arr1, ...arr2]; // [1, 2, 3, 4]
[0, ...arr1, ...arr2, 5]; // [0, 1, 2, 3, 4, 5]
```

### Iteration

```javascript
let arr = [1, 2, 3];

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of (values)
for (let val of arr) {
  console.log(val);
}

// forEach (no return value)
arr.forEach((val, index, array) => {
  console.log(val, index);
});

// entries() - Get [index, value] pairs
for (let [i, val] of arr.entries()) {
  console.log(i, val);
}
```

### Other Useful Methods

```javascript
// fill() - Fill with static value
new Array(5).fill(0); // [0, 0, 0, 0, 0]
arr.fill(0, 2, 4); // Fill index 2-3 with 0

// join() - Array to string
[1, 2, 3].join(); // "1,2,3"
[1, 2, 3].join("-"); // "1-2-3"
[1, 2, 3].join(""); // "123"

// toString()
[1, 2, 3].toString(); // "1,2,3"
```

---

## 2. Strings

### Creation

```javascript
let str1 = "hello";
let str2 = "world";
let str3 = `Hello ${name}`; // Template literal
let str4 = new String("hello"); // Avoid this!
```

### Basic Properties & Access

```javascript
let str = "hello";

str.length; // 5
str[0]; // 'h'
str.at(-1); // 'o' (last char)
str.charAt(0); // 'h'
str.charCodeAt(0); // 104 (ASCII code)
```

### Search & Check

```javascript
let str = "hello world";

// indexOf() / lastIndexOf()
str.indexOf("o"); // 4
str.lastIndexOf("o"); // 7
str.indexOf("x"); // -1 (not found)

// includes() / startsWith() / endsWith()
str.includes("world"); // true
str.startsWith("hello"); // true
str.endsWith("world"); // true
```

### Substring Extraction

```javascript
let str = "hello world";

// slice(start, end) - Most flexible
str.slice(0, 5); // "hello"
str.slice(6); // "world"
str.slice(-5); // "world" (last 5)

// substring(start, end) - Similar to slice
str.substring(0, 5); // "hello"

// substr(start, length) - DEPRECATED, avoid!
```

### Transformation

```javascript
let str = "Hello World";

// Case conversion
str.toLowerCase(); // "hello world"
str.toUpperCase(); // "HELLO WORLD"

// trim() - Remove whitespace
"  hello  ".trim(); // "hello"
"  hello  ".trimStart(); // "hello  "
"  hello  ".trimEnd(); // "  hello"

// replace() / replaceAll()
str.replace("World", "JS"); // "Hello JS"
"aaa".replace("a", "b"); // "baa" (only first)
"aaa".replaceAll("a", "b"); // "bbb" (all)

// padStart() / padEnd()
"5".padStart(3, "0"); // "005"
"5".padEnd(3, "0"); // "500"

// repeat()
"ha".repeat(3); // "hahaha"
```

### Split & Join

```javascript
// split() - String to array
"a,b,c".split(","); // ['a', 'b', 'c']
"hello".split(""); // ['h', 'e', 'l', 'l', 'o']
"a b c".split(" "); // ['a', 'b', 'c']
"a-b-c".split("-", 2); // ['a', 'b'] (limit)

// Array to string
["a", "b", "c"].join(""); // "abc"
["a", "b", "c"].join("-"); // "a-b-c"
```

### Iteration

```javascript
let str = "hello";

// for loop
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// for...of
for (let char of str) {
  console.log(char);
}

// spread
[...str]; // ['h', 'e', 'l', 'l', 'o']
```

### Common String Patterns for DSA

```javascript
// Reverse string
const reverse = (str) => str.split("").reverse().join("");

// Check palindrome
const isPalindrome = (str) => str === str.split("").reverse().join("");

// Count characters
const countChars = (str) => {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
};

// Remove duplicates
const removeDupes = (str) => [...new Set(str)].join("");
```

---

## 3. Objects

### Creation

```javascript
let obj = { key: "value" };
let obj2 = new Object(); // Avoid this
let obj3 = Object.create(null); // No prototype
```

### Access & Modify

```javascript
let obj = { name: "John", age: 30 };

// Access
obj.name; // 'John'
obj["name"]; // 'John'
obj["key with space"]; // For special keys

// Add/Modify
obj.city = "NYC";
obj["country"] = "USA";

// Delete
delete obj.age;

// Check existence
"name" in obj; // true
obj.hasOwnProperty("name"); // true
```

### Object Methods (Most Important for DSA!)

```javascript
let obj = {a: 1, b: 2, c: 3};

// Object.keys() - Returns array of keys
Object.keys(obj); // ['a', 'b', 'c']

// Object.values() - Returns array of values
Object.values(obj); // [1, 2, 3]

// Object.entries() - Returns array of [key, value] pairs
Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]

// Object.fromEntries() - Opposite of entries
Object.fromEntries([['a', 1], ['b', 2]]); // {a: 1, b: 2}

// Object.assign() - Copy/merge objects
Object.assign({}, obj, {d: 4}); // {a: 1, b: 2, c: 3, d: 4}

// Spread operator (cleaner!)
{...obj, d: 4}; // {a: 1, b: 2, c: 3, d: 4}
```

### Iteration

```javascript
let obj = { a: 1, b: 2, c: 3 };

// for...in (iterates keys)
for (let key in obj) {
  console.log(key, obj[key]);
}

// Object.keys() + forEach
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});

// Object.entries() - Best for DSA!
for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
```

### Common Object Patterns for DSA

```javascript
// Frequency counter
const freq = {};
for (let item of arr) {
  freq[item] = (freq[item] || 0) + 1;
}

// Group by property
const groupBy = (arr, key) => {
  return arr.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});
};

// Deep clone (simple version)
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

// Merge objects
const merged = { ...obj1, ...obj2 };
```

---

## 4. Set

A Set stores **unique values** of any type.

### Creation & Basic Operations

```javascript
let set = new Set();
let set2 = new Set([1, 2, 3, 2]); // {1, 2, 3} - duplicates removed

// Add
set.add(1);
set.add(2);
set.add(2); // Ignored (duplicate)

// Check existence
set.has(1); // true
set.has(10); // false

// Delete
set.delete(1); // true (returns boolean)
set.delete(10); // false

// Size
set.size; // Number of elements

// Clear all
set.clear();
```

### Iteration

```javascript
let set = new Set([1, 2, 3]);

// for...of
for (let val of set) {
  console.log(val);
}

// forEach
set.forEach((val) => console.log(val));

// Convert to array
[...set]; // [1, 2, 3]
Array.from(set); // [1, 2, 3]
```

### Common Set Operations

```javascript
let set1 = new Set([1, 2, 3]);
let set2 = new Set([2, 3, 4]);

// Union
let union = new Set([...set1, ...set2]); // {1, 2, 3, 4}

// Intersection
let intersection = new Set([...set1].filter((x) => set2.has(x))); // {2, 3}

// Difference
let difference = new Set([...set1].filter((x) => !set2.has(x))); // {1}

// Remove duplicates from array
let arr = [1, 2, 2, 3, 3, 3];
let unique = [...new Set(arr)]; // [1, 2, 3]
```

### DSA Use Cases

```javascript
// Track visited nodes in graph
let visited = new Set();
visited.add(node);
if (!visited.has(neighbor)) {
  // Visit neighbor
}

// Check for duplicates
const hasDuplicates = (arr) => arr.length !== new Set(arr).size;

// Store coordinates (use string)
let visitedCoords = new Set();
visitedCoords.add(`${x},${y}`);
if (visitedCoords.has(`${nx},${ny}`)) {
  // Already visited
}
```

---

## 5. Map

A Map stores **key-value pairs** where keys can be **any type** (unlike objects which only use strings/symbols).

### Creation & Basic Operations

```javascript
let map = new Map();
let map2 = new Map([
  ["a", 1],
  ["b", 2],
]);

// Set
map.set("name", "John");
map.set(1, "one"); // Number as key
map.set({ id: 1 }, "object"); // Object as key

// Get
map.get("name"); // 'John'
map.get("notExists"); // undefined

// Check existence
map.has("name"); // true

// Delete
map.delete("name"); // true

// Size
map.size; // Number of entries

// Clear all
map.clear();
```

### Iteration

```javascript
let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// for...of with entries (default)
for (let [key, value] of map) {
  console.log(key, value);
}

// Keys only
for (let key of map.keys()) {
  console.log(key);
}

// Values only
for (let value of map.values()) {
  console.log(value);
}

// forEach
map.forEach((value, key) => {
  console.log(key, value);
});

// Convert to array
[...map]; // [['a', 1], ['b', 2], ['c', 3]]
[...map.keys()]; // ['a', 'b', 'c']
[...map.values()]; // [1, 2, 3]
```

### Map vs Object

```javascript
// Map advantages:
// 1. Any type as key
let map = new Map();
map.set({id: 1}, 'value'); // Object as key
map.set([1, 2], 'array'); // Array as key

// 2. Maintains insertion order
// 3. Better performance for frequent add/delete
// 4. Easy to get size

// Object advantages:
// 1. JSON serialization
JSON.stringify({a: 1}); // Works
JSON.stringify(map); // Doesn't work directly

// 2. Simpler syntax for string keys
obj.name vs map.get('name')
```

### DSA Use Cases

```javascript
// Frequency counter (better than object!)
let freq = new Map();
for (let item of arr) {
  freq.set(item, (freq.get(item) || 0) + 1);
}

// Graph adjacency list
let graph = new Map();
graph.set(node, []);
graph.get(node).push(neighbor);

// LRU Cache key-value storage
let cache = new Map();
cache.set(key, value);
if (cache.size > capacity) {
  cache.delete(cache.keys().next().value); // Delete oldest
}

// Group anagrams (key = sorted string)
let groups = new Map();
let sorted = word.split("").sort().join("");
if (!groups.has(sorted)) groups.set(sorted, []);
groups.get(sorted).push(word);
```

---

## 6. Additional Data Structures for DSA

### Stack (using Array)

```javascript
let stack = [];
stack.push(1); // Add to top
stack.push(2);
stack.pop(); // Remove from top - returns 2
stack[stack.length - 1]; // Peek top
```

### Queue (using Array - inefficient!)

```javascript
let queue = [];
queue.push(1); // Enqueue
queue.push(2);
queue.shift(); // Dequeue - returns 1 (SLOW - O(n))
queue[0]; // Peek front

// Better: Use two stacks or implement linked list
```

### Priority Queue (Manual Implementation Needed)

```javascript
// JavaScript has NO built-in heap/priority queue!
// You need to implement MinHeap/MaxHeap manually
// Or use a library like 'heap-js'

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[idx]) break;
      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let smallest = idx;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      idx = smallest;
    }
  }
}
```

---

## 7. Common DSA Patterns in JavaScript

### Two Pointers

```javascript
function twoSum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}
```

### Sliding Window

```javascript
function maxSubarraySum(arr, k) {
  let maxSum = 0,
    windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
```

### Frequency Counter

```javascript
function charFrequency(str) {
  const freq = new Map();
  for (let char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  return freq;
}
```

### Graph DFS

```javascript
function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  visited.add(node);
  console.log(node);

  for (let neighbor of graph.get(node) || []) {
    dfs(graph, neighbor, visited);
  }
}
```

### Graph BFS

```javascript
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    for (let neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

### Binary Search

```javascript
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```

---

## 8. Important JavaScript Tricks for DSA

### Array Manipulation

```javascript
// Swap elements
[arr[i], arr[j]] = [arr[j], arr[i]];

// Copy array
let copy = [...arr];
let copy2 = arr.slice();

// Fill array
Array(5).fill(0); // [0, 0, 0, 0, 0]

// Range array
Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]

// Matrix transpose
const transpose = (matrix) =>
  matrix[0].map((_, i) => matrix.map((row) => row[i]));
```

### Math Operations

```javascript
// Min/Max
Math.min(...arr);
Math.max(...arr);
Math.min(a, b);
Math.max(a, b);

// Floor/Ceil/Round
Math.floor(4.7); // 4
Math.ceil(4.2); // 5
Math.round(4.5); // 5

// Absolute value
Math.abs(-5); // 5

// Power
Math.pow(2, 3); // 8
2 ** 3; // 8 (exponentiation operator)

// Square root
Math.sqrt(16); // 4
```

### String/Number Conversion

```javascript
// String to Number
parseInt("123"); // 123
parseFloat("123.45"); // 123.45
Number("123"); // 123
+"123"; // 123 (unary plus)

// Number to String
String(123); // "123"
(123).toString(); // "123"
123 + ""; // "123"

// Character to ASCII
"A".charCodeAt(0); // 65

// ASCII to Character
String.fromCharCode(65); // "A"
```

### Infinity

```javascript
let max = -Infinity;
let min = Infinity;

Math.max(5, Infinity); // Infinity
Math.min(5, -Infinity); // -Infinity
```

---

## Quick Reference Table

| Operation        | Array       | String      | Set        | Map        | Object                 |
| ---------------- | ----------- | ----------- | ---------- | ---------- | ---------------------- |
| Add              | `push()`    | N/A         | `add()`    | `set()`    | `obj.key = val`        |
| Remove           | `pop()`     | N/A         | `delete()` | `delete()` | `delete obj.key`       |
| Search           | `find()`    | `indexOf()` | `has()`    | `has()`    | `'key' in obj`         |
| Size             | `length`    | `length`    | `size`     | `size`     | `Object.keys().length` |
| Iterate          | `forEach()` | `for...of`  | `for...of` | `for...of` | `for...in`             |
| Convert to Array | N/A         | `split()`   | `[...set]` | `[...map]` | `Object.entries()`     |

---

**Pro Tip:** Bookmark this and keep it handy during DSA practice! 🚀
