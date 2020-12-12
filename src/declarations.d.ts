declare namespace Passport {
    type PassportInput = string[]
    type Field = [string, boolean, RegExp?]
    export type FieldSet = Field[]
    type PassportField = [string, string]
    type Passport = PassportField[]
}

