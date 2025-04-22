// closure (function + lexicalScope)
function x() {
  let a = 1;

  function y() {
    console.log(a);
  }
  a = 100;

  return y;
}

var func = x();

func();

// function x() {
//
// if use let it works, with out using let
// Since JavaScript executes the loop quickly, the loop completes before the setTimeout callbacks run. 
// By the time they execute, the variable i (declared with var) has already reached 5, so setTimeout prints 5 for all iterations
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }

//   console.log("Namaste anna");
// }

// add extra boundary to make a closure for setTimeout
// function x() {
//   for (var i = 0; i < 5; i++) {
//     function close(j) {
//       setTimeout(function () {
//         console.log(j);
//       }, j * 1000);
//     }
//     close(i);
//   }

//   console.log("Namaste anna");
// }

// x();
