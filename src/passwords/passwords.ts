export const passwords = (items : Array<string>) : number =>
    items.reduce((accumulator : number, item) => {
        const [policy, password] = item.split(': ');
        const [counts, letter] = policy.split(' ');
        const [min, max] = counts.split('-');
        const occurrences = countOccurrences(password, letter);

        if (occurrences <= parseInt(max) && occurrences >= parseInt(min)) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);

const countOccurrences = (str : string, search : string) : number =>
    str.split('')
        .reduce((count : number, char ) =>
            char === search
                ? count + 1
                : count
        , 0);