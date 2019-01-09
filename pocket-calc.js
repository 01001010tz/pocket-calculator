var bar;
var history = "";
/*Need to add to calculator:
Scientific notation and commas for numbers that are too large
Constants that work (problems loading pi and e)
Multiple operators can be directly added where they shouldn't be able to
Remove zero from first number after AC
Consider adding parentheses
Consider adding default x cubed option
Consider adding x! using 'for' loop*/

function number(number) {
  /*if (Number(bar) == 0) {
    bar.replace("0", number);
  }*/
  bar = document.getElementById("output-bar").innerHTML += number;
}

function euler() {
  bar = document.getElementById("output-bar").innerHTML += "(2.718281828)";
}

function pi() {
  bar = document.getElementById("output-bar").innerHTML += "(3.141592654)";
}

/* 1. I can probably make the constants into one function for efficiency/space
2. These two are giving me trouble with generally being a pain. Find a way to make sure they're being used
for an operator or else they don't work*/

function xSquared() {
  bar = document.getElementById("output-bar").innerHTML += '**2';
}

function xToTheY() {
  bar = document.getElementById("output-bar").innerHTML += '**';
}
//There's probably a way to consolidate these two functions, if it's easier/more efficient to do that

function operator(operation) {
  history = document.getElementById("history").innerHTML += bar + operation;
  bar = document.getElementById("output-bar").innerHTML = "";
  //PROBLEM: Operators can be used twice in a row. Find a way to render a syntax error
}

function allClear() {
  bar = document.getElementById("output-bar").innerHTML = "0";
  history = document.getElementById("history").innerHTML = "";
}
/*PROBLEM: After clearing the 0 doesn't go away. This will become a problem when 0 is made default later. Find a way
 to get rid of the zero when other numbers are put in */

function negate() {
let equals = eval(bar);
if (equals > 0) {
  equals -= 2*equals;
  bar = document.getElementById("output-bar").innerHTML = equals;
  }else if (equals < 0) {
  equals += 2*Math.abs(equals)
  bar = document.getElementById("output-bar").innerHTML = equals;
  }

  //May need to sort out some problems here with making numbers negate before totalling. Need to be able to string...
}

function percent() {
let equals = Number(bar);
bar = document.getElementById("output-bar").innerHTML = equals/100;
}

function decimal() {
  let i = 0;
  i++;
  console.log(i);

  if(i == 1) {
  let bar = document.getElementById("output-bar").innerHTML += ".";
} /*else {
  let bar = document.getElementById("output-bar");
  bar.innerHTML = "SYNTAX ERROR";
}*/
//Problem: Can repeat over and over again without error. Fix that.
}

function equals() {
console.log("Check 0");
history = document.getElementById("history").innerHTML += bar;
console.log(history);
let equals = eval(history);
console.log(equals);
history = document.getElementById("history").innerHTML += "=" + equals;
console.log(history);
bar = document.getElementById("output-bar").innerHTML = equals.toLocaleString("en");
console.log(bar);
//Need to add scientific notation for lengths greater than 9 and commas for non-equals lengths greater than 3
//Need to add syntax errors in general to make sure this runs right
}
