declare namespace Passport {
    type PassportInput = string[]
    type Field = [string, boolean, RegExp?]
    export type FieldSet = Field[]
    type PassportField = [string, string]
    type Passport = PassportField[]
}

declare namespace Customs {
    type Question = 'a' | 'b' | 'c'| 'd' | 'e' | 'f' | 'g' | 'h' | 'i' |
        'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' |
        'u' | 'v' | 'w' | 'x' | 'y' | 'z'
    type Response = Record<Question, number>
}

