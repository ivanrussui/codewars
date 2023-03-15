const quarterOf = month => {
    if (month > 0 && month < 4 ) {
        return 1;
    } else if (month > 3 && month < 7) {
        return 2;
    } else if (month > 6 && month < 10) {
        return 3;
    } else if (month > 9 && month < 13) {
        return 4;
    } else {
        return 'month 1-12'
    }
}

console.log(quarterOf(-12));