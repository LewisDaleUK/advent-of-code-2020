import { groupInputs } from "../utils";

export const validatePassports = (input : Passport.PassportInput, fields : Passport.FieldSet) : number =>
    readPassports(input)
        .filter(passport => isValid(passport, fields))
        .length;

const readPassports = (input : Passport.PassportInput) : Passport.Passport[] =>
    groupInputs(input)
        .map(inputToPassport);

const inputToPassport = (input : string[]) : Passport.Passport =>
    input
        .join(' ')
        .split(' ')
        .map((str) : Passport.PassportField => {
            const [field, value] = str.split(':');
            return [field, value];
        });

const isValid = (passport : Passport.Passport, fields : Passport.FieldSet) : boolean =>
    fields
        .filter(([field, required, regex = /^.*$/]) => {
                if (required) {
                    const entry = passport.filter(f => f[0] === field);
                    return entry.length === 0 || !regex.test(entry[0][1]);
                }
                return false;
        }).length === 0;
