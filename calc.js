// Declare variables for use in calculation
let currentVal, newVal, operList;
currentVal = "0";
newVal = "0";
operList = [];
let inp = document.getElementById("inputText");

function initializeCalc() {
  inp.textContent = currentVal;
  newVal = "0";
  currentVal = "0";
}

function numberInput(n){
  if (currentVal === "0"){
    currentVal = n.toString();
  } else if (currentVal.length >= 7){
    alert("Too many numbers!");
  } else {
    currentVal = currentVal.concat(n.toString());
  }
}


initializeCalc();
