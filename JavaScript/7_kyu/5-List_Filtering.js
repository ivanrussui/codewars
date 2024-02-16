// В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

const filter_list = l => l.filter(el => typeof el !== "string");

console.log(filter_list([1, 2, 'a', 'b'])); // [1,2]
console.log(filter_list([1, 'a', 'b', 0, 15])); // [1,0,15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); // [1,2,123]