var bar = "";
bar = document.getElementById("output-bar").innerHTML = "0";
console.log(bar);
//Gotta get the zero thing working
var myHistory = "";
/*Need to add to calculator:
Scientific notation and commas for numbers that are too large
Constants that work (problems loading pi and e)
Multiple operators can be directly added where they shouldn't be able to
Consider adding default x cubed option
Consider adding x! using 'for' loop*/
function lastCharCheck(){
    let z = myHistory.length;
    let lastChar = myHistory[z];
    console.log("Last history character =" + lastChar);
}

function number(number) {
lastCharCheck();
let zeroCheck = false;

if (bar == 0) {
  zeroCheck = true;
} console.log(zeroCheck);

if (zeroCheck == true) {
    bar = document.getElementById("output-bar").innerHTML = number;
  } else if (zeroCheck == false){
  bar = document.getElementById("output-bar").innerHTML += number;
  }
}

function euler() {
  lastCharCheck();
  bar = document.getElementById("output-bar").innerHTML = "(2.718281828)";
}

function pi() {
  lastCharCheck();
  bar = document.getElementById("output-bar").innerHTML = "(3.141592654)";
}

/* 1. I can probably make the constants into one function for efficiency/space
2. These two are giving me trouble with generally being a pain. Find a way to make sure they're being used
for an operator or else they don't work*/

function xSquared() {
  //need to add history bit here
  bar = document.getElementById("output-bar").innerHTML = eval(bar)**2;
}

function xToTheY() {
  bar = document.getElementById("output-bar").innerHTML += '**';
}
//There's probably a way to consolidate these two functions, if it's easier/more efficient to do that

function operator(operation) {
  let equalsCheck = false; //= myHistory.includes("=");
  lastCharCheck();
  console.log("First check");
  let k = myHistory.length;
  for (let i = 0; i < k; i++) {
    console.log("In loop. Before if check clause");
    if (myHistory[i] == "=") {
      equalsCheck = true;
      console.log(equalsCheck);
    }
  }
console.log("Second check. Between if statements" + equalsCheck);
if (equalsCheck === false) {
  myHistory = document.getElementById("myHistory").innerHTML += (bar + operation);
  bar = document.getElementById("output-bar").innerHTML = "0";
  console.log("If clause, line 52, no equals sign");
} else if (equalsCheck === true) {
    myHistory = document.getElementById("myHistory").innerHTML += (operation);
    bar = document.getElementById("output-bar").innerHTML = "";
    let equalsPlace = myHistory.indexOf("=");
    let newHistory = myHistory.substring((equalsPlace + 1));
    myHistory = document.getElementById("myHistory").innerHTML = newHistory;
    console.log("Else if clause, line 59, equals sign");
  }
  //PROBLEM: Operators can be used twice in a row. Find a way to render a syntax error
}

function allClear() {
  bar = document.getElementById("output-bar").innerHTML = "0";
  myHistory = document.getElementById("myHistory").innerHTML = "";
}

function negate() {
let equals = eval(bar);

  let minusCheck = false; //= myHistory.includes("=");
  console.log("First check");
  let k = bar.length;
  for (let i = 0; i < k; i++) {
    console.log("In loop. Before if check clause");
    if (bar[i] == "-") {
      minusCheck = true;
      console.log(minusCheck);
    }
  }

if (minusCheck == false) {
  bar = document.getElementById("output-bar").innerHTML = "(-" + bar + ")"
  } else if (minusCheck == true) {
  bar.replace("(-", "");
  bar.replace(")", "");
  bar = document.getElementById("outupt-bar").innerHTML = bar;
  //Get this part working
  }
}

function percent() {
let equals = Number(bar);
bar = document.getElementById("output-bar").innerHTML = equals/100;
}

function decimal() {
    lastCharCheck();
    let bar = document.getElementById("output-bar").innerHTML += ".";
  }

//Problem: Can repeat over and over again without error. Fix that.


function equals() {
myHistory = document.getElementById("myHistory").innerHTML += bar;
let equals = eval(myHistory);
  if (equals > 999999999) {
    equals = equals.toExponential(8);
  }
bar = document.getElementById("output-bar").innerHTML = equals.toLocaleString("en");
myHistory = document.getElementById("myHistory").innerHTML += "=" + equals;
//console.log(myHistory);
//Need to add syntax errors in general to make sure this runs right
}
