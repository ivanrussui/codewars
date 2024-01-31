const abbrevName = (name) => name.split(' ').map(el => el[0]).join('.').toUpperCase();

console.log((abbrevName("Sam Harris"))); // "S.H"
console.log((abbrevName("Patrick Feenan"))); // "P.F"
console.log((abbrevName("john smith"))); // "P.F"