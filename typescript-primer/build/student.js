"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
// this is inheritance
class Student extends person_1.Person3 {
    get matriculationNumber() {
        return this._matriculationNumber;
    }
    set matriculationNumber(value) {
        this._matriculationNumber = value;
    }
    get programOfStudy() {
        return this._programOfStudy;
    }
    set programOfStudy(value) {
        this._programOfStudy = value;
    }
    get department() {
        return this.toTitleCase(this._department);
    }
    set department(value) {
        this._department = value;
    }
    get yearOfEntry() {
        return this._yearOfEntry;
    }
    set yearOfEntry(value) {
        this._yearOfEntry = value;
    }
    get modeOfEntry() {
        return this._modeOfEntry;
    }
    set modeOfEntry(value) {
        this._modeOfEntry = value;
    }
    get nextOfKin() {
        return this._nextOfKin;
    }
    set nextOfKin(value) {
        this._nextOfKin = value;
    }
    get emailAddress() {
        return this._emailAddress;
    }
    set emailAddress(value) {
        this._emailAddress = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    constructor(studentData) {
        super(studentData);
        this._matriculationNumber = this.matriculationNumber;
        this._department = studentData.department;
        this._emailAddress = studentData.emailAddress;
        this._modeOfEntry = studentData.modeOfEntry;
        this._nextOfKin = studentData.nextOfKin;
        this._phoneNumber = studentData.phoneNumber;
        this._programOfStudy = studentData.programOfStudy;
        this._yearOfEntry = studentData.yearOfEntry;
    }
}
exports.default = Student;
//# sourceMappingURL=student.js.map