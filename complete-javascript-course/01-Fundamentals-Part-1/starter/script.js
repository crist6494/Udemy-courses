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
x *= 4   //x = x *
x++;     //x = x + 1
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageCristian); // >, <, >=, <= 
console.log(ageCristian >= 19);

const fullAge = ageCristian >= 19;
console.log(now - 1991 > now - 2018);*/

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