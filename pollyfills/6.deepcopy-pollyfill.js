let arr = [1, 2, 3, [4, 5]];

// deep copy
// 2 ways simpley by using spread operator

let brr = [...arr]; // this creates shallow copy for nesting object so
// arr[3].push(7)
// console.log(arr,brr)

let brr2 = JSON.parse(JSON.stringify(arr));
// arr[3].push(7);
// console.log(arr, brr2);

// only works for arrays
function deepCopy(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      output.push(deepCopy(arr[i]));
    } else {
      output.push(arr[i]);
    }
  }
  return output;
}



function deepCopy(value) {
  if (["string", "number", "boolean"].includes(typeof value)) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map((el) => deepCopy(el)); //map itself returns a new array
  } else {
    return Object.keys(value).reduce((acc, curr) => {
      acc[curr] = deepCopy(value[curr]);
      return acc;
    }, {});
  }
}

const obj = {
  a1: {
    b1: {
      c1: "ss",
    },
  },
};

let obj2 = deepCopy(obj);
obj2.a1.b1 = null;

console.log(obj);
console.log(obj2);

let deep = deepCopy(arr);

arr[3].push(7);

console.log(arr, deep);

// better version
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Primitives (number, string, boolean, etc.)
  }
  if (Array.isArray(obj)) {
    return obj.map(deepCopy); // Recursively copy arrays
  }
  // Handle plain objects
  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}
