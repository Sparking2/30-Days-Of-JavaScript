const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Level 1
// 1. create an empty set
let set = new Set();
console.log(set);

// 2. Create a set containing 0 to 10 using loop
for (let i = 0; i < 11; i++) {
    set.add(i);
}
console.log(set);

// 3. Remove an element from a set
set.delete(5);
console.log(set);

// 4. Clear a set
set.clear();
console.log(set);

// 5. Create a set of 5 string elements from array
let array = ["A", "B", "C", "D", "E"];
set = new Set(array);
console.log(set);

// 6. Create a map of countries and number of characters of a country
let countryCharacterCount = new Map();
countries.forEach(current => {
    countryCharacterCount.set(current, current.length);
})
console.log(countryCharacterCount);

// Level 2
// 1. Find a union b
let c = [...a, ...b];
let A = new Set(a);
let B = new Set(b);
let C = new Set(c);
console.log(C);

// 2. Find a intersection b
let cInter = a.filter((num) => B.has(num));
let interception = new Set(cInter);
console.log(interception);

// 3. Find a with b
let diff = a.filter((num) => !B.has(num));
let diffSet = new Set(diff);
console.log(diffSet);

// Level 3
// 1. How many languages are there in the countries object file
function mostSpokenLanguages(countriesArray, top) {
    let languages = new Map();
    countriesArray.forEach(current => {
        current.languages.forEach(l => {
            if (languages.has(l)) {
                let count = languages.get(l);
                languages.set(l, count + 1);
            } else {
                languages.set(l, 1);
            }
        })
    });
     return new Map([...languages.entries()].sort((a, b) => a[1] < b[1] ? 1 : -1 ).slice(0,top));
}

console.log(mostSpokenLanguages(countries_data, 10));
console.log(mostSpokenLanguages(countries_data, 3));
