// Level 1
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3));
console.log(challenge.substring(0, 3));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.at(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log("You cannot end a sentence with because because because is a conjunction".indexOf("because"));
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"));
console.log("You cannot end a sentence with because because because is a conjunction".search("because"));
challenge.trim();
console.log("30 Days Of JavaScript".startsWith("3"));
console.log("30 Days Of JavaScript".endsWith("t"));
console.log("30 Days Of JavaScript".match("a"));
console.log("30 Days Of ".concat("JavaScript"));
console.log(challenge.repeat(2));

// Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
console.log(typeof parseInt("10") === typeof 10);
console.log(Math.round(parseFloat("9.8")) === 10);
console.log("python".includes("on") && "jargon".includes("on"));
console.log("I hope this course is not full of jargon.".includes("jargon"));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51 + 50));
console.log(Math.floor(Math.random() * 256));
console.log("JavaScript".at(Math.floor(Math.random() * "JavaScript".length)));
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");
let text = "You cannot end a sentence with because because because is a conjunction";
console.log(text.substring(0,text.indexOf("because")) + text.substring(text.lastIndexOf("because") + 7));

// Level 3
console.log("Love is the best thing in this world. Some found their love and some are still looking for their love.".match(/love/g).length);
console.log("You cannot end a sentence with because because because is a conjunction".match(/because/g).length);
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleaned = sentence.replace(/[^a-zA-Z .,]/g,"");
console.log(cleaned);
let wordCounts = {};
let words = cleaned.split(/\b/);
for(let i = 0; i < words.length; i++){
    wordCounts["_"+words[i]] = (wordCounts["_"+words[i]] || 0) + 1;
}
console.log(wordCounts);
let ar = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.".match(/\d+/g);
console.log(parseInt(ar[0]) * 12 + parseInt(ar[1]) + parseInt(ar[2]) * 12);
