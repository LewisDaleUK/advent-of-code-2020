export const passwords = (items : Array<string>) : number =>
    items.reduce((accumulator : number, item) => {
        const [policy, password] = item.split(': ');
        const [counts, letter] = policy.split(' ');
        const [a, b] = counts.split('-').map(x => parseInt(x) - 1);

        if ((password[a] === letter && password[b] !== letter) || (password[b] === letter && password[a] !== letter)) {
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