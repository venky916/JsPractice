let person1 = {
  name: "Venkatesh",
};

let printAge = function (age) {
  console.log(`${this.name} is ${age}`);
};

let person2 = {
  name: "Shankar",
};

// person2.printAge(25) //error

// printAge.call(person2, 25);

// simple no complex
Function.prototype.mycall1 = function (object, arg) {
  let context = this;
  object.fn = context;
  object.fn(arg);
};

// handling all the edge cases
Function.prototype.mycall = function (object = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }
  let context = this;
  object.func = this;
  console.log(context, object, args);
  object.func(...args);
};

// printAge.mycall(person2, 25, 35, 34);

// apply
// printAge.apply(person1, [24]);
// printAge.apply(person2, [25]);

Function.prototype.myapply = function (object = {}, arr) {
  if (typeof this !== "function") {
    throw new Error("not callable");
  }
  if (!Array.isArray(arr)) {
    throw new Error("TypeError second argument must be array");
  }

  let context = this;
  object.func = context;
  //   console.log(arr, context, object);

  object.func(...arr);
};

// printAge.myapply(person1, [24]);
// printAge.myapply(person2, [25]);

// bind
// let fn1 = printAge.bind(person1,[24])
// fn1()
// let fn2 = printAge.bind(person2,[25])
// fn2()

Function.prototype.mybind = function (object, arr) {
  let context = this;
  object.func = this;
  console.log(context, object, arr);

  return function () {
    object.func(...arr);
  };
};

// complex covering all edge cases
Function.prototype.myBind = function (object, ...args1) {
  let context = this;
  object.func = this;

  return function (...args2) {
    object.func(...args1, ...args2);
  };
};

let fn1 = printAge.myBind(person1, [24]);
fn1();

let fn2 = printAge.myBind(person2);
fn2(25);


// bind using apply/call
Function.prototype.mybind2 = function (...args) {
  console.log(this, "this");
  let obj = this;
  let params = args.slice(1);

  return function (...args2) {
    // obj.call(args[0])
    obj.apply(args[0], [...params, ...args2]);
  };
};