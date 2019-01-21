let bar;
let myHistory;
let lastIsOperator;
let lastIsNumber;
let lastIsConstant;
/*Need to add to calculator:
Scientific notation and commas for numbers that are too large
*/

function setup() {
  bar = document.getElementById("output-bar");
  myHistory = document.getElementById("myHistory");
  allClear();
  lastIsNumber = false;
  lastIsOperator = false;
  lastIsConstant = false;
  /*Need to add to calculator:
  Scientific notation for numbers that are too large
  */
  }

function number(number) {
  let zeroCheck = false;
  let decimalCheck = false;
  let k = myHistory.length;

  if (lastIsConstant == false) {
  for (let i = 0; i < k; i++) {
    if (myHistory[i] == "=") {
      equalsCheck = true;
    }
  }
  for (let x = 0; x < bar.length; x++) {
    if (bar[x] == ".") {
      decimalCheck = true;
      var decimalPlace = bar.indexOf(".");
    }
  }
  if (bar == "0" || bar == "-0") {
    zeroCheck = true;
  }
  if (zeroCheck == true) {
      bar = document.getElementById("output-bar").innerHTML = number;
    } else if (zeroCheck == false){
        bar = document.getElementById("output-bar").innerHTML;
        if (decimalCheck == true) {
          let beforeDecimal = bar.substring(0, decimalPlace);
          let afterDecimal = bar.substring(decimalPlace + 1);
          afterDecimal += number;
          bar = document.getElementById("output-bar").innerHTML = beforeDecimal + "." + afterDecimal;
        } else if (decimalCheck == false) {
          let temp = bar;
          bar.innerHTML = "";
          temp = temp.replace(/,/g, "");
          temp += number;
          temp = Number(temp).toLocaleString("en");
          bar = document.getElementById("output-bar").innerHTML = temp;
        }
      }
     if (bar.length > 11) {
        alert("OVERFLOW ERROR // KEEP INPUTS TO LESS THAN 9 DIGITS");
        allClear();
      }
    }
    lastIsNumber = true;
    lastIsOperator = false;
    lastIsConstant = false;
    justEquals = false;
  }

function euler() {
  let zeroCheck = false;
  let k = myHistory.length;
  if (lastIsNumber == false) {
  for (let i = 0; i < k; i++) {
    if (myHistory[i] == "=") {
      equalsCheck = true;
    }
  }
    if (bar == "0" || bar == "-0") {
      zeroCheck = true;
    }

    if (lastIsOperator == true && lastIsNumber == false || myHistory == "" || bar == "") {
      if (zeroCheck == false) {
      bar = document.getElementById("output-bar").innerHTML += "2.718281828";
    } else if (zeroCheck == true) {
      bar = document.getElementById("output-bar").innerHTML = "2.718281828";
      }
    }
  lastIsNumber = true;
  lastIsConstant = true;
  lastIsOperator = false;
  }
}


function pi() {
  let zeroCheck = false;
  let k = myHistory.length;
if (lastIsNumber == false) {
  for (let i = 0; i < k; i++) {
    if (myHistory[i] == "=") {
      equalsCheck = true;
    }
  }
  if (bar == "0" || bar == "-0") {
    zeroCheck = true;
  }
  if (lastIsOperator == true && lastIsNumber == false || myHistory == "" || bar == "") {
    if (zeroCheck == false) {
    bar = document.getElementById("output-bar").innerHTML += "3.14159265";
  } else if (zeroCheck == true) {
    bar = document.getElementById("output-bar").innerHTML = "3.14159265";
    }
  }
  lastIsNumber = true;
  lastIsConstant = true;
  lastIsOperator = false;
  justEquals = false;
  }
}

/* 1. I can probably make the constants into one function for efficiency/space
2. These two are giving me trouble with generally being a pain. Find a way to make sure they're being used
for an operator or else they don't work*/

function xSquared() {
let equalsCheck = false;
let k = myHistory.length;
for (let i = 0; i < k; i++) {
  if (myHistory[i] == "=") {
    equalsCheck = true;
  }
}
if (equalsCheck === false) {
  myHistory = document.getElementById("myHistory").innerHTML += "(" + bar + "**2)";
  bar = document.getElementById("output-bar").innerHTML = "";
} else if (equalsCheck === true) {
    myHistory = document.getElementById("myHistory").innerHTML = "(" + bar + "**2)";
    bar = document.getElementById("output-bar").innerHTML = "";
    let equalsPlace = myHistory.indexOf("=");
    let newHistory = myHistory.substring((equalsPlace + 1));
    myHistory = document.getElementById("myHistory").innerHTML = newHistory;
  }
  lastIsConstant = true;

}

function xToTheY() {
let equalsCheck = false;
let k = myHistory.length;
for (let i = 0; i < k; i++) {
  if (myHistory[i] == "=") {
    equalsCheck = true;
  }
}

if (lastIsOperator == false) {
if (equalsCheck === false) {
  myHistory = document.getElementById("myHistory").innerHTML += bar + "**";
  bar = document.getElementById("output-bar").innerHTML = "";
} else if (equalsCheck === true) {
    myHistory = document.getElementById("myHistory").innerHTML += "**";
    bar = document.getElementById("output-bar").innerHTML = "";
    let equalsPlace = myHistory.indexOf("=");
    let newHistory = myHistory.substring((equalsPlace + 1));
    myHistory = document.getElementById("myHistory").innerHTML = newHistory;
  }
  lastIsOperator = true;
  lastIsNumber = false;
  lastIsConstant = false;
  justEquals = false;
  }
}

function operator(operation) {
if (lastIsNumber == true) {
    let equalsCheck = false;
    let k = myHistory.length;
    for (let i = 0; i < k; i++) {
      if (myHistory[i] == "=") {
        equalsCheck = true;
      }
    }
  if (equalsCheck === false) {
    myHistory = document.getElementById("myHistory").innerHTML += (bar + operation);
    bar = document.getElementById("output-bar").innerHTML = "";
  } else if (equalsCheck === true) {
      myHistory = document.getElementById("myHistory").innerHTML += (operation);
      bar = document.getElementById("output-bar").innerHTML = "";
      let equalsPlace = myHistory.indexOf("=");
      let newHistory = myHistory.substring((equalsPlace + 1));
      myHistory = document.getElementById("myHistory").innerHTML = newHistory;
    }
} else if (lastIsOperator == true){
  let lastPlace = myHistory.length;
  let replaceHistory = myHistory.substring(0, (lastPlace-1));
  myHistory = document.getElementById("myHistory").innerHTML = replaceHistory + operation;
  }
  lastIsOperator = true;
  lastIsNumber = false;
  lastIsConstant = false;
  justEquals = false;
}

function allClear() {
  bar = document.getElementById("output-bar").innerHTML = "0";
  myHistory = document.getElementById("myHistory").innerHTML = "";
  lastIsConstant = false;
  lastIsNumber = false;
  lastIsOperator = false;
  justEquals = false;
}

function negate() {
  let minusCheck = false;
  let k = bar.length;
  for (let i = 0; i < k; i++) {
    if (bar[i] == "-") {
      minusCheck = true;
    }
  }

if (minusCheck == false && bar != "") {
  bar = document.getElementById("output-bar").innerHTML = "(-" + bar + ")";
  lastIsConstant = true;
  } else if (minusCheck == true) {
    let parenthesisOut = bar.length - 1;
    let withoutMinus = bar.substring(2, parenthesisOut);
    bar = document.getElementById("output-bar").innerHTML = withoutMinus;
    lastIsConstant = true;
  } else if (bar == "") {
    alert("SYNTAX ERROR // INPUT A NUMBER TO NEGATE IT");
  }
  justEquals = false;
}

function percent() {
bar = bar.toString();
bar = bar.replace(/,/g, "");
bar = bar.replace("(", "");
bar = bar.replace(")", "");
let equals = (Number(bar)/100)
  if (equals > 999) {
      equals = equals.toLocaleString("en");
    }
bar = document.getElementById("output-bar").innerHTML = equals;
justEquals = false;
}

function decimal() {
  let decimalCheck = false;

for (let y = 0; y < bar.length; y++) {
  if (bar[y] === ".") {
    decimalCheck = true;
  }
}
  if (decimalCheck == false && bar !== "") {
    bar = document.getElementById("output-bar").innerHTML += ".";
  } else if (decimalCheck == true) {
    bar = document.getElementById("output-bar").innerHTML += "";
  } else if (decimalCheck == false && bar == "") {
    bar = document.getElementById("output-bar").innerHTML = "0."
  }
}

function equals() {
if (lastIsOperator == false && justEquals == false) {
    myHistory = document.getElementById("myHistory").innerHTML += bar;
    bar = bar.replace(/,/g, "");
    myHistory = myHistory.replace(/,/g, "");
    var equals = eval(myHistory);
    let decimalCheck = false;

  if (equals !== Infinity && equals !== NaN) {
    if (equals > 999999999) {
      equals = (Number(equals).toExponential(8)).toString();
    }

    for (let e; e < equals.length; e++) {
      if (equals[e] == ".") {
        decimalCheck = true;
        var decimalPlace = equals.indexOf(".");
      }
    }
      if (decimalCheck == true) {
        let beforeDecimal = equals.substring(0, decimalPlace);
        let afterDecimal = equals.substring(decimalPlace + 1);
        beforeDecimal = beforeDecimal.toLocaleString("en");
        bar = document.getElementById("output-bar").innerHTML = beforeDecimal + "." + afterDecimal;
      } else if (decimalCheck == false) {
        if (!myHistory.includes("=")) {
        myHistory = document.getElementById("myHistory").innerHTML += "=" + equals.toLocaleString("en");
        bar = document.getElementById("output-bar").innerHTML = equals.toLocaleString("en");
        justEquals = true;
        }
      }
      if (Number(bar) > 999999999) {
        bar.innerHTML = Number.parseFloat(bar).toExponential();
      }
    } else if (equals === Infinity || equals === NaN) {
      alert("SYNTAX ERROR // DIVISION BY 0");
      allClear();
    }
  } else if (justEquals == true || (bar.length == 1 && myHistory == "")) {
    alert("SYNTAX ERROR");
  }
}
