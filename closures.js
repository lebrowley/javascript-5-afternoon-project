/* 
  Once you complete a problem, refresh ./closures.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
function outer() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  };
}
// Do not edit the code above.
  
/* 
  Above you're given a function that returns another function which has a closure over the name variable.
  Invoke outer saving the return value into another variable called 'inner'.
*/
  
const inner = outer()



//Once you do that, invoke inner.

inner()



////////// PROBLEM 2 //////////

// Do not edit the code below.
function callFriend(name) {
  function dial(number) {
    return 'Calling ' + name + ' at ' + number
  }
  return dial;
}
// Do not edit the code above.

/*
  Above you're given a callFriend function that returns the dial function.
  Store the result of invoking callFriend in a variable named callJake.
  
  When callJake is invoked with '435-555-9248', it returns 'Calling Jake at 435-555-9248' 
  (HINT: You will need to pass in arguments to both function invocations)
*/

let callJake = callFriend('Jake')
callJake('435-215-9248')

//how is it callJake() can now take in a number (as a string)? how will the inner function be able to know that that is actually the number parameter for dial and then put it in the right place in the return string?? 



////////// PROBLEM 3 //////////

/*
  Write a function called makeCounter that makes the following code work properly.
*/

// function makeCounter(){
//   return function(num){
//     return num++
//   }
// }

// why doesn't the function above increment but the one below does??

function makeCounter(){
  let num = 1
  return function(){
    return num ++
  }
}

//Uncomment this once you make your function
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



////////// PROBLEM 4 //////////

/*
  Inside the function called counterFactory return two functions that implement up/down counter.
  The first function is called inc, this function is responsible for incrementing the value once and returning the updated value.
  The second function is called dec, this function is responsible for decrementing the value by one and returning the updated value.
  You will need to use the module pattern to achieve this.
  Information on the module pattern available here: 
  http://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example?answertab=votes#tab-top
*/

function counterFactory(value) {
  let inc = function(){
    value++
    return value
  }
  let dec = function(){
    value--
    return value
  }

  return {
    inc, 
    dec
  };
}

counter = counterFactory(10);
counter.inc() // 11
counter.inc() // 12
counter.inc() // 13
counter.dec() // 12

//at this point, should I have things showing up in my console?? I only ever have errors show up if things show up and nothing when there is no error... what i mean is


////////// PROBLEM 5 //////////

/*
  Inside the motivation function create another function called message that will return the welcome text with the firstname and lastname.
  The final message should say "You're doing awesome, keep it up firstname lastname." 
  (Hint: don't forget to have a space between the firstname and lastname and a period at the end of the sentence.)
*/

function motivation( firstname, lastname ) {
  var welcomeText = "You're doing awesome, keep it up";

  let message = function(){
    return `${welcomeText} ${firstname} ${lastname}.`
  }

  //Uncommment this to return the value of your message function
  return message;
}

var greeting = motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob.



////////// PROBLEM 6 //////////

/*
  Inside the module's return object create a publicMethod function that invokes privateMethod (return the result).
  Invoke this by calling module.publicMethod(); outside the module scope
*/

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: "Utah"
  };

  function privateMethod(){
    return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  }

  // Anything that is being returned is made public and can be invoked from
  // outside our lexical scope
  return {
    publicMethod: function(){
      return privateMethod()
    }
  };
})();

//what's up with all the parentheses going on at the bottom here??

module.publicMethod()



////////// PROBLEM 7 //////////

/*
  Here we have a function named secretNumber that has a secret number.
  Inside the return object, create two methods called addToSecret and takeAwayFromSecret.
  addToSecret should have a parameter that is added to the secret number returning the updated secret number.
  takeAwayFromSecret should have a parameter that takes away from the secret number returning the updated secret number.
*/

function secretNumber() {
  var secret = 143;

  return {
    addToSecret: function(num){
      secret += num
      return secret
    },
    takeAwayFromSecret: function(num){
      secret -= num
      return secret
    }
  };
}



////////// PROBLEM 8 //////////
  
/*
  Here we have a for loop that will iterate as long as i is less than or equal to 5.
  What we need to do is console.log(i) so that it logs like so:
    0 second after call - log 0
    1 seconds after call - log 1
    2 seconds after call - log 2
    3 seconds after call - log 3
    4 seconds after call - log 4
    5 seconds after call - log 5

  However, because each call to console.log occurs after the loop has finished, the value of i has changed before the console.log executes.
  We'll need to use a closure to preserve a reference to i at the time of execution.
  
  Fix the code below to log the desired output.
*/

function timeOutCounter(){
  for (var i=0; i <= 5; i++){
    function memoryClosure(index){
      setTimeout(function() {
        console.log(index)
      }, index * 1000)
    }
    memoryClosure(i)
  }
}

// function timeOutCounter() {
//   for (var i = 0; i <= 5; i++) {
//     let now = i
//     setTimeout(function() {
//       console.log(now);
//     }, i * 1000);
//   }
// }
// timeOutCounter();


// what is i * 1000 doing?
// what is the closure doing for us? 
/* i feel like it's kind of like a stepping stone- we have a for loop that gives us the variable i starting at 0. i will add one until it reaches 5. we need to capture that moment of time, however, of when i is equal to 0 and 1 and 2 and 3 and 4 and 5 all individually. so we make a new variable where those numbers can be stored one by one and then we tell the console log to show us those numbers one at a time. */

//the i * 1000 though... what is that doing? milliseconds to seconds?? but how does it now about time??
