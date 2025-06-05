function meeting(rooms, need) {
    if (need === 0) {
        return 'Game On';
    }

    let result = [];
    let freeChairs = 0;

    for (const [taken, chairs] of rooms) {
        const takenChairs = taken.length;
        const freeInRoom = Math.max(0, chairs - takenChairs); // Сколько свободных стульев в комнате

        if (freeChairs >= need) {
            break; // Если уже набрали нужное количество, выходим
        }

        const take = Math.min(freeInRoom, need - freeChairs); // Сколько стульев взять из этой комнаты
        result.push(take);
        freeChairs += take;
    }

    if (freeChairs < need) {
        return 'Not enough!';
    }

    return result;
}

console.log(meeting(
    [[ 'X', 3 ], [ 'XXXXX', 8 ], [ 'XXXXXXX', 2 ], [ 'XXXX', 8 ], [ 'XXXXXXX', 1 ]], 8)); // [ 2, 3, 0, 3 ]
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)); // [0, 1, 3]
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)); // [0, 0, 1, 2, 2]
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)); // 'Game On'
