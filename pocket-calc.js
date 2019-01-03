var bar;
/*bar = document.getElementById("output-bar").innerHTML=0;
Requirements say default value needs to be zero. Find a way to do that.*/
function number(number) {
<<<<<<< HEAD
  bar = document.getElementById("output-bar").innerHTML += number;
  /*if (bar.length > 3) {
  bar.toLocaleString('en');
  Find a way to get the commas to apply at all times
}*/
}

function euler() {
  bar = document.getElementById("output-bar").innerHTML += Math.E.toFixed(9);
}

function pi() {
  bar = document.getElementById("output-bar").innerHTML += Math.PI.toFixed(9);
=======
  let bar = document.getElementById("output-bar");
  bar.innerHTML += number;

}

function euler() {
  let bar = document.getElementById("output-bar");
  bar.innerHTML += "2.71828183";
}

function pi() {
  let bar = document.getElementById("output-bar");
  bar.innerHTML += "3.14159265";
>>>>>>> d54f1c27871784dd4062a128a56e9d6143f71c90
}

/* 1. I can probably make the constants into one function for efficiency/space
2. These two are giving me trouble with generally being a pain. Find a way to make sure they're being used
for an operator or else they don't work*/

function xSquared() {
  bar = document.getElementById("output-bar").innerHTML += '**2'
}

function xToTheY() {
  bar = document.getElementById("output-bar").innerHTML += '**';
}
//There's probably a way to consolidate these two functions, if it's easier/more efficient to do that

function operator(operation) {
  bar = document.getElementById("output-bar").innerHTML += operation;
  //PROBLEM: Operators can be used twice in a row. Find a way to render a syntax error
}

function allClear() {
  bar = document.getElementById("output-bar").innerHTML = 0;
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
  //May need to sort out some problems here with making numbers negate before totalling
}

function percent() {
let equals = eval(bar);
bar = document.getElementById("output-bar").innerHTML = equals/100;
}

function decimal() {
  let i = 0;
  i++;
  console.log(i);

  if(i == 1) {
<<<<<<< HEAD
  let bar = document.getElementById("output-bar").innerHTML += ".";
} /*else {
  let bar = document.getElementById("output-bar");
  bar.innerHTML = "SYNTAX ERROR";
}*/
//Problem: Can repeat over and over again without error. Fix that.
=======
  let bar = document.getElementById("output-bar");
  bar.innerHTML += ".";
} /* else {
  let bar = document.getElementById("output-bar");
  bar.innerHTML = "SYNTAX ERROR";
}
*/
>>>>>>> d54f1c27871784dd4062a128a56e9d6143f71c90
}

function equals() {
let equals = eval(bar);
bar = document.getElementById("output-bar").innerHTML = equals.toLocaleString('en');
//Need to add scientific notation for lengths greater than 9 and commas for non-equals lengths greater than 3
//Need to add syntax errors in general to make sure this runs right
}
