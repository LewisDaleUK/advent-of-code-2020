export const report = (expenses : Array<number>) : number => {
    const pairs = permutations(expenses)
        .filter(([x, y, z]) => (x+y+z) === 2020);

    if (!pairs.length) {
        return 0;
    }

    return pairs[0][0] * pairs[0][1] * pairs[0][2];
}

const permutations = (list : Array<any>) : Array<Array<any>> => {
    if (!list.length) {
        return [];
    }
    if (list.length === 1 || list.length === 2) {
        return [list];
    }

    let permutations = [];
    for (let i = 0; i < list.length-2; i++) {
        for (let j = i+1; j < list.length-1; j++) {
            for (let k = j+1; k < list.length; k++) {
                permutations.push([list[i], list[j], list[k]]);
            }
        }
    }
    return permutations;
}