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

Promise.all([promise1, promise2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

Promise.myall = function (promiseArr) {
  let output = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((res) => {
          counter++;
          output[index] = res;
          if (counter === promiseArr.length) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myall([promise1, promise2])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// better and handle all cases
Promise.myall = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise) // Handles non-promise values
        .then((value) => {
          results[index] = value; // Preserve order
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // Reject if any promise rejects
    });
  });
};

// Usage example:
const promis1 = Promise.resolve(1);
const promis2 = new Promise((resolve) => setTimeout(() => resolve(2), 100));
const promise3 = 3; // Non-promise value

Promise.myall([promis1, promis2, promise3])
  .then(console.log) // [1, 2, 3]
  .catch(console.error);