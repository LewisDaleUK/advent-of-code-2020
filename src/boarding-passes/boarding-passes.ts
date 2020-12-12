type Seat = [number, number, number]

export const boardingPasses = (input : string) : Seat => {
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
    }
    return [min + Math.ceil((max-min) / 2), max];
}

const getSeatIds = (seats : Seat[]) : number[] => seats.map(s => s[2]);
const findSeat = (seats : Seat[], id : number) : Seat|void => seats.filter(s => s[2] === id)[0];

export const findMissing = (seats : Seat[]) : number => {
    const seatIds = getSeatIds(seats);
    const min = Math.min(...seatIds);
    const max = Math.max(...seatIds);

    const range = Array.from(Array(max-min)).map((_, i) => min + i);
    const validIds = range
        .filter(x => !seatIds.includes(x))
        .filter(x => findSeat(seats, x-1) && findSeat(seats, x+1));

    return validIds[0] || 0;
}