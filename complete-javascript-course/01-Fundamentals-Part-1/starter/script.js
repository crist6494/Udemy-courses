/*//////////////////////////////////
//-----Linking a JavaScript File------//

let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
//-----Values and Variables------//

console.log("Jonas");
console.log(23);

let firstName = "Cristian";

console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);

/////////////////////////////////////
//-----Exercise 1------//

let country = "Spain";
let continent = "Europe";
let population = 47000000;
console.log(country);
console.log(continent);
console.log(population);

//////////////////////////////////////
//-----Data Types------//

let javascritIsFun = true;
console.log(javascritIsFun);

console.log(typeof javascritIsFun);
//console.log(typeof 23);
//console.log(typeof "cristian");

javascritIsFun = "YES!";
console.log(typeof javascritIsFun);

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(typeof year)

console.log(typeof null)

/////////////////////////////////////
//-----Let, var, const------//

let age = 30;
age = 31;

const birthday= 2003;
//birthday = 2000;
//const job;

var job = "programmer";
job = "teacher";

////////////////////////////////////////
//-----Basic Operators------//

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageCristian = now - 2018;
console.log(ageJonas, ageCristian);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3  2 to the power of 3 = 2 * 2 * 2

const firstName = "Cristian";
const lastName = "Morales";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; //x = x + 10
x *= 4   //x = x * 4
x++;     //x = x + 1
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageCristian); // >, <, >=, <= 
console.log(ageCristian >= 19);

const fullAge = ageCristian >= 19;
console.log(now - 1991 > now - 2018);

/////////////////////////////////////////////
//-----Operator Precedence------//

const now = 2037;
const ageJonas = now - 1991;
const ageCristian = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5; //x = y = 10
console.log(x,y);

const averageAge = (ageJonas + ageCristian) / 2;
console.log(ageJonas, ageCristian, averageAge)

///////////////////////////////////////////////////
/-----Coding Challenge #1-----/

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall

//Data 1
//let massMark = 78;
//let heightMark = 1.69;
//let massJohn = 92;
//let heightJohn = 1.95; 

//Data 2
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

const MBIMark = massMark / heightMark ** 2;
const MBIJohn = massJohn / (heightJohn * heightJohn);
console.log(MBIMark,MBIJohn);

const markHigherBMI = MBIMark > MBIJohn;
console.log(markHigherBMI)

/////////////////////////////////////////////////////////////
//-----Strings and Template Literals------//

const firstName = "Cristian";
const job = "programmer";
const birthYear = 2003;
const year = 2022;

const cristian = "I'm " + firstName + ", a " + (year - birthYear) + 
" years old " + job + "!";
console.log(cristian)

const cristianTemplateLiteral = `I'm ${firstName}, a ${year - 
birthYear} years old ${job}!`
console.log(cristianTemplateLiteral)

console.log(`Just a regular string ...`)

console.log("String with \n\
mulitple\n\
lines");

console.log(`String with 
mulitple
lines`);

////////////////////////////////////////////////////////////////////
//-----Taking decisions: if/else Statements------//

const age = 15;

if(age >= 18){
	console.log("Sarah can start driving license 🚗")
}else{
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young, Wait another ${yearsLeft} years :)`)
}

const birthYear = 2003;
let century;

if(birthYear <= 2000){
	century = 20;
}else{
	century = 21;
}
console.log(century);

//////////////////////////////////////////////////////////////////////
//-----Coding Challenge #2-----//

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 

//Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95; 

//Data 2
//let massMark = 95;
//let heightMark = 1.88;
//let massJohn = 85;
//let heightJohn = 1.76; 

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark,BMIJohn);

if(BMIMark > BMIJohn){;
	console.log(`Mark's BMI ${BMIMark} is higher than John's${BMIJohn}!`)
}else{
	console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}

///////////////////////////////////////////////////////////////////////////
//-------Type conversion and coercion-------//

//Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type coersion
console.log("I 'am " + 23 + " years old");
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

////////////////////////////////////////////////////////////////////////////
//-------Truthy and Falsy Values-------//

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////////////////////////////////////////////
//-----Equality Operators: == vs. ===-----//

const age = "18";
if(age === 18) console.log("You just became an adult :D (strict equal");

if(age == 18) console.log("You just became an adult :D (loose equal)")


const favourite = Number(prompt("What's your favouite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){  
	console.log("Cool! 23 is amazing number!");
}else if(favourite === 7){
	console.log("7 is also a cool number");
}else if(favourite === 9){
	console.log("9 is also a cool number");
}else{
	console.log("Number is not 23 or 7 or 9");
}

if(favourite !== 23) console.log("Why not 23?")*/

////////////////////////////////////////////////////////////////////////////
//-------Logical Operators-------//

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

//if(shouldDrive){
	//console.log("Sarah is able to drive!")
//}else{
	//console.log("Someone else should drive...")
//}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
	console.log("Sarah is able to drive!")
}else{
	console.log("Someone else should drive...")
}