//const prompt=require()
const prompt = require('prompt-sync')();
function singleDigitSum(num){
    
    let sum=0;
    while(num>0){
        const digit=num%10;
        sum+=digit;
        num=Math.floor(num/10);
    }
    if(sum<10){
        return sum;
    }
    return singleDigitSum(sum);
}

let num=Number(prompt("enter a number:"));
console.log(singleDigitSum(num));

console.log();

let paragraph="sing map() to Transform the Array The map() method is used to transform the students array into a new array of objects with the name and average properties";
let count=paragraph.split(' ');
console.log(`total number of words in the paragraph is: ${count.length}`);


console.log("problem 10");
/* Write a function to reverse a string.
Input - Hello
Outpur - olleH */

let input="hello";
let reversed=input.split('').reverse().join('');
//const ans=reversed.join('');
console.log(reversed);

