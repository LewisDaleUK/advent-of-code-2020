type PassportInput = string[]
type Field = [string, boolean]
export type FieldSet = Field[]
type PassportField = [string, string]
type Passport = PassportField[]

export const validatePassports = (input : PassportInput, fields : FieldSet) : number =>
    readPassports(input)
        .filter(passport => isValid(passport, fields))
        .length;

const readPassports = (input : PassportInput) : Passport[] =>
    input.reduce((acc : string[][], field) => {
        if (field === '') {
            return [...acc, []];
        }
        const [front, end] = chop(acc);
        return [...front, [...end, field]];
    }, [[]])
        .filter(arr => arr.length !== 0)
        .map(inputToPassport);

const chop = (arr : any[]) : [any[], any[]] => {
    if (arr.length === 0) {
        return [[], []];
    }

    if (arr.length === 1) {
        return [[], arr[0]]
    }
    return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}

const inputToPassport = (input : string[]) : Passport =>
    input
        .join(' ')
        .split(' ')
        .map((str) : PassportField => {
            const [field, value] = str.split(':');
            return [field, value];
        });

const isValid = (passport : Passport, fields : FieldSet) : boolean =>
    fields
        .filter(([field, required]) => required && passport.filter(f => f[0] === field).length === 0)
        .length === 0;
