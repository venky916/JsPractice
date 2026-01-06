var arr = [2, 3, 1, 5, 6, 3];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findSum(arr));

// reduce takes 2 arguments
const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

// find max
const opt = arr.reduce(function (acc, curr) {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
}, arr[0]);
console.log(opt);
console.log(arr.reduce((prev, curr) => (prev >= curr ? prev : curr), arr[0]));

const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padulone", age: 26 },
];

// {26:2,75:1,50:1}

const output1 = users.reduce(function (acc, curr) {
  // acc[curr.age]
  if (curr.age in acc) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output1);

const output2 = users.reduce((acc, curr) => {}, {});

const otp2 = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(Array(4).fill(0));

var arr = Array(4)
  .fill(null)
  .map((u, i) => i);
console.log(arr);

arr = [...Array(4)].map((u, i) => i);
console.log(arr);

arr = Array.apply(null, Array(4)).map((u, i) => i);
console.log(arr);

arr = Array.from({ length: 4 }).map((u, i) => i);
console.log(arr);

// Simple number sort
const nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => {
  if (a < b) return -1; // a comes first
  if (a > b) return 1; // b comes first
  return 0; // they're equal
});
console.log(nums); // [1, 1, 3, 4, 5]

// Same logic, shorter
nums.sort((a, b) => a - b); // Ascending
nums.sort((a, b) => b - a); // Descending

// Sort array of objects by a property
const users1 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

users1.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
// Result: [Bob(25), Alice(30), Charlie(35)]
const users2 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
sortBy(users2, "age", "asc");

function sortBy(arr, key, order = "asc") {
  return [...arr].sort((a, b) => {
    const aVal = a[key]; // Get property value from a
    const bVal = b[key]; // Get property value from b

    if (aVal < bVal) return order === "asc" ? -1 : 1; // If ascending: -1, if descending: 1
    if (aVal > bVal) return order === "asc" ? 1 : -1; // If ascending: 1, if descending: -1

    return 0; // Equal values
  });
}

// Step 1: Compare Alice(30) vs Bob(25)
// aVal = 30, bVal = 25
// 30 > 25? YES → return 1 (Bob comes first)

// Result: [Bob(25), Alice(30)] ✓
