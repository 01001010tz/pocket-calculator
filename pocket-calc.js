var bar = "";
bar = document.getElementById("output-bar").innerHTML = "0";
console.log(bar);
//Gotta get the zero thing working
var myHistory = "";
var lastChar;
/*Need to add to calculator:
Scientific notation and commas for numbers that are too large
Constants that work (problems loading pi and e)
Multiple operators can be directly added where they shouldn't be able to
Consider adding default x cubed option
Consider adding x! using 'for' loop*/

while (myHistory !== "") {
  console.log("In while loop. History not empty.")
let z = myHistory.length;
lastChar = myHistory[z];
}

function number(number) {
  console.log("Last character" + lastChar);
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
  if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*") {
    bar = document.getElementById("output-bar").innerHTML = "(2.718281828)";
  } else {
    alert("SYNTAX ERROR");
  }
}

function pi() {
  if (lastChar == "+" || lastChar == "-" || lastChar == "/" || lastChar == "*") {
    bar = document.getElementById("output-bar").innerHTML = "(3.141592654)";
  } else {
    alert("SYNTAX ERROR");
  }
}

/* 1. I can probably make the constants into one function for efficiency/space
2. These two are giving me trouble with generally being a pain. Find a way to make sure they're being used
for an operator or else they don't work*/

function xSquared() {
myHistory = document.getElementById("myHistory").innerHTML = bar + "**2";
  bar = document.getElementById("output-bar").innerHTML = "";
}

function xToTheY() {
myHistory = document.getElementById("myHistory").innerHTML = bar + "**";
  bar = document.getElementById("output-bar").innerHTML = "";
}
//There's probably a way to consolidate these two functions, if it's easier/more efficient to do that

function operator(operation) {
if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*" && lastChar != NaN) {
    console.log("Last character" + lastChar);
    let equalsCheck = false;
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
      bar = document.getElementById("output-bar").innerHTML = "0";
      let equalsPlace = myHistory.indexOf("=");
      let newHistory = myHistory.substring((equalsPlace + 1));
      myHistory = document.getElementById("myHistory").innerHTML = newHistory;
      console.log("Else if clause, line 59, equals sign");
    }
  //PROBLEM: Operators can be used twice in a row. Find a way to render a syntax error
} else {
  alert("SYNTAX ERROR");
  }
}

function allClear() {
  bar = document.getElementById("output-bar").innerHTML = "0";
  myHistory = document.getElementById("myHistory").innerHTML = "";
}

function negate() {
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
  if (lastChar != ".") {
    let bar = document.getElementById("output-bar").innerHTML += ".";
  } else {
    alert("SYNTAX ERROR");
  }
}
//Problem: Can repeat over and over again without error. Fix that.

function equals() {
if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*" && lastChar != NaN) {
    myHistory = document.getElementById("myHistory").innerHTML += bar;
  let equals = eval(myHistory);
    if (equals > 999999999) {
      equals = equals.toExponential(8);
    }
  bar = document.getElementById("output-bar").innerHTML = equals.toLocaleString("en");
  myHistory = document.getElementById("myHistory").innerHTML += "=" + equals;
} else {
  alert("SYNTAX ERROR");
}
//console.log(myHistory);
//Need to add syntax errors in general to make sure this runs right
}
