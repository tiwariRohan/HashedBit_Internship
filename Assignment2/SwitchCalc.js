// . Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
//npm install prompt-sync
const prompt = require('prompt-sync')();
function calculator(a, b, operator) {
switch(operator){
    case '+':
        console.log("sum of"+a+"&"+b+"="+(a+b));
        break;

    case '-':
        console.log("difference of"+a+"&"+b+"="+(a-b));
        //console.log(`Sum of ${a} & ${b} = ${a + b}`);
        break;

    case '*':
        console.log("product of"+a+"&"+b+"="+(a*b));
        break;

    case '/':
        console.log("division of"+a+"&"+b+"="+(a/b));
        break;
        
    default:
        console.log("invalid exprression") ;
        
}
}

var a=Number(prompt("Enter Frist number:"));
var b=Number(prompt("Enter Second number:"));
var expression=prompt("enter the operator:");

calculator(a,b,expression);

