// . You need to write a function findTax() that takes a number type
// variable as an argument which is the salary of a person. You need to calculate 
//the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.
//npm install prompt-sync
const prompt = require('prompt-sync')();
const findTax=(salary)=>{
    if(500000>=salary&&salary>0){
        console.log("then 0% tax on the entire salary.");
    }
    else if(salary > 500000 && salary <= 1000000 ){
        console.log("then 10% tax on the entire salary.");
    }
    else if(salary >1000000 && salary <= 1500000){
        console.log("then 20% tax on the entire salary.");
    }
    else{
        console.log("then 30% tax on the entire salary.");
    }
}

let salary=Number(prompt("Enter the salary:"));
findTax(salary);

