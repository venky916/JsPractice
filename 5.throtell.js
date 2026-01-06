let counter = 0;

function resizing(param1) {
  console.log("i am resizing", ++counter, param1);
}

// const throtell = function (fn,d){
//     let flag=true;
//     return function (){
//         if(flag){
//             fn();
//             flag=false
//         }
//         setTimeout(()=>{
//             flag=true;
//         },d)
//     }
// }

const throtell = function (fn, d) {
  let flag = true;
  return function (...args) {
    let context = this;
    if (flag) {
      fn.apply(context, args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, d);
  };
};

const throttle2 = function (fn, d) {
  let flag = true;
  let timeoutId = null;

  return function (...args) {
    let context = this;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        flag = true;
      }, d);
    }
  };
};

const betterFunction = throtell(resizing, 1000);

function throttle3(callback, limit = 300) {
  let lastRan = Date.now();
  let timeoutId = null;

  return function (...args) {
    const now = Date.now();
    const timeSinceLastRun = now - lastRan;

    if (timeSinceLastRun >= limit) {
      // Execute immediately if enough time passed
      callback.apply(this, args);
      lastRan = now;
    } else {
      // Schedule for remaining time
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
        lastRan = Date.now();
      }, limit - timeSinceLastRun);
    }
  };
}

window.addEventListener("resize", () => betterFunction("hi"));

var throttle = function (fn, t) {
  let flag = false;
  let nextArgs = null;
  return function (...args) {
    if (!flag) {
      fn(...args);
      flag = true;
      setTimeout(helper, t);
    } else {
      nextArgs = true;
    }

    function helper() {
      if (nextArgs) {
        fn(nextArgs);
        flag = true;
        nextArgs = null;
        setTimeout(helper, t);
      } else {
        flag = false;
      }
    }
  };
};
