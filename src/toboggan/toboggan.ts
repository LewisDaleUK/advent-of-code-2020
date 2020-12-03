export const toboggan = (lines : Array<Array<string>>) : number => {
    const right = 3;
    const down = 1;

    let x = 0;
    let y = 0;
    let collisions = 0;

    while(y < lines.length) {
        if(collision(lines[y][x])) {
            collisions++;
        }

        x += right;
        if (x >= lines[y].length) {
            x -= lines[y].length;
        }
        y += down;
    }
    return collisions;
}

const collision = (character : string) : boolean => character === '#';