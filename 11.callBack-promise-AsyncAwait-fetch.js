//call back function and call back hell

// function getdata(dataId,getNextData){

//     setTimeout(()=>{
//         console.log("data=",dataId);
//         if (getNextData){
//             getNextData();
//         }  
//     },2000);
// }

// normal code doesnt wait for getdat1 to complete 
// getData(1);
// console.log('got data 1');
// getData(2);
// console.log("got data  2");


//callback hell
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4);
//         })
//     })
// });



// promises and promise chain

// const  getPromise =()=>{
// return new Promise((resolve,reject)=>{
//     console.log("Iam a promise");
//      resolve('success');
//     // reject('network error')
// });
// };

// let promise = getPromise();

// promise.then((res)=>{
//     console.log("promise fulfilled",res)
// })

// promise.catch((err)=>{
//     console.log("rejected",err)
// })


// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data=",dataId);
//         resolve('success');
//         if (getNextData){
//             getNextData();
//         }  
//     },5000);
//     })
// }

//or below way 

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data=",dataId);
//         resolve('success'); 
//     },2000);
//     })
// }

//Promise chain
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     });
// });

// getData(1)
//     .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     console.log(res)
// })

// getData(1)
//     .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3)
// })
// .then((res)=>{
//     console.log(res)
// })



// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve('Sucess');
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data2");
//             resolve('Sucess');
//         },4000);
//     });
// }


// console.log('fetching data1.......')
// asyncFunc1().then((res)=>{
//     console.log(res)
//     console.log('fetching data2.......')
//     asyncFunc2().then((res)=>{
//         console.log(res);
// })
// })



// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getWeatherData(){
//     await api();//1st call
//     console.log("2nd call");
//     await api(); //2nd call
// }


// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data=",dataId);
//         resolve('success'); 
//     },2000);
//     })
// }


//Async-Await

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);

// }

//iife
// (async function (){
//     await getData(1);
//     await getData(2);
//     await getData(3);

// })();

//fetch api

const URL = "https://dattebayo-api.onrender.com/characters";
let characters = document.querySelector("#para");

let charac=[]
const btn = document.querySelector("#btn");

//using async await
const getChars = async ()=>{
    console.log('getting data......')
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    for(let x of data.characters){
        console.log(x)
        charac.push(x.name)
    }
    let str=''
    for(let s of charac){
        str=str+"\n"+s
    }
    characters.innerText=str
}

//using promises
// function getChars(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//         for(let x of data.characters){
//             console.log(x)
//             charac.push(x.name)
//         }
//         let str=''
//         for(let s of charac){
//             str=str+"\n"+s
//         }
//         characters.innerText=str
//     })
// }

btn.addEventListener("click",getChars);




