// 1. Create an empty object called dog
const dog = {};
// 2. Print the the dog object on the console
console.log(dog);
// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Kitsune";
dog.legs = 4;
dog.color = "Beige";
dog.age = "4";
dog.bark = function () {
    console.log("woof woof");
}
console.log(dog);
// 4. Get name, legs, color, age and bark value from the dog object
console.log(`${dog.name} has ${dog.legs} legs, is ${dog.age} years old, has ${dog.color} fur`);
dog.bark();

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "Mix with pomerian";
dog.getDogInfo = function () {
    return `${this.name} is a ${this.breed}, is ${this.age} years old, has ${this.legs} and a ${this.color} fur`;
}
console.log(dog.getDogInfo());

// Exercises: Level 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
// 1. Find the person who has many skills in the users object.
let keys = Object.keys(users);
let mostSkills = keys[0];
for (const key of keys) {
    if (users[key].skills.length > users[mostSkills].skills.length)
        mostSkills = key;
}
console.log(mostSkills);

// 2. Count logged-in users
let loggedInCount = 0;
for (const key of keys) {
    if (users[key].isLoggedIn) {
        loggedInCount++;
    }
}
console.log(`Logged-in: ${loggedInCount}`);

// 2.5 count users having greater than equal to 50 points from the following object
let betterThan50Count = 0;
for (const key of keys) {
    if (users[key].points >= 50) {
        betterThan50Count++;
    }
}
console.log(`Better than 50: ${betterThan50Count}`);

// 3. Find people who are MERN stack developer from the users object
let mernDevelopers = [];
let mernStack = ["MongoDB", "Express", "React", "Node"];
for (const key of keys) {
    if(mernStack.every(r => users[key].skills.includes(r)))
        mernDevelopers.push(key);
}
console.log(mernDevelopers);

// 4. Set your name in the users object without modifying the original users object
users["Victor"] = {
    email: 'victor@victor.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
    age: 27,
    isLoggedIn: true,
    points: 50
}
console.log(users);

// 5. Get all keys or properties of users object
console.log(Object.keys(users));

// 6. Get all the values of users object
console.log(Object.values(users));

// Exercises: Level 3

const personAccount = {
    firstName: "Victor",
    lastName: "Cortes",
    incomes: {},
    expenses:{},
    totalIncome: function (){
        let sum = 0;
        for (const income of Object.values(this.incomes)) {
            sum += income;
        }
        return sum;
    },
    totalExpense: function (){
        let sum = 0;
        for (const expenses of Object.values(this.expenses)) {
            sum += expenses;
        }
        return sum;
    },
    accountInfo: function (){
        console.log(`User: ${this.firstName}\n AccountBalance: ${this.accountBalance()}`);
    },
    addIncome: function (desc,amount){
        this.incomes[desc] = amount;
    },
    addExpense: function (desc,amount){
        this.expenses[desc] = amount;
    },
    accountBalance: function (){
        return this.totalIncome() - this.totalExpense();
    }
}
personAccount.addIncome("Salary", 50000);
personAccount.addExpense("CoD Points",1300);
personAccount.addExpense("JetBrains license",5600);
personAccount.accountInfo();