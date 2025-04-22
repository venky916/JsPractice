let arr = [1, 2, 3, 4, 5];

Array.prototype.myfilter = function (cb) {
  let output = [];
  let context = this;

  for (let i = 0; i < context.length; i++) {
    if (cb(context[i], i, context)) {
      output.push(context[i]);
    }
  }

  return output;
};

let res = arr.myfilter((el) => el < 2);
console.log(res);

// const resul = arr.reduce((acc, curr) => (acc = acc + curr),0);
// const result = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

Array.prototype.myreduce = function (cb, initialState) {
  let state = initialState;
  let context = this;
  for (let i = 0; i < context.length; i++) {
    state = state ? cb(state, context[i], i, context) : context[i];
  }

  return state;
};

const result = arr.myreduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(result);
