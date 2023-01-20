// Level 1
console.log("== Level 1 ==");
let userAge = parseInt(prompt("Enter your age"));
if (userAge >= 18) {
    console.log("You are old enough to drive");
} else {
    console.log(`You are left with ${18 - userAge} years to drive`);
}
console.log("====");
let yourAge = parseInt(prompt("Enter your age:"));
let myAge = 27;
if (myAge > yourAge) {
    console.log(`I'm ${myAge - yourAge} years older than you`);
} else {
    console.log(`You are ${yourAge - myAge} years older than me`);
}
console.log("====");
let a = 4;
let b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${b} is greater thant ${a}`);
}
console.log(a > b ? `${a} is greater than ${b}` : `${b} is greater thant ${a}`);
console.log("====");
let numb = parseInt(prompt("Enter a number"));
if (numb % 2 === 0) {
    console.log(`${numb} is an even number`);
} else {
    console.log(`${numb} is an odd number`);
}
// Level 2
console.log("== Level 2 ==");
let score = 75;
let grade;
switch (score) {
    case score >= 80 && score <= 100:
        grade = "A";
        break;
    case score >= 70 && score <= 89:
        grade = "B";
        break;
    case score >= 60 && score <= 69:
        grade = "C"
        break;
    case score >= 50 && score <= 59:
        grade = "D";
        break;
    case score >= 0 && score <= 49:
        grade = "F";
        break;
    default:
        grade = "F";
        console.error("Not a valid score");
}
console.log(`Your grade ${grade}`);
console.log("====");
let month = prompt("Write the month").toLowerCase();
switch (month) {
    case "september":
    case "october":
    case "november":
        console.log("Is Autumn");
        break;
    case "december":
    case "january":
    case "february":
        console.log("Is Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("Is Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("Is Summer");
        break;
    default:
        console.error("not a valid month");
}
console.log("====");
let day = prompt("Write the day of the week").toLowerCase();
switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        day = day.charAt(0).toUpperCase() + day.slice(1);
        console.log(`${day} is a working day.`);
        break;
    case "saturday":
    case "sunday":
        day = day.charAt(0).toUpperCase() + day.slice(1);
        console.log(`${day} is a weekend.`);
        break;
    default:
        console.error("Not a day of the week");
}
// Level 3
console.log("== Level 3 ==");
let pickedMonth = prompt("Enter a mont:").toLowerCase();
let year = parseInt(prompt("Enter a year:"));
if (pickedMonth === "april" || pickedMonth === "june" || pickedMonth === "september" || pickedMonth === "november") {
    pickedMonth = pickedMonth.charAt(0).toUpperCase() + pickedMonth.slice(1);
    console.log(`${pickedMonth} has 30 days`);
} else if (pickedMonth === "january" || pickedMonth === "march" || pickedMonth === "may" || pickedMonth === "july" || pickedMonth === "august" || pickedMonth === "october" || pickedMonth === "december") {
    pickedMonth = pickedMonth.charAt(0).toUpperCase() + pickedMonth.slice(1);
    console.log(`${pickedMonth} has 31 days`);
} else if (pickedMonth === "february") {
    pickedMonth = pickedMonth.charAt(0).toUpperCase() + pickedMonth.slice(1);
    console.log(`${pickedMonth} has 28 days`);
} else {
    console.error("not a valid month");
}

if (pickedMonth === "april" || pickedMonth === "june" || pickedMonth === "september" || pickedMonth === "november") {
    pickedMonth = pickedMonth.charAt(0).toUpperCase() + pickedMonth.slice(1);
    console.log(`${pickedMonth} has 30 days`);
} else if (pickedMonth === "january" || pickedMonth === "march" || pickedMonth === "may" || pickedMonth === "july" || pickedMonth === "august" || pickedMonth === "october" || pickedMonth === "december") {
    pickedMonth = pickedMonth.charAt(0).toUpperCase() + pickedMonth.slice(1);
    console.log(`${pickedMonth} has 31 days`);
} else if (pickedMonth === "february") {
    pickedMonth = pickedMonth.charAt(0).toUpperCase() + pickedMonth.slice(1);

    let isLeap = false;

    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        isLeap = true;

    console.log(`${pickedMonth} has ${isLeap ? 29 : 28} days`);
} else {
    console.error("not a valid month");
}