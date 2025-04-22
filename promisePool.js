// // Input: 
// let functions = [
//   () => new Promise(res => setTimeout(res, 300)),
//   () => new Promise(res => setTimeout(res, 400)),
//   () => new Promise(res => setTimeout(res, 200))
// ]
// const n = 2

// // Output: [[300,400,500],500]


let functions = [
    () => new Promise(res => setTimeout(res, 300)),
    () => new Promise(res => setTimeout(res, 400)),
    () => new Promise(res => setTimeout(res, 200))
];
const n = 2;

var promisePool = async function (functions, n) {
    const start = Date.now();
    let i = 0;
    let inProgress = 0;
    let results = [];

    return new Promise((resolve, reject) => {

        function next() {
            if (i < functions.length) {
                inProgress++;
                functions[i++]().then(() => {
                    inProgress--;
                    results.push(Date.now() - start);
                    if (results.length === functions.length) {
                        resolve(results);
                    } else {
                        next();
                    }
                });
            }
        }

        while (i < n && i < functions.length) {
            next();
        }
    });
};

async function helper() {
    const x = await promisePool(functions, n);
    console.log('hello', x);
}

helper();

// var promisePool = async function (functions,n){
    
//     return new Promise((resolve,reject)=>{
//         let start = Date.now()
//         let i=0;
//         let inProgress =0;
        
//         function callback(){
//          if(i===functions.length && inProgress===0){
//                     resolve(Date.now()-start)
//                   }
//         while(i<functions.length && inProgress<n){
//             functions[i++]().then(()=>{
//                 inProgress--;
//                 callback()
//                 })
//             inProgress++;
//         }
//         }
//         callback()
//     })
// }

// async function helper() {
//     const x = await promisePool(functions, n)
//     console.log('hello', x)
// }

// helper();

//  var promisePool = async function (functions,n){
//      let i=0;
//      let start = Date.now();
     
//      async function callback(){
//          if(i===functions.length){
//              return 
//          }
//          await functions[i++]();
//          await callback();
//      }
//      const nPromises = Array(n).fill(0).map(callback)
//      await Promise.all(nPromises)
//      return Date.now()-start
//  }


// async function helper() {
//     const x = await promisePool(functions, n)
//     console.log('hello', x)
// }

// helper();



// var promisePool = async function (functions,n){
    
//     return new Promise((resolve,reject)=>{
//         let i=0;
//         let inProgress =0;
//         let results = []
        
//         while (i < functions.length && inProgress<=n){
//             functions[i++]().then((res)=>{
//                 inProgress--;
//                 results.push(res)
//                 if(i < functions.length  ){
//                     functions[i++]()
//                 }else{
//                   if(inProgress===0){
//                     resolve(results)
//                   }
//                 }
//                 // console.log('hi',i)
//             })
//             inProgress++;
//         }
        
//     })
// }
// // Test cases
// async function helper() {
//     let functions1 = [
//         () => new Promise(res => setTimeout(() => res(Date.now()), 300)),
//         () => new Promise(res => setTimeout(() => res(Date.now()), 400)),
//         () => new Promise(res => setTimeout(() => res(Date.now()), 200))
//     ];
//     const n1 = 2;

//     let startTime1 = Date.now();
//     let result1 = await promisePool(functions1, n1);
//     console.log('Results:', result1.map(t => t - startTime1)); 
//     // Expected: [300, 400, 500]
// }
// helper();


// let functions = [
//     () => new Promise(res => setTimeout(res, 300)),
//     () => new Promise(res => setTimeout(res, 400)),
//     () => new Promise(res => setTimeout(res, 200))
// ];
// const n = 2;

// var promisePool = async function (functions, n) {
//     let i = 0;
//     let results = new Array(functions.length);
//     let inProgress = [];

//     while (i < functions.length || inProgress.length > 0) {
//         while (inProgress.length < n && i < functions.length) {
//             const promise = functions[i]();
//             const index = i;
//             const resultPromise = promise.then((result) => {
//                 results[index] = result
//                 inProgress.splice(inProgress.indexOf(resultPromise), 1)
//             })
//             inProgress.push(resultPromise);
//             i++;
//         }
//         await Promise.race(inProgress);
//     }
//     return results
// };

// async function helper() {
//     const x = await promisePool(functions, n);
//     console.log('hello', x);
// }

// helper();
