function chromosomeCheck(sperm) {
    if (sperm === 'XY') {
        return 'Congratulations! You\'re going to have a son.'
    } else if (sperm === 'XX') {
        return 'Congratulations! You\'re going to have a daughter.'
    } else {
        return 'You are not pregnant'
    }
}

console.log(chromosomeCheck('X'));