function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    if (arrayOfSheep === null || arrayOfSheep === undefined) {
        return false;
    }
    const res = arrayOfSheep.filter(i => i === true);
    return res.length;
}

const arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true,
    true,  false, true,  false,
    true,  false, false, true,
    true,  true,  true,  true,
    false, false, true,  true]

console.log(countSheeps(arrayOfSheep));
