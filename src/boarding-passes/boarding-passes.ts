export const boardingPasses = (input : string) : [number, number, number] => {
    const row = binarySearch(input.substring(0, 7), 0, 127);
    const column = binarySearch(input.substring(7), 0, 7);
    return [row, column, (row * 8) + column];
}

const binarySearch = (input : string, min = 0, max = 127) : number => {
    if (min === max) {
        return min;
    }
    const head = input.substring(0,1);
    const tail = input.substring(1);
    return binarySearch(tail, ...segment(head, min, max));
};

const segment = (character : string, min : number, max : number) : [number, number] => {
    if (character === "F" || character === "L") {
        return [min, min + Math.floor((max-min) / 2)];
    } else if (character === "B" || character === "R") {
        return [min + Math.ceil((max-min) / 2), max];
    } else {
        return [min, max];
    }
}