import log, {test, TestData,test2} from './tools'
import Student from './student';
import { PersonData, StudentData, Class, ModeOfEntry} from './type-definition';


let Name: string;
Name = 'Oselumese';
log(Name);

/*
//Accessing object properties
let firstName = "Oselumese";
let lastName = "Agbonrofo";
let gender = "male";
let height = 1.82;
let hobbies = ['Football','Programming'];
let birthday = new Date(2005,5,22);
let isAlive = true;

let person1 = new Person1(firstName, lastName, gender, height,
hobbies, birthday, isAlive)

console.log(`Person 1 is ${person1.firstName} whose height is ${person1.height} 
and birthday is ${person1.birthday.toLocaleDateString()}`);
*/

/*
let person1 = new Person1('Oselumese','Agbonrofo', 18)
log(person1)
*/

// let person1data: PersonData = {
//     firstName: 'Oselumese',
//     lastName: 'Agbonrofo',
//     age: 19,
//     class: Class.year2
// }


// let person1 = new Person3(person1data);
// log(person1);

//  Test without interface
// let test1 = new test('Oselumese','Year 2', 22100112813);
// log(test1);

/* Test with interface
let testData:TestData = {
    name: 'Oselumese',
    year: 'Year2',
    matric_num: 22100112813
} 

let Test2 = new test2(testData);
log(Test2);
*/

/*
// Enum
enum Class{
    year1 = 1,
    year2 = 2,
    year3 = 3,
    year4 = 4
}


let person2data: PersonData = {
    firstName: 'Oselumese',
    lastName: 'Agbonrofo',
    age: 19,
    class: Class.year2 

}
let person2 = new Person2(person2data);
log(`This is person2 using enum for class ${person2}`); 
log(`Person 3 is first name is ${person2.firstName}, second name is ${person2.lastName}. His full name is ${person2.getFullName()}`)

*/

let student1PersonalData: PersonData = {
    firstName: 'Oselumese',
    lastName: 'Agbonrofo',
    age: 19,
    class: Class.year2
}

let student1StudentData: StudentData = {
    department: "New Media and Design",
    matriculationNumber: "221001128213",
    modeOfEntry: ModeOfEntry.UTME,
    programOfStudy: "Information Science and Media Studies",
    yearOfEntry: new Date(),
    firstName: 'Oselumese',
    lastName: 'Agbonrofo',
    age: 19,
    class: Class.year2
}

let student1 = new Student(student1StudentData)

log(`${student1.getFullName()} ${student1.yearOfEntry}`)