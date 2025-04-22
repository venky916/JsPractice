const radius = [1, 2, 3, 4];

const calculateArea = function (radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }

  return output;
};

const calculateCircumference = function (radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }

  return output;
};

const calculateDiameter = function (radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }

  return output;
};
// above one is not good approach

// higher-order-function (passing function as argument or return a function from function)
// best approach below modular,
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (arr, logic) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }

  return output;
};

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));


// console.log(radius.map(area)); 
// console.log(radius.map(circumference)); 
// console.log(radius.map(diameter)); 

// pollyfill of map
Array.prototype.mymap = function(cb){
    const output = []

    let context = this;
    console.log(this,"this")

    for(let i=0;i<context.length;i++){
        output.push(cb(context[i]))
    }
    return output
}

console.log(radius.map(diameter)); 
console.log(radius.mymap(diameter))