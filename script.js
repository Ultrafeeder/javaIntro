//VERY EASY
var num1 = 207;

var num2 = 312;

console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);

//EASY

var name1 = "Ewing";

var name2 = "Muzzio";

nameLength1 = name1.length;
nameLength2 = name2.length;

console.log("The name " + name1 + " is shorter than " + name2 + ` by ${nameLength2 - nameLength1} character.`)

//MEDIUM
function mediumFunction() {
    var userInput = prompt("Say something!");
    if (userInput == userInput.toUpperCase()) {
        alert ("STOP SHOUTING!")
    }
    if (userInput == userInput.toLowerCase()) {
        alert ("...speakup...")
    }
    else {
        alert ("Good talk!")
    }
};
//HARD
function add() {
var add1 = document.getElementById('add1').value;
var add2 = document.getElementById('add2').value;

    document.getElementById('sum').innerHTML = parseInt(add1) + parseInt(add2);
}
function subtract() {
    var sub1 = document.getElementById('sub1').value;
    var sub2 = document.getElementById('sub2').value;
    
        document.getElementById('dif').innerHTML = parseInt(sub1) - parseInt(sub2);
}
function multiply() {
    var mult1 = document.getElementById('mult1').value;
    var mult2 = document.getElementById('mult2').value;
    
        document.getElementById('pro').innerHTML = parseInt(mult1) * parseInt(mult2);
}
function divide() {
    var div1 = document.getElementById('div1').value;
    var div2 = document.getElementById('div2').value;
    
        document.getElementById('quo').innerHTML = parseInt(div1) / parseInt(div2);
}
    
//VERY HARD
function calculator() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var op = document.getElementById('operation').value;
        if (op === "+") { 
            document.getElementById('outcome').innerHTML = parseInt(num1) + parseInt(num2);
     }
     if (op === "-") {
            document.getElementById('outcome').innerHTML = parseInt(num1) - parseInt(num2)
     }
     if (op === "*") {
         document.getElementById('outcome').innerHTML = parseInt(num1) * parseInt(num2)
     }
     if (op === "/") {
         document.getElementById('outcome').innerHTML = parseInt(num1) / parseInt(num2)
     }
 }