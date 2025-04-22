let counter = 0;

const getData = () => {
  // calls an api get Data
  console.log("Fetching data", counter++);
};

const debounceBasic = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

const debounce = function (fn, delay) {
  let timer;
  return function (...args) {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 3000);
betterFunction()
