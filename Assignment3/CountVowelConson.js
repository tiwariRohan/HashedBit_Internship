// 
const prompt = require('prompt-sync')();
function countVowelAndConsonant(str){
    const vowel=['a','e','i','o','u'];

    let vowelcount=0;
    let consonatcount=0;
    let lowerStr = str.toLowerCase();
    for(let char of lowerStr){
        if(vowel.includes(char))
            vowelcount++;
        else if(char >= 'a' && char <= 'z') 
            consonatcount++;
    }

    return {
        vowels: vowelcount,
        consonants: consonatcount
    };
}

let inputString= "This is an example string to count vowels and consonants.";

let counts=countVowelAndConsonant(inputString);

console.log(`Number of vowels: ${counts.vowels}`);
console.log(`Number of Conso: ${counts.consonants}`)

//replace wrong with right string
function replac(input,wrong,right){
    let str=input.replace(wrong,right);
    return str;
}

let input="my nsne is rhn";
let ans=replac(input,"nsne","name");
console.log(ans);

let arr=[1,2,3,4,,5,6,7,8,9];
let result=arr.filter(num=>num>5);
console.log(result);



/* 7th ques */
console.log();
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
    ];

    const output=students.map(student=>{
        const totalScore=student.scores.reduce((sum,score)=>sum+score,0);

        const average=totalScore/student.scores.length;

        return{
            name:student.name,
            average:average
        };
    });

    console.log(output);