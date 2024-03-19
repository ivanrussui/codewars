function dnaStrand(dna) {
    let str = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            str += 'T';
        } else if (dna[i] === 'T') {
            str += 'A';
        } else if (dna[i] === 'C') {
            str += 'G';
        } else if (dna[i] === 'G') {
            str += 'C';
        }
    }
    return str;
}

console.log(dnaStrand("AAAA")); // "TTTT","String AAAA is")
console.log(dnaStrand("ATTGC")); // "TAACG","String ATTGC is")
console.log(dnaStrand("GTAT")); // "CATA","String GTAT is")