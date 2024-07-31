//. Write a function to perform this. 
//You are given two numbers n1 and n2. 
//You need to find the sum of the products of their corresponding digits.
// So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
const prompt = require('prompt-sync')();
const sumOfProdConsecDigit=function(num1,num2){
    let sum=0;
    while(num1>0&&num2>0){
        let digit1=num1%10;
        let digit2=num2%10;
        sum+=digit1*digit2;
        num1=Math.floor(num1/10);
        num2=Math.floor(num2/10);
    }
    return sum;
}
let num1=Number(prompt("Enter first number="));
let num2=Number(prompt("Enter second number="));
let result=sumOfProdConsecDigit(num1,num2);
console.log(result);

