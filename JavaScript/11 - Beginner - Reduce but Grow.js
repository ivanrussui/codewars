function grow(x){
    const res = x.reduce((a, b) => a * b);
    return res;
}

x = [1, 2, 3];
console.log(grow(x));
