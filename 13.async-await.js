// what is async?

// always return a promise
async function getData(params) {
  return "Namaste";
}
const dataPromise = getData();
console.log(dataPromise);

dataPromise.then((res) => console.log(res));

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 3000);
  //   resolve("Promise resolved value");
});

async function getData1(params) {
  return p;
}

const dataPromise1 = getData1();
console.log(dataPromise1);
dataPromise1.then((res) => console.log(res));

// without async-await
function getData2() {
  console.log("hello world");
  p.then((res) => console.log(res));
  console.log("Namaste javascript");
}
getData2();

// with async-await
async function handlePromise() {
  console.log("hello world");
  //JS Engine appears to be waiting for promise to resolved but it wont
  const res = await p;
  console.log(res);
  console.log("Namaste javascript");
}
handlePromise();

// initially empty call stack

// Async -> p1,p2
// handlePromise()-> run after seeing await -> not block it suspends and wait till p1 resolved
// how fetch works 

async function handleApiCall(params) {
    const response = await fetch("");
    const data = await response.json();

    // fetch((res)=>res.json).then(data=>console.log(data))
    
}

// fetch ->return promise (response object with body readable stream)
// response body ->readable stream ->to read we need response.json() since that how read api return json object we convert to json ->and this again return promise
// now data is actual json value object

// to handle error generally use try catch 
// since we handleAPiCall will return a promise since it is async function 
// other way to handle error
handleApiCall().catch((err)=>console.log(err))

