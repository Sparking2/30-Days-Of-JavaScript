const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [{product: 'banana', price: 3}, {product: 'mango', price: 6}, {
    product: 'potato',
    price: ' '
}, {product: 'avocado', price: 8}, {product: 'coffee', price: 10}, {product: 'tea', price: ''},];
// 1. Explain the difference between forEach, map, filter, and reduce.
// forEach, iterates through each element and does something with it with the callback
// map, iterates through each element, modifies it in some way and returns a new array with the modified values
// filter, filters out elements that does not fulfill the condition in the callback
// reduce, iterates through each element, and has the function to "do something" with the current element and also has a accumulator variable

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
const forCallback = element => {
    console.log(element);
}
let forArray = ["A", "B", "C", "D", "E"];
forArray.forEach(forCallback);

// 3. Use forEach to console.log each country in the countries array.
countries.forEach((element) => {
    console.log(element);
});

// 4. Use forEach to console.log each name in the names array.
names.forEach((element) => {
    console.log(element);
});

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach(element => {
    console.log(element);
})

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
let uppercaseCountries = countries.map(country => country.toUpperCase());
console.log(uppercaseCountries);

// 7. Use map to create an array of countries length from countries array.
let countriesLength = countries.map(country => country.length);
console.log(countriesLength);

// 8. Use map to create a new array by changing each number to square in the numbers array
let squareNumbers = numbers.map(number => number * number);
console.log(squareNumbers);

// 9. Use map to change to each name to uppercase in the names array
let namesUppercase = names.map(name => name.toUpperCase());
console.log(namesUppercase);

// 10. Use map to map the products array to its corresponding prices.
let prices = products.map(product => {
    {
    }
});

// 11. Use filter to filter out countries containing land.
let landCountries = countries.filter(country => country.includes("land") || country.includes("Land"));
console.log(landCountries);

// 12. Use filter to filter out countries having six character.
let sixCharCountries = countries.filter(country => country.length === 6);
console.log(sixCharCountries);

// 13. Use filter to filter out countries containing six letters and more in the country array.
let sixOrMoreCharCountries = countries.filter(country => country.length >= 6);
console.log(sixOrMoreCharCountries);

// 14. Use filter to filter out country start with 'E';
let startsWithECountries = countries.filter(country => country.startsWith("E"));
console.log(startsWithECountries);

// 15. Use filter to filter out only prices with values.
let productsWithPrice = products.filter(product => typeof product.price === "number");
console.log(productsWithPrice);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (array) => {
    return array.filter(item => typeof item === "string");
}
console.log(getStringLists([1, 2, 3, 5, "asd", "qwer", 123, "zxc"]));

// 17. Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((acc, cur) => acc + cur, 0));

// 18. Use reduce to concatenate all the countries and to produce this sentence:
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(countries.reduce((acc, cur) => `${acc} ${cur}`, "") + " are north European countries");

// 19. Explain the difference between some and every
// some checks if "some" of the elements of an array fulfill a condition and every returns true if all of the elements in the array fulfill it

// 20. Use some to check if some names' length greater than seven in names array
console.log(names.some((n) => n.length > 7));

// 21. Use every to check if all the countries contain the word land
console.log(countries.every(c => c.includes("land")));

// 22. Explain the difference between find and findIndex.
// find returns the first element that fulfills the condition and findIndex return the index of the first one to fulfill it

// 23. Use find to find the first country containing only six letters in the countries array
console.log(countries.find(c => c.length === 6));

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex(c => c.length === 6));

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(c => c === "Norway"));

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(c => c === "Russia"));

// Level 2

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
console.log(products.filter(product => typeof product.price === "number").map(p => p.price).reduce((acc, cur) => acc + cur, 0));

// 2. Find the sum of price of products using only reduce reduce(callback))
console.log(products.reduce((acc, cur) => parseInt(acc) + cur.price, 0));

// 3. Declare a function called categorizeCountries which returns an array of countries which have some
// common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(category) {
    return countries.filter(c => c.includes(category));
}

console.log(categorizeCountries("land"));
console.log(categorizeCountries("ia"));

// 4. Create a function which return an array of objects,
// which is the letter and the number of times the letter use to start with a name of a country.
function startsWith(letterArray) {
    let letterCounter = [];
    letterArray.forEach(letter => {
        let item = {[letter]: countries.filter(c => c.startsWith(letter))};
        letterCounter.push(item);
    });
    return letterCounter;
}

console.log(startsWith(["A", "B", "C"]));

// 5. Declare a getFirstTenCountries function and return an array of ten countries.
// Use different functional programming to work on the countries.js array
const getFirstTenCountries = () => {
    return countries.slice(0, 10);
}
console.log(getFirstTenCountries());

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = () => {
    return countries.slice(countries.length - 10);
}
console.log(getLastTenCountries());

// 7. Find out which letter is used many times as initial for a
// country name from the countries array (eg. Finland, Fiji, France etc)
let letters = [];
for (let i = 65; i <= 65 + 26; i++) {
    let currentLetter = String.fromCharCode(i);
    let count = countries.filter(c => c.startsWith(currentLetter)).length;
    letters.push({[currentLetter]: count});
}
let high = letters[0];
letters.forEach((current) => {
    if (Object.values(current)[0] > Object.values(high)[0])
        high = current;
});
console.log(high);
