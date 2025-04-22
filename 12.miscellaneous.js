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

console.log(Array(4).fill(0))

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
