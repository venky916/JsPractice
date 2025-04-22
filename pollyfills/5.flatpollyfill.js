let arr = [1, 2, [3, [4, 5]], [6, 7]];
// const arr = [1, [2, [3, [4]], 5]];

// let arr = [1,2,[3,4,5]]

console.log(arr.flat(2));

function myflat(arr, depth = 1) {
  if (depth === 0) {
    return arr;
  }

  let output = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i],Array.isArray(arr[i]))
    if (Array.isArray(arr[i])) {
      let res = myflat(arr[i], depth - 1);
      output.push(...res);
    } else {
      output.push(arr[i]);
    }
  }

  return output;
}

// console.log(myflat(arr, 2));

Array.prototype.myFlat = function (depth = 1) {
  if (depth === 0) {
    return this;
  }

  let output = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      let res = this[i].myFlat(depth - 1);
      output.push(...res);
    } else {
      output.push(this[i]);
    }
  }

  return output;
};

console.log(arr.myFlat(2));

Array.prototype.myFlat2 = function (depth) {
  let res = [];

  if (!Array.isArray(this)) {
    throw new Error("myFlat applicatble to aonly arrya");
  }

  this.forEach((el) => {
    if (Array.isArray(el) && depth > 0) {
      res.push(...el.myFlat2(depth - 1));
    } else {
      res.push(el);
    }
  });

  return res;
};
