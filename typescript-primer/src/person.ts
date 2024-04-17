import { PersonData } from "./type-definition";

/* illustrate private, public, protected */
export class Person3{
    private _firstName: string;
    public get firstName(): string{
        return `${this.toTitleCase(this._firstName)}`
    }
    public set firstName(value: string){
        this._firstName = value;
    }
    
    private _lastName: string;
    public get lastName():string{
        return `${this.toTitleCase(this._lastName)}`
    }
    public set lastName(value: string){
        this._lastName =  value;
    }

    private _age: number;
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    private _height: any;
    public get height(): any {
        return this._height;
    }
    public set height(value: any) {
        this._height = value;
    }

    private _hobbies: any;
    public get hobbies(): any {
        return this._hobbies;
    }
    public set hobbies(value: any) {
        this._hobbies = value;
    }

    private _class: number;
    public get class(): number {
        return this._class;
    }
    public set class(value: number) {
        this._class = value;
    }

    constructor(personData: PersonData){
        this._firstName = personData.firstName;
        this._lastName = personData.lastName;
        this._age = personData.age;
        this._height = personData.height;
        this._hobbies = personData.hobbies;
        this._class = personData.class;
    }

    public getFullName(): string{
        return `${this._firstName} ${this._lastName}`
    }

    protected toTitleCase = (str:string) =>{
        str.toLowerCase();
        return str.substring(0,0) + str[0].toUpperCase() + str.substring(1)
    }
};