let name2 = {
  firstname: "Venkatesh",
  lastname: "Maliga",
};
let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " " + hometown + " " + state
  );
};

let printMyName = printFullName.bind(name2, "Mumbai");

printMyName("Maharastra");

// let bindPolly = function(func,this){
//     return function(){
//        func(this)
//     }
// }

Function.prototype.mybind = function(...args){
    console.log(this,"this");
    let obj=this;
    let params = args.slice(1)

    return function(...args2){
        // obj.call(args[0])
        obj.apply(args[0],[...params,...args2])
    }
}

let printMyName2 = printFullName.mybind(name2,"mumbai");
printMyName2("Maharstra")
