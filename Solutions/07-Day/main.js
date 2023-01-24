// 1. Declare a function fullName and it print out your full name.
function fullName() {
    console.log("Victor Cortes");
}

fullName();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(fullName2("Victor", "Cortes"));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 5));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(height, width) {
    return height * width;
}

console.log(areaOfRectangle(10, 20));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(width, height) {
    return (width + height) * 2;
}

console.log(perimeterOfRectangle(20, 10));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}

console.log(volumeOfRectPrism(10, 10, 10));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

console.log(areaOfCircle(10));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
}

console.log(circumOfCircle(5));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => mass / volume;
console.log(density(10, 5.45));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, speed.
const speed = (distance, time) => distance / time;
console.log(speed(100, 2));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const getWeight = (mass) => mass * 9.81;
console.log(getWeight(180));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelsiusToFahrenheit.
const toFahrenheit = (celsius) => celsius * (9 / 5) + 32;
console.log(toFahrenheit(30));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
const bmi = (weight, height) => weight / (height * height);
let bodyMass = bmi(128, 1.81);
if (bodyMass < 18.49)
    console.log("Underweight");
else if (bodyMass > 18.50 && bodyMass < 24.99)
    console.log("Normal");
else if (bodyMass > 25.0 && bodyMass < 29.99)
    console.log("Overweight");
else if (bodyMass > 30.0)
    console.log("Obese");
else
    console.log("error");

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    switch (month) {
        case "september":
        case "october":
        case "november":
            return "Autumn";
        case "december":
        case "january":
        case "february":
            return "Winter";
        case "march":
        case "april":
        case "may":
            return "Spring";
        case "june":
        case "july":
        case "august":
            return "Summer";
        default:
            console.error("not a valid month");
    }
}

console.log(checkSeason("january"));

function findMax(a, b, c) {
    if (a > b && a > c)
        return a;
    if (b > a && b > c)
        return b;
    if (c > a && c > b)
        return c;
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

// Level 2

// 1. Linear equation is calculated as follows: ax + by + c = 0.
// Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation() {
    // calculate slope y2-y1 / x2-x1
}

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0.
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c) {
    let xValues = [];

    if (typeof a === "undefined" || typeof b === "undefined" || typeof c === "undefined") {
        xValues[0] = 0;
        return xValues;
    }

    xValues[0] = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    xValues[1] = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    return xValues;
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

printArray(["a", "b", "c", 1, 2, 3, 4, 5, "d"]);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
}

console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    let tmp = x;
    x = y;
    y = tmp;
    return [x, y];
}

console.log(swapValues(3, 4));

// 6. Declare a function name reverseArray.
// It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', "C"]));

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
    let capitalizedArray = [];
    for (const arrayElement of array) {
        capitalizedArray.push(arrayElement.toUpperCase());
    }
    return capitalizedArray;
}

console.log(capitalizeArray(["asd", "qwe", "zxc", "v"]));

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
    let array = [];
    array.push(item);
    return array;
}

console.log(addItem(12));

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let array = ["asd", "qwe", "wer", "ert"];

function removeItem(index) {
    delete array[index];
}

removeItem(2);
console.log(array);

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers() {
    let sum = 0;
    for (const argument of arguments) {
        sum += argument;
    }
    return sum;
}

console.log(sumOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds() {
    let sum = 0;
    for (const argument of arguments) {
        if (argument % 2 !== 0)
            sum += argument;
    }
    return sum;
}

console.log(sumOfOdds(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven() {
    let sum = 0;
    for (const argument of arguments) {
        if (argument % 2 === 0)
            sum += argument;
    }
    return sum;
}

console.log(sumOfEven(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 13. Declare a function name evensAndOdds .
// It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
    let even = 0;
    let odds = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0)
            even++;
        else
            odds++;
    }
    console.log(`The number of odds are ${odds}`);
    console.log(`The number of evens are ${even}`);
}

evensAndOdds(100);

// 14. Write a function which takes any number of arguments and return the sum of the arguments
console.log(sumOfNumbers(1, 2, 3));
console.log(sumOfNumbers(1, 2, 3, 4));

// 15. Write a function which generates a randomUserIp.
function randomUserIp(){
    let ip = [];
    while (ip.length < 4){
        ip.push(Math.floor(Math.random() * 255))
    }
    return ip.join(".");
}
console.log(randomUserIp());