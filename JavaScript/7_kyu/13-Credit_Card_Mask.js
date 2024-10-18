function maskify(cc) {
    // оба варианта рабочие
    // return cc.split('').reverse().map((el, index) => index > 3 ? '#' : el).reverse().join('');
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log((maskify('4556364607935616'))); // '############5616'
console.log((maskify('1'))); // '1'
console.log((maskify('11111'))); // '#1111'
