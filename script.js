//VERY EASY
var num1 = 207;

var num2 = 312;

console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);

//EASY

var name1 = "Gary";

var name2 = "Garth";

var nameLength1 = name1.length;
var nameLength2 = name2.length;


if (nameLength1 > nameLength2) {
    var comparison = "longer";
} else {
    var comparison = "shorter";
}

var difference = Math.abs(nameLength1 - nameLength2);


console.log("The name " + name1 + " is " + comparison + " than " + name2 + " by " + difference + " character(s).")

//MEDIUM
function mediumFunction() {
    var userInput = prompt("Say something!");
    if (userInput == userInput.toUpperCase()) {
        alert ("STOP SHOUTING!")
    } else if (userInput == userInput.toLowerCase()) {
        alert ("...speakup...")
    } else {
        alert ("Good talk!")
    }
};
//HARD
function add() {
var add1 = Number(document.getElementById('add1').value);
var add2 = Number(document.getElementById('add2').value);

    document.getElementById('sum').innerHTML = add1 + add2;
}
function subtract() {
    var sub1 = Number(document.getElementById('sub1').value);
    var sub2 = Number(document.getElementById('sub2').value);
    
        document.getElementById('dif').innerHTML = sub1 - sub2;
}
function multiply() {
    var mult1 = Number(document.getElementById('mult1').value);
    var mult2 = Number(document.getElementById('mult2').value);
    
        document.getElementById('pro').innerHTML = mult1 * mult2;
}
function divide() {
    var div1 = Number(document.getElementById('div1').value);
    var div2 = Number(document.getElementById('div2').value);
    
        document.getElementById('quo').innerHTML = div1 / div2;
}
    
//VERY HARD
function calculator() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var op = document.getElementById('operation').value;
       if (op === "+") { 
            document.getElementById('outcome').innerHTML = num1 + num2;
     } else if (op === "-") {
           document.getElementById('outcome').innerHTML = num1 - num2;
     } else if (op === "*") {
           document.getElementById('outcome').innerHTML = num1 * num2;
     } else if (op === "/") {
           document.getElementById('outcome').innerHTML = num1 / num2;
     } else {
            document.getElementById('outcome').innerHTML = "Please enter valid operator!"
    }
}
 
//VERY HARD (PROMPT)

function calcPrompt() {
    var promptNum1 = Number(prompt("First Number"));
    var promptOp = prompt("+ - * /");
    var promptNum2 = Number(prompt("Second number"));
        if (promptOp === "+") {
         console.log(promptNum1 + "+" + promptNum2 + "=" + (`${promptNum1 + promptNum2}`));
        } else if (promptOp === "-") {
            console.log(promptNum1 + "-" + promptNum2 + "=" + (`${promptNum1 - promptNum2}`));
        } else if (promptOp === "*") {
            console.log(promptNum1 + "*" + promptNum2 + "=" + (`${promptNum1 * promptNum2}`));
        } else if (promptOp === "/") {
            console.log(promptNum1 + "/" + promptNum2 + "=" + (`${promptNum1 / promptNum2}`));
        } else {
            alert("Please use Valid Operater!")
    }
}