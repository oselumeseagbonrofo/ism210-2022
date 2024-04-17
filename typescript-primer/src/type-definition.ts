export interface PersonData{
    firstName: string;
    lastName: string;
    age: number;
    height?: any;
    hobbies?: any;
    class: number;
}

export enum ModeOfEntry{
    UTME = 1,
    DirectEntry = 2,
    Transfer = 3
}

export enum Class{
    year1 = 1,
    year2 = 2,
    year3 = 3,
    year4 = 4
}

// interfaces can be extended
export interface StudentData extends PersonData{
    matriculationNumber: string,
    programOfStudy: string,
    department: string,
    yearOfEntry: Date,
    modeOfEntry?: any,
    nextOfKin?: any,
    emailAddress?: any,
    phoneNumber?: any
}