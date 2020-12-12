export const groupInputs = (input : string[]) : string[][] =>
    input
        .map(s => s.trim())
        .reduce((acc : string[][], field) => {
            if (field === '') {
                return [...acc, []];
            }
            const [front, end] = chop(acc);
            return [...front, [...end, field]];
        }, [[]])
        .filter(arr => arr.length !== 0)

export const chop = (arr : any[]) : [any[], any[]] => {
    if (arr.length === 0) {
        return [[], []];
    }

    if (arr.length === 1) {
        return [[], arr[0]]
    }
    return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}