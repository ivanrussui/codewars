// Проверьте, содержит ли строка одинаковое количество символов «x» и «o». Метод должен возвращать логическое значение
// и быть нечувствительным к регистру. Строка может содержать любой символ.

const countTheNumberOfLetters = (str, letter) => {
    let res = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase().includes(letter)) {
            res += 1;
        }
    }

    return res;
};


const XO = str => {
    const x = countTheNumberOfLetters(str, 'x');
    const o = countTheNumberOfLetters(str, 'o');

    return x === o;
};


console.log(XO('xo')); // true
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("xxxooo")); // true

