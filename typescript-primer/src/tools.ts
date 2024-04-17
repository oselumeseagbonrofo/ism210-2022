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


// specify that log returns no data
export let log = (output:Object):void=>{
    console.log(output)
}

/* original test class*/
export class test{
    name:string;
    year:string;
    matric_num:number;
    mother_name:string;

    constructor(name: string, year: string, matric_num: number, mother_name:string){
        this.name = name;
        this.year = year;
        this.matric_num = matric_num;
        this.mother_name = mother_name
    }
}

// Test class with interface
export interface TestData{
    name:string;
    year:string;
    matric_num:number;
    mother_name?:any;
}
export class test2{
    name:string;
    year:string;
    matric_num:number;
    mother_name:string;

    constructor(testData:TestData){
        this.name = testData.name;
        this.year = testData.year;
        this.matric_num = testData.matric_num;
        this.mother_name = testData.mother_name
    }
}

export default log;
