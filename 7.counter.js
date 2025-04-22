// function counter() {
//   var count = 0;
//   return function increment() {
//     count++;
//     console.log(count);
//   };
// }

// var counter1 = counter();
// counter1();
// counter1();
// counter1();

// constructor function
function Counter() {
  var count = 0;
  this.increment = function () {
    count++;
    console.log(count);
  };
  this.decrement = function () {
    count--;
    console.log(count);
  };
}

// var counter1 = new Counter();
// counter1.increment();
// counter1.increment();
// counter1.increment();

// counter1.decrement();
// counter1.decrement();


const CounterFunction = ()=>{
  var count =0;
  const increment = ()=>{
    count++,
    console.log(count)
  };

  const decrement = ()=>{
    count--;
    console.log(count)
  }

  return {
    increment,
    decrement
  }
}

var counter2 = CounterFunction();

counter2.increment();
counter2.increment();
counter2.increment();

counter2.decrement();
counter2.decrement();


function createElf(name, type, weapon) {
  return {
    name: name,
    type: type,
    weapon: weapon,
    say() {
      return `Hi, my name is ${name}, I am a ${type} elf.`;
    },
    attack() {
      return `${name} attacks with ${weapon}`;
    }
  };
 }
 const dobby = createElf("Dobby", "house", "cloth");
 const legolas = createElf("Legolas", "high", "bow");
 dobby.say(); // Hi, my name is Dobby, I am a house elf.
 legolas.say(); // Hi, my name is Legolas, I am a high elf.
 dobby.attack(); // Dobby attacks with cloth.
 legolas.attack(); // Legolas attacks with bow.