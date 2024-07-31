let states = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal"

];

function filterVowel(names){
    const vowel=['a','e','i','o','u'];
    return vowel.includes(names[0].toLowerCase());
}

const new_stateArray=states.filter(word=>!filterVowel(word));
console.log(new_stateArray);

console.log("Problem Number 2nd of assignment3");
/* Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this. */

let string= 'I love my India';
let str=string.split(" ");

console.log(str.reverse().join(' '));
// question 3 INDIA TO INDONESIA
console.log("Problem Number 3rd of assignment3");
let string1='INDIA';
let array=string1.split('');
array.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
console.log(array.join());





