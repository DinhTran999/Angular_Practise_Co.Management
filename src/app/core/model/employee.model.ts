import { Gender } from "./enumerate/gender.model";

export interface Employee {
    id: number,
    fullName: string,
    dateOfBirth: string,
    gender: Gender,
    salary: number
    departmentName: string
}
