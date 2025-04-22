let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1");
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2");
  }, 100);
});

// Promise.allSettled([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

Promise.myallsettled = function (promiseArr) {
  let output = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      counter++;
      promise
        .then((value) => {
          output[index] = { status: "fulfilled", value };
          if (counter == promiseArr.length) {
            resolve(output);
          }
        })
        .catch((reason) => {
          output[index] = { status: "rejected", reason };
        });
    });
  });
};

// Promise.myallsettled([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// better version
Promise.myallsettled1 = function (promiseArr) {
  let output = [];
  let counter = 0;

  return new Promise((resolve) => {
    // Never rejects (allSettled never rejects)
    if (promiseArr.length === 0) {
      resolve([]); // Handle empty array case
      return;
    }

    promiseArr.forEach((promise, index) => {
      Promise.resolve(promise) // Handles non-promise values
        .then((value) => {
          output[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          output[index] = { status: "rejected", reason };
        })
        .finally(() => {
          counter++;
          if (counter === promiseArr.length) {
            resolve(output);
          }
        });
    });
  });
};

Promise.race([promise1, promise2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

Promise.myrace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      promise.then((data) => resolve(data)).catch((err) => reject(err));
    });
  });
};

Promise.myrace([promise1, promise2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


// better version
Promise.myrace = function (promiseArr) {
  return new Promise((resolve, reject) => {
    // Handle empty array case (should pending forever like native Promise.race)
    if (promiseArr.length === 0) return;

    promiseArr.forEach((promise) => {
      Promise.resolve(promise) // Convert non-promises to promises
        .then(resolve) // First to resolve settles the race
        .catch(reject); // First to reject settles the race
    });
  });
};