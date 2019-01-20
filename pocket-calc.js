let bar;
let myHistory;
let lastChar;
let z;
let lastIsOperator;
let lastIsNumber;
let lastIsConstant;
/*Need to add to calculator:
Scientific notation and commas for numbers that are too large
*/

function setup() {
  bar = document.getElementById("output-bar");
  myHistory = document.getElementById("myHistory");
  lastChar = "";
  allClear();
  lastIsNumber = false;
  lastIsOperator = false;
  lastIsConstant = false;
  /*Need to add to calculator:
  Scientific notation and commas for numbers that are too large
  */
  }

function number(number) {
  let zeroCheck = false;
  let equalsCheck = false;
  let k = myHistory.length;
if (lastIsConstant == false) {
  for (let i = 0; i < k; i++) {
    if (myHistory[i] == "=") {
      equalsCheck = true;
    }
  }
  if (bar == "0" || bar == "-0") {
    zeroCheck = true;
  }
  console.log("Bar check 0, shouldn't have any problems yet " + bar);
  if (zeroCheck == true) {
      bar = document.getElementById("output-bar").innerHTML = number;
    } else if (zeroCheck == false){
        /*console.log("Bar check  0 part 2, shouldn't have any problems yet " + bar);
        console.log("Bar check 1, should have commas " + bar);
        let temp = bar.replace(/,/g, );
        console.log("Bar check 2, should not have commas " + bar);
        temp += number;
        console.log("Bar check 3, should not have commas and should have next number " + bar);
        console.log(temp)
        bar.innerHTML = temp.toLocaleString("en");
        console.log("Bar check 4, should be full number with commas " + bar);*/
        bar = document.getElementById("output-bar").innerHTML;
        let temp = bar.innerHTML;
        bar.innerHTML = "";
        temp = temp.replace(/,/g, "")
        temp += number;
        bar = document.getElementById("output-bar").innerHTML = temp.toLocaleString("en");
       if (bar.length > 9) {
        //scientific notation here
      }
    }
    lastIsNumber = true;
    lastIsOperator = false;
  }
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

  if (lastIsOperator == true && lastIsNumber == false || myHistory == "") {
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
console.log("LastIsOperator " + lastIsOperator);
  if (lastIsOperator == true && lastIsNumber == false || myHistory == "") {
    if (zeroCheck == false) {
    bar = document.getElementById("output-bar").innerHTML += "3.14159265";
  } else if (zeroCheck == true) {
    bar = document.getElementById("output-bar").innerHTML = "3.14159265";
    }
  }
  lastIsNumber = true;
  lastIsConstant = true;
  lastIsOperator = false;
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
}

function allClear() {
  bar = document.getElementById("output-bar").innerHTML = "0";
  myHistory = document.getElementById("myHistory").innerHTML = "";
  lastIsConstant = false;
  lastIsNumber = false;
  lastIsOperator = false;
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
}

function percent() {
bar = bar.replace(/,/g, "");
let equals = (Number(bar)/100).toLocaleString("en");
bar = document.getElementById("output-bar").innerHTML = equals;
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
if (lastIsOperator == false) {
    myHistory = document.getElementById("myHistory").innerHTML += bar;
    bar = bar.replace(/,/g, "");
    myHistory = myHistory.replace(/,/g, "");
    console.log(myHistory);
  let equals = eval(myHistory);
   if (equals === Infinity || equals === NaN) {
      alert("SYNTAX ERROR // DIVISION BY 0");
  } if (equals > 999999999) {
    equals = (Number(equals).toExponential(8)).toString();
  }

  bar = document.getElementById("output-bar").innerHTML = equals.toLocaleString("en");
  myHistory = document.getElementById("myHistory").innerHTML += "=" + equals.toLocaleString("en");
  }
}
