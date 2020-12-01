export const report = (expenses : Array<number>) : number => {
    const pairs = permutations(expenses)
        .filter(([x, y]) => (x+y) === 2020);

    if (!pairs.length) {
        return 0;
    }

    return pairs[0][0] * pairs[0][1];
}

const permutations = (list : Array<any>) : Array<Array<any>> => {
    if (!list.length) {
        return [];
    }
    if (list.length === 1) {
        return [[list]];
    }

    let permutations = [];
    for (let i = 0; i < list.length-1; i++) {
        for (let j = i+1; j < list.length; j++) {
            permutations.push([list[i], list[j]]);
        }
    }
    return permutations;
}