"use strict";
// class declaration without default values
/*
export class Person1{
    // declare property type
    firstName: string;
    lastName: string;
    gender: string;
    height: number;
    hobbies: string[];
    birthday: Date;
    isAlive: boolean;

    constructor(firstName: string, lastName: string, gender: string, height: number= -1,
        hobbies: string[] = [], birthday: Date, isAlive: boolean = true){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }
};

export class Person2{
    firstName: string;
    lastName: string;
    age: number;
    isStudent: boolean;
    courses: string[]

    constructor(firstName: string, lastName: string, age: number, isStudent: boolean= true, courses: string[] = []){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isStudent = isStudent;
        this.courses = courses;
    }
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.test2 = exports.test = exports.log = void 0;
// specify that log returns no data
let log = (output) => {
    console.log(output);
};
exports.log = log;
/* original test class*/
class test {
    constructor(name, year, matric_num, mother_name) {
        this.name = name;
        this.year = year;
        this.matric_num = matric_num;
        this.mother_name = mother_name;
    }
}
exports.test = test;
class test2 {
    constructor(testData) {
        this.name = testData.name;
        this.year = testData.year;
        this.matric_num = testData.matric_num;
        this.mother_name = testData.mother_name;
    }
}
exports.test2 = test2;
exports.default = exports.log;
//# sourceMappingURL=tools.js.map