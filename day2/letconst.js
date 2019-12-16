// function scope of var
var tester = "hey hi";

function newFunction() {
    var hello = "hello";
}
console.log(hello); 


// hoisting of variables
console.log (greeter);
var greeter = "say hello"


// problem with var

var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }

    console.log(greeter) //"say Hello instead"

// advantage of let
let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);//"say Hello instead"
    }
   console.log(hello) // hello is not defined

{
    let game="hello";
    console.log(game);
}

// variables defined in different scopes of let
let greeting = "say Hi";
   if (true) {
       let greeting = "say Hello instead";
       console.log(greeting);//"say Hello instead"
   }
   console.log(greeting);//"say Hi"


// const shallow check on immutability