let bar = document.getElementById("output-bar");
let myHistory = document.getElementById("myHistory");
let lastChar;
/*Need to add to calculator:
Scientific notation and commas for numbers that are too large
Constants that work (problems loading pi and e)
Multiple operators can be directly added where they shouldn't be able to
*/

while (myHistory !== "") {
let z = myHistory.length;
lastChar = myHistory[z];
}

if (bar = Infinity) {
  alert("SYNTAX ERROR")
}

function number(number) {
  console.log("Last character" + lastChar);
  let zeroCheck = false;
  let equalsCheck = false;
  let k = myHistory.length;
  for (let i = 0; i < k; i++) {
    if (myHistory[i] == "=") {
      equalsCheck = true;
    }
  }
  if (bar == 0) {
    zeroCheck = true;
  }

  if (zeroCheck == true) {
      bar = document.getElementById("output-bar").innerHTML = number;
    } else if (zeroCheck == false){
      bar = document.getElementById("output-bar").innerHTML += number;
        /*if (equalsCheck = true) {
          bar = document.getElementById("output-bar").innerHTML = number;
        } else if (equalsCheck = false) {
          bar = document.getElementById("output-bar").innerHTML += number;
        }*/
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

function operator(operation) {
if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*" && lastChar != NaN) {
    console.log("Last character" + lastChar);
    let equalsCheck = false;
    let k = myHistory.length;
    for (let i = 0; i < k; i++) {
      if (myHistory[i] == "=") {
        equalsCheck = true;
      }
    }
  if (equalsCheck === false) {
    myHistory = document.getElementById("myHistory");
    myHistory.innerHTML += (bar + operation);
    bar = document.getElementById("output-bar").innerHTML = "";
  } else if (equalsCheck === true) {
      myHistory = document.getElementById("myHistory");
      myHistory.innerHTML += (operation);
      bar = document.getElementById("output-bar");
      bar.innerHTML = "";
      let equalsPlace = myHistory.indexOf("=");
      let newHistory = myHistory.substring((equalsPlace + 1));
      myHistory = document.getElementById("myHistory");
      myHistory.innerHTML = newHistory;
    }
  //PROBLEM: Operators can be used twice in a row. Find a way to render a syntax error
} else {
  myHistory.replace(lastChar, operation);
  }
}

function allClear() {
  bar = document.getElementById("output-bar").innerHTML = "0";
  myHistory = document.getElementById("myHistory").innerHTML = "";
}

function negate() {
  let minusCheck = false;
  let k = bar.length;
  for (let i = 0; i < k; i++) {
    if (bar[i] == "-") {
      minusCheck = true;
    }
  }

if (minusCheck == false) {
  bar = document.getElementById("output-bar").innerHTML = "-" + bar;
  } else if (minusCheck == true) {
    let withoutMinus = bar.substring(1);
    bar = document.getElementById("output-bar").innerHTML = withoutMinus;
  //Get this part working
  }
}

function percent() {
let equals = Number(bar);
bar = document.getElementById("output-bar").innerHTML = equals/100;
}

function decimal() {
  let decimalCheck = false;
  if (bar.includes(".")) {
    decimalCheck = true;
  }

  if (decimalCheck == true) {
    bar = document.getElementById("output-bar").innerHTML += ".";
  }
}
//Problem: Can repeat over and over again without error. Fix that.

function equals() {
if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*" && lastChar != NaN) {
    myHistory = document.getElementById("myHistory").innerHTML += bar;
  let equals = eval(myHistory);
    if (equals > 999999999) {
      equals = equals.toExponential();
    }
  bar = document.getElementById("output-bar").innerHTML = equals.toLocaleString("en");
  myHistory = document.getElementById("myHistory").innerHTML += "=" + equals;
} else {
  alert("SYNTAX ERROR");
}
//Need to add syntax errors in general to make sure this runs right
}
