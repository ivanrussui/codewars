const cubeChecker = function(volume, side){
    let sides = side * side * side;
    if (volume <= 0 || sides <= 0) {
        return false;
    } else return volume === sides;
};

console.log(cubeChecker(125, 5));