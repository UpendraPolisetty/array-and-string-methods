// 1. Question
{
    let username = 'John';
  }
  console.log(username); // output : error

// 2. Question 

{
    var username = 'John';
  }
  console.log(username); // output : 'John'

// 3. Question

{
    const username = 'John';
  }
  console.log(username);// output : error

// 4. Question

{
    let num = 21;
  }
  let secondNum = 200;
  function add() {
    return num + num2;
  }
  console.log(add());// error why because num stored in block scope and there is no num2 

// 5. Question

{
    var num = 21;
  }
  let secondNum = 200;
  function add() {
    return num + num2;
  }
  console.log(add()); // error why because num2 is not defined
  
// 6. Question

for (let i = 0; i < 20; i++) {
    //
  }
  console.log(i); // we can't access i why because let create block scope 

// 7. Question

for (var i = 0; i < 20; i++) {
    //
  }
  console.log(i); // 19

// 8. Question

for (const i = 0; i < 20; i++) {
    //
  }
  console.log(i); // we can't access i why because const create block scope 

// 9. Question

if (true) {
    let user = 'John';
  }
  console.log(user);// error 

// 10. Question

if (true) {
    var user = 'John';
  }
  console.log(user);// 'john'

// 11. Question

if (true) {
    const user = 'John';
  }
  console.log(user); // error

// 12. Question

if (true) {
    const number = 21;
    console.log(number++); // error we can't re-assign the value which stores in const variable
  }

// 13. Question

if (true) {
    const number = 21;
    console.log((number += 21)); // error we can't re-assign the value which stores in const variable
  }
// 14. Question

function first() {
    let one = 1;
    function second() {
      let two = 2;
      return one + two;
    }
  }
  
  console.log(first()); // undefined second function should be call

// 15. Question

function first() {
    let one = 1;
    function second() {
      let two = 2;
      return one + two;
    }
    second();
  }
  
  console.log(first()); // undefined why because first function is not returning anything

// 16. Question

function first() {
    let one = 1;
    function second() {
      let two = 2;
    }
    second();
    return one + two;
  }
  
  console.log(first()); // error

// 17. Question

function first() {
    let one = 1;
    function second() {
      let two = 2;
      return one + two;
    }
    return second();
  }
  
  console.log(first()); // 3

// 18. Question

function first() {
    let one = 1;
    function second() {
      let two = 2;
      let one = 100;
      return one + two;
    }
    return second();
  }
  
  console.log(first()); // 102

// 19. Question

let three = 300;
function first() {
  let one = 1;
  let three = 3;
  function second() {
    let two = 2;
    let one = 100;
    return one + two + three;
  }
  return second();
}

console.log(first()); // 105
// 20. Question

let three = 300;
function first() {
  let one = 1;
  let two = 2;
  function second() {
    let one = 100;
    return one + two + three;
  }
  return second();
}

console.log(first()); //402