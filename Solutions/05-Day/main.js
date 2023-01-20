// 1. Declare an empty array;
let anArray = [];
// 2. Declare an array with more than 5 number of elements
let numArray = [0, 1, 2, 3, 4, 5, 6, 7];
// 3. Find the length of your array
console.log(numArray.length);
// 4. Get the first item, the middle item and the last item of the array
console.log(numArray[0]);
console.log(numArray[numArray.length / 2]);
console.log(numArray[numArray.length - 1]);
// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["string", 10, ' ', new Date(), "hu?", {lat: 10, lng: 25}];
console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
];
// 7. Print the array using console.log()
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);
// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}
// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
}
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(", ")} are big IT companies`);
// 13. Check if a certain company exists in the itCompanies array. If it exists return the company else return a company is not found
if (itCompanies.includes("FACEBOOK")) {
    console.log(itCompanies.at("FACEBOOK"));
} else {
    console.log("not found");
}
// 14. Filter out companies which have more than one 'o' without the filter method
let filteredArray = [];
for (let i = 0; i < itCompanies.length; i++) {
    let a = itCompanies[i].match(/O/g);
    if (a === null || a.length < 2) {
        filteredArray.push(itCompanies[i]);
    }
}
console.log(filteredArray);
// 15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);
// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(3));
// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, itCompanies.length - 3));
// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(0, itCompanies.length / 2), itCompanies.slice(itCompanies.length / 2, itCompanies.length - 1));
// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);
// 21. Remove the middle IT company or companies from the array
itCompanies.pop(itCompanies.length / 2);
console.log(itCompanies);
// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
// 23. Remove all IT companies
itCompanies = [];
console.log(itCompanies);

// Level 2
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries);
console.log(webTechs);
// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/\./g, "");
text = text.replace(/,/g, "");
let words = text.split(" ");
console.log(words);
console.log(words.length);
// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.indexOf("Meat") === -1)
    shoppingCart.unshift("Meat");
// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.indexOf("Sugar") === -1)
    shoppingCart.push("Sugar");
// remove 'Honey' if you are allergic to honey
let honeyIndex = shoppingCart.indexOf("Honey");
delete shoppingCart[honeyIndex];
let teaIndex = shoppingCart.indexOf("Tea");
shoppingCart.at[teaIndex] = "Green Tea";

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.indexOf("Ethiopia") !== -1) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia");
}
console.log(countries);
// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.indexOf("Sass") !== -1) {
    console.log("Sass is a CSS preprocess");
} else {
    webTechs.push("Sass");
}
console.log(webTechs);
// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
ages.sort();
console.log(`min: ${ages[0]}, max: ${ages[ages.length - 1]}`);
// Find the median age(one middle item or two middle items divided by two)
console.log(`median: ${ages[ages.length / 2]}`);
// Find the average age(all items divided by number of items)
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(`average: ${sum / ages.length}`);
// Find the range of the ages(max minus min)
console.log(`range: ${ages[ages.length - 1] - ages[0]}`);
// 1. Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));
// 2. Find the middle country(ies) in the countries array
console.log(countries.slice(Math.ceil(countries.length / 2), Math.floor(countries.length / 2)));
// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalf = [];
let secondHalf = [];
for (let i = 0; i < countries.length; i++) {
    if (i % 2 === 0)
        secondHalf.push(countries[i]);
    else
        firstHalf.push(countries[i]);
}
console.log(firstHalf, secondHalf);