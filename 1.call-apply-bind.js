console.log(this) // prints {} or window

let Name ={
    firstname : "Venkatesh",
    lastname : "Maliga",
}
let printFullName=function(hometown,state) {
    console.log(this);
    console.log(this.firstname + " " + this.lastname + " "+hometown + " " +state)
}
printFullName.call(Name,"Nellore","Andhra Pradesh");
printFullName.call(this, "Nellore", "Andhra Pradesh"); //this={} or window

let name2={
    firstname: "Sachin",
    lastname: "Tendulkar",
}

//function borrowing 
//call methods we pass the aruguments individaully by comma seperated values
printFullName.call(name2,"Mumbai","Maharastra");

//in aplly  we will pass the arugemt as a array list in the second argument of apply method
printFullName.apply(name2, ["Mumbai", "Maharastra"])

//bind method
let printMyName = printFullName.bind(name2,"Mumbai", "Maharastra");
console.log(printMyName)
printMyName();

//in all these methods first param is the refernce of the object we ned to pass