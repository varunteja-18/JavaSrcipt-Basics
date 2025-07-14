let age = 25;
let price = 10.99;
let firstName = "BRO";
let Online = true;
console.log(typeof price); //to display data type of variable
console.log(`Your age is ${age}`); // when we use place holder we should use back tick(`)
console.log(`Your age is $${price}`);
console.log('your age is ' + age);
console.log(typeof firstName);
console.log(firstName);
document.getElementById("h1").textContent  +=  firstName;
document.getElementById("h2").textContent = `Your age is ${age}`;
