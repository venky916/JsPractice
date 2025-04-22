// // function statement or function declaration
// function a() {
//   console.log("a called");
// }
// a();

// // function expression
// var b = function () {
//   console.log("b called");
// };
// b();

// var b = function xyz() {
//   console.log("b called");
//   console.log(xyz)
// };
// b() //works
// xyz(); //gives error reference error xyz not defined


// function called only once (its kind of anonymous function)IIFE
// var a = (function () {
//   console.log("called only once");
// })();

// // param vas argument
// function name1 (param1,parm2){
// }

// name1(argumet1,argumet2)

// first class functions
// pass function as param to another funtion 
// function return a function

function a(fn) {
  console.log(fn); 
  fn(); 
}

function b() {
  console.log("b");
};

a(b);

function x(){
    return function (){
        console.log("y")
    }
}
x()()


// arrow function


