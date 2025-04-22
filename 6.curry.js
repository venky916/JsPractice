//currinng using the bind

// function multiply(x, y) {
//     // console.log(this,'this')
//     // console.log(x * y,'x*y');
//     console.log(x*y)
// }

let multiply = function (x,y){
    console.log(this,"this");
    console.log(x*y,"x*y")
}

// multiply(5, 3); // Outputs: 15

// // Correctly bind the function
// // const multiplyBy2 = multiply.bind(this, 2,3); // Outputs: 6

// const multiplyBy2 = multiply.bind(this, 2);

// multiplyBy2(5); // Outputs: 10

// const multiplyByn = multiply.bind(this);
// multiplyByn(5,4)

// const multiplyBy3= multiply.call(this,5,6);


// curring using the closures

// function multiply (x){
//     return function(y){
//         // console.log(x,y)
//         console.log(x*y);
//     }
// }

// const multiplyBy2= multiply(4);
// multiplyBy2(2);

// const multiplyBy3 = multiply(4);
// multiplyBy3(3);



// function nLevelMultiply(x) {
//     return function (y) {
//         return function(z){
//             console.log(x*y*z);
//             return "hey "+x*y*z
//         }
//     }
// }

// console.log(nLevelMultiply(4)(5)(6));


// const Sum1 = (a) => {
//     return function (b) {
//         return function(){
//             return a + b
//         }
        
//     }
// }
// const Sum2 =(x)=>{
//     let sum=0;
//     return function(y){
//         sum= sum+x+y
//         return sum;
//     }
// }
// // console.log(Sum1(2)(3)())
// // console.log(Sum2(2)(3)())

// const Sum = (a)=>{
//     return function (b){
//         if(!b) return a
//         return Sum(a+b)
//     }
// }
// console.log(Sum(1));
// console.log(Sum(1)(2)(3)())