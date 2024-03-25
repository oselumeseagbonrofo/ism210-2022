// let firstName: string;
// firstName = 'Pius'
// console.log(firstName)

import log, {Person} from './tools'

//Accessing object properties
let firstName = "Oselumese";
let lastName = "Agbonrofo";
let gender = "male";
let height = 1.82;
let hobbies = ['Football','Programming'];
let birthday = new Date(2005,5,22);
let isAlive = true;

let person1 = new Person(firstName, lastName, gender, height,
hobbies, birthday, isAlive)

console.log(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);

