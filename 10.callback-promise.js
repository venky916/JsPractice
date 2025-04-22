const cart = ["shoes", "pants", "kurta"];

// creteOrder(cart); //orderId
// proceedToPayment(orderId);

// since we need this to be asynchronous that proceedToPayment must happen after order been placed
// we use callbacks to make it happen

// creteOrder(cart, function () {
//   proceedToPayment(orderId);
// });

// now after the createOrder api creates the order ,we hope it calls the proceedToPayment api
// theres are 2 issues
// 1.callback hell order->payment->order summary ->update wallet balance ->...etc each are dependents on each which happen only after previous is done
// 2.inversion of control,we are blindly trusting that createOrder api will call the proceedToPayment

// Solution is promise
// const promise = creteOrder(cart);

// promise =>{data:} object with data field (data:undefined,null,object,number..etc)

// promise =>{data:orderId} once data in promise object is filled with data, then callback will be automatically called
// promise.then(function () {
//   proceedToPayment(orderId);
// });

// promise
// State  =>pending,fullFilled,rejected
// and result =>undefined,response (with api data),null

// const user = fetch(api).then(function (data) {
//  data is result of promise it automatically attached to it as parameter
//   console.log(data);
// });

// def promise is an object represents the eventual completion of an asynchronous operation.

// callback hell
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function (paymentInfo) {
//       updateWalletBalance(paymentInfo);
//     });
//   });
// });

// NOTE
// we need return when we need to pass down the chain (promise chaining)
// createOrder(cart)
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     return proceedToPayment(paymentInfo);
//   })
//   .then(function (paymetInfo) {
//     return updateWallet(paymetInfo);
//   });



//   creating a promise (producer end)
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // validate cart,crete order and return orderId
    const apiResponse = true;
    if (!apiResponse) {
      const err = new Error("Cart not valid");
      reject(err);
    }
    // after order created
    const orderId = "1245";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
      //   resolve(orderId);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  console.log("Order ID received:", orderId);

  const pr = new Promise(function (resolve, reject) {
    // Check orderId and create payment page info
    const apiResponse = true;
    if (!apiResponse) {
      const err = new Error("orderId not valid");
      reject(err);
    }
    // After order is processed
    const paymentInfo = "Payment successful";
    if (paymentInfo) {
      resolve(paymentInfo);
    }
  });

  return pr;
}

// const promise = createOrder(cart);

// console.log(promise);
// promise
//   .then(function (orderId) {
//     console.log(orderId);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// promise chaining don forget return 
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId); 
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (error) {
    console.error(error.message);
  });
