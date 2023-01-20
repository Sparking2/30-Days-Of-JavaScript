// Level 1
console.log("Level 1");

let firstName = "Victor";
let lastName = "Cortes";
let country = "Mexico";
let city = "Zapopan";
let age = 27;
let isMarried = false;
let year = 2023;

console.log(typeof firstName === typeof "string");
console.log(typeof "10" == typeof 10);
console.log(parseInt("9.8") === 10);
// Truthy
// 1
// true
// "isTrue"

// Falsy
// 0
// false
// ""

console.log(4 > 3); // true;
console.log(4 >= 3); // true;
console.log(4 < 3); // false;
console.log(4 <= 3); // false;
console.log(4 == 4); // true;
console.log(4 === 4); // true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != '4'); //false
console.log(4 == '4'); // true
console.log(4 === '4'); //false
console.log("python".length !== "jargon".length);
console.log("====");
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
console.log(!"dragon".includes("on") && !"python".includes("on")) // false?
console.log("====");
let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(Date.now());

// Level 2
console.log("Level 2");
console.log("====");
let triangleBase = prompt("Base of triangle");
let triangleHeight = prompt("Height of triangle");
console.log(`The area of the triangle is ${0.5 * triangleBase * triangleHeight}`);
console.log("====");
let triangleSideA = parseInt(prompt("Side A triangle"));
let triangleSideB = parseInt(prompt("Side B triangle"));
let triangleSideC = parseInt(prompt("Side C triangle"));
console.log(`The perimeter of the triangle is ${triangleSideA + triangleSideB + triangleSideC}`);
console.log("====");
let rectangleLength = parseFloat(prompt("Rectangle Length"));
let rectangleHeight = parseFloat(prompt("Rectangle Height"));
console.log(`The area of the rectangle is ${rectangleHeight * rectangleLength}`);
console.log(`The perimeter of the rectangle is ${2 * (rectangleHeight + rectangleLength)}`);
console.log("====");
let circleRadius = parseFloat(prompt("Circle Radius"));
console.log(`The area of the circle is ${3.14 * circleRadius * circleRadius}`);
console.log(`The circumference of the circle is ${2 * 3.14 * circleRadius}`);
console.log("====");
let xIntercept = (2) / 2;
let yIntercept = -2;
console.log(`Intercept x: (${xIntercept},0) Intercept y: (0,${yIntercept})`);
let slope = (10 - 2) / (6 - 2);
console.log(`Slope is ${slope}`);
console.log("====");
let x = -3;
let y = Math.pow(x, 2) + (6 * x) + 9;
console.log(`Y value at X: ${x}? = ${y}`);
console.log("====");
let hours = parseFloat(prompt("Enter hours:"));
let ratePerHour = parseFloat(prompt("Enter rate per hour:"));
console.log(`Your weekly earning is ${hours * ratePerHour}`);
console.log("====");
let message = firstName.length > 7
    ? "your name is long"
    : "your name is short";
console.log(message);
console.log("====");
console.log(`Your first name, ${firstName} is ${firstName.length > lastName.length ? "longer" : "shorter"} than your family name, ${lastName}`);
console.log("====");
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);
console.log("====");
let birthYear = parseInt(prompt("Enter birth year:"));
let userAge = new Date().getFullYear() - birthYear;
console.log(`You are ${userAge}. ${userAge >= 18 ? "You are old enough to drive" : `You will be allowed to drive after ${18 - userAge} years.`}`);
console.log("====");
let maxLife = parseInt(prompt("Enter number of years you live:"));
console.log(`You lived ${(60 * 60 * 24 * 365 * maxLife)} seconds`);
console.log("====");
let date = new Date();
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`);
console.log(`${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
console.log(`${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
console.log("====");
console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()} ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`);
