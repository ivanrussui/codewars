const _if = (bool, func1, func2) => bool ? func1() : func2();

const func1 = () => console.log("True");
const func2 = () => console.log("false");
