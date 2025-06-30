// function likes(names) {
//     if (!names.length) {
//         return "no one likes this";
//     } else {
//         if (names.length === 1) {
//             return names + ' ' + "likes this";
//         }
//
//         let arr = [];
//         if (names.length === 2) {
//             for (const name of names) {
//                 arr.push(name);
//             }
//             arr.splice(1, 0, 'and');
//             arr.splice(3, 0, 'like this');
//             return arr.join(' ');
//         }
//
//         let counter = 0;
//         if (names.length === 3) {
//             for (const name of names) {
//                 if (counter === 0) {
//                     arr.push(name + ',');
//                     counter++;
//                 } else {
//                     arr.push(name);
//                 }
//             }
//
//             arr.splice(2, 0, 'and');
//             arr.splice(4, 0, 'like this');
//             return arr.join(' ');
//         }
//
//         if (names.length > 3) {
//             const rest = names.slice(2);
//             for (const name of names) {
//                 if (counter === 0) {
//                     arr.push(name + ',');
//                     counter++;
//                 } else if (counter === 1) {
//                     arr.push(name);
//                     counter++;
//                 }
//             }
//             arr.splice(2, 0, `and ${rest.length} others like this`);
//             return arr.join(' ');
//         }
//     }
// }

function likes(names) {
    const count = names.length;
    switch (count) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
    }
}

console.log(likes([])); // "no one likes this"
console.log(likes(["Peter"])); // "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this";
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Ivan"])); // "Alex, Jacob and 3 others like this";
