//
setTimeout(function () {
  //call back function
  console.log("timer");
}, 5000);

// callback functions
function x(y) {
  console.log("X");
  y();
}

x(function y() {
  console.log("y");
});

// js is single thread ans synchronous
// blocking the main thread
// power of callbacks

// block main thread because the callback functions are pushed to callstack and executed immediately

let count = 0;
document.getElementById("Id1").addEventListener("click", function () {
  console.log("button clicked", ++count);
});

function close() {
  let count = 0;
  return function () {
    console.log("Button Clicked", ++count);
  };
}

// Call `close()` to get the function and store it
const handleClick = close();

// Attach the returned function to the event listener
document.getElementById("Id1").addEventListener("click", handleClick);

// not good but works
function attachEventListener() {
  let count = 0;
  document.getElementById("Id1").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}

attachEventListener();


// garbage collections nd remove event listeners