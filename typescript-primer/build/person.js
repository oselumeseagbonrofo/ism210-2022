"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person3 = void 0;
/* illustrate private, public, protected */
class Person3 {
    get firstName() {
        return `${this.toTitleCase(this._firstName)}`;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return `${this.toTitleCase(this._lastName)}`;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get hobbies() {
        return this._hobbies;
    }
    set hobbies(value) {
        this._hobbies = value;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this._class = value;
    }
    constructor(personData) {
        this.toTitleCase = (str) => {
            str.toLowerCase();
            return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1);
        };
        this._firstName = personData.firstName;
        this._lastName = personData.lastName;
        this._age = personData.age;
        this._height = personData.height;
        this._hobbies = personData.hobbies;
        this._class = personData.class;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
exports.Person3 = Person3;
;
//# sourceMappingURL=person.js.map