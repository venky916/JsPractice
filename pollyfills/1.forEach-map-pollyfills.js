let arr = [1, 2, 3, 4, 5];

// arr.forEach((el,i,array)=>{
//     array[i] = el*2
//     console.log(el)
// })

// console.log(arr)

Array.prototype.myForEach = function (cb) {
  let context = this;
  for (let i = 0; i < context.length; i++) {
    cb(context[i], i, this);
  }
};

arr.myForEach((el, i, array) => {
  array[i] = el * 2;
  console.log(el);
});

console.log(arr);

// let res = arr.map((el, i) => el * 2 * i);

Array.prototype.mymap = function (cb) {
  let output = [];
  let context = this;

  for (let i = 0; i < this.length; i++) {
    output.push(cb(context[i], i, this));
  }
  return output;
};

let res2 = arr.mymap((el, i) => el * 2 * i);

console.log(res2);
