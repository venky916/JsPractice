const a = { a: 1, b: 2, c: { z: 5 } };
const b = { b: 2, a: 1, c: { z: 5 } };

// console.log(JSON.stringify(a) === JSON.stringify(b));

let arr1 = [1, 2, 3, [4, 5]];
let arr2 = [1, 2, 3, [4, 5]];

// console.log(
//   JSON.stringify(arr1) === JSON.stringify(arr2),
//   JSON.stringify(arr1)
// );

function compareObjects(obj1, obj2) {
  let keys = Object.keys(obj1);

  for (let i = 0; i < keys.length; i++) {
    if (!obj2.hasOwnProperty(keys[i])) {
      return false;
    } else {
      if (typeof obj1[keys[i]] !== "object") {
        if (obj1[keys[i]] !== obj2[keys[i]]) {
          return false;
        }
      } else {
        if (Array.isArray(obj1[keys[i]])) {
          if (JSON.stringify(obj1[keys[i]]) !== JSON.stringify(obj2[keys[i]])) {
            return false;
          }
        } else {
          if (compareObjects(obj1[keys[i]], obj2[keys[i]]) === false) {
            return false;
          }
        }
      }
    }
  }

  return true;
}

console.log(compareObjects(a, b));

// a bit better and simple approach
function isObject(object) {
  return object !== null && typeof object === "object";
}

function compareObjects2(obj1, obj2) {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);

  if (keysArr1.length !== keysArr2.length) return false;

  for (let key of keysArr1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (!isObjects && value1 !== value2) {
      return false;
    }

    if (isObjects && !compareObjects2(value1, value2)) {
      return false;
    }

    return true;
  }
}

console.log(compareObjects2(a, b));
