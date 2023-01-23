const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}
i = 0;
do {
    console.log(i);
    i--;
} while (i >= 0);

// 3. Iterate 0 to n using for loop
let n = 100;
for (let i = 0; i < n; i++) {
    console.log(i);
}

// 4. Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
for (let x = 0; x < 8; x++) {
    let string = "";
    for (let y = 0; y < x; y++) {
        string += "#";
    }
    console.log(string);
}

// 5. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let i = 0; i < 11; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// 6. Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
console.log("i\ti^2\ti^3");
for (let i = 0; i < 11; i++) {
    console.log(`${i}\t${Math.pow(i, 2)}\t${Math.pow(i, 3)}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0)
        console.log(i);
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0)
        console.log(i);
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
        console.log(num);
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0)
        sumEvens += i;
    else
        sumOdds += i;
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sums = [0, 0];
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0)
        sums[0] += i;
    else
        sums[1] += i;
}
console.log(sums);

// 13. Develop a small script which generate array of 5 random numbers
let randomNum = [];
for (let i = 0; i < 5; i++) {
    randomNum.push(Math.floor(Math.random() * 10));
}
console.log(randomNum);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomNumUnique = [];
do {
    let currentNumber = Math.floor(Math.random() * 10);
    if (!randomNumUnique.includes(currentNumber))
        randomNumUnique.push(currentNumber);
} while (randomNumUnique.length < 5);
console.log(randomNumUnique);

// 15. Develop a small script which generate a six characters random id: 5j2khz
let randomCharacters = [];
while (randomCharacters.length <= 6) {
    randomCharacters.push(String.fromCharCode(Math.floor(Math.random() * 79) + 48));
}
console.log(randomCharacters.join(""));

// Level 2
// 1. Develop a small script which generate any number of characters random id:
let string = "";
while (string.length < 10) {
    string += String.fromCharCode(Math.floor(Math.random() * 79) + 48);
}
console.log(string);
// 2. Write a script which generates a random hexadecimal number.
let randomHex = "#";
for (let i = 0; i < 3; i++) {
    randomHex += (Math.floor(Math.random() * 255)).toString(16);
}
console.log(randomHex);

// 3. Write a script which generates a random rgb color number.
let rgb = [];
while (rgb.length < 3) {
    rgb.push(Math.floor(Math.random() * 255));
}
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);

// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let uppercaseCountries = [];
for (let i = 0; i < countries.length; i++) {
    uppercaseCountries.push(countries[i].toUpperCase());
}
console.log(uppercaseCountries);

// 5. Using the above countries array, create an array for countries length.
let countriesLengthArray = [];
for (let i = 0; i < countries.length; i++) {
    countriesLengthArray.push(countries[i].length);
}
console.log(countriesLengthArray);

// 6. Use the countries array to create the following array of arrays:
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
// ]
let countriesInitialArray = [];
for (let i = 0; i < countries.length; i++) {
    countriesInitialArray.push([
        countries[i],
        countries[i].toUpperCase().substring(0, 3),
        countries[i].length
    ]);
}
console.log(countriesInitialArray);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let landCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
        landCountries.push(countries[i]);
    }
}
if (landCountries.length > 0) {
    console.log(landCountries);
} else {
    console.log("All these countries are without land");
}

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let iaCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].substring(countries[i].length / 2).includes("ia")) {
        iaCountries.push(countries[i]);
    }
}
if (iaCountries.length > 0) {
    console.log(iaCountries)
} else {
    console.log("These are countries ends without ia");
}

// 9. Using the above countries array, find the country containing the biggest number of characters.
let longestCountry = 0;
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > countries[longestCountry].length)
        longestCountry = i;
}
console.log(countries[longestCountry]);

// 10. Using the above countries array, find the country containing only 5 characters.
let fiveCharCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5)
        fiveCharCountries.push(countries[i]);
}
console.log(fiveCharCountries);

// 11. Find the longest word in the webTechs array
let longestTech = 0;
for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > webTechs[longestTech].length)
        longestTech = i;
}
console.log(webTechs[longestTech]);

// 12. Use the webTechs array to create the following array of arrays:
let webTechSize = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechSize.push([
        webTechs[i],
        webTechs[i].length
    ]);
}
console.log(webTechSize);

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mern = [];
for (let i = 0; i < mernStack.length; i++) {
    mern.push(mernStack[i].toUpperCase()[0]);
}
console.log(mern);

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (const tech of webTechs) {
    console.log(tech);
}

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruitArray = ['banana', 'orange', 'mango', 'lemon'];
let last = fruitArray.length - 1;
for (let k = 0; k < fruitArray.length / 2; ++k) {
    let tmp = fruitArray[k];
    fruitArray[k] = fruitArray[last - k];
    fruitArray[last - k] = tmp;
}
console.log(fruitArray);

// Level 3
// Copy countries array(Avoid mutation)