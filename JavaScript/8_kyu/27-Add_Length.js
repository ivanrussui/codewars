function addLength(str) {
    let arr = str.split(' ');
    let res = Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        res[i] = arr[i] + ' ' + arr[i].length;
    }
    return  res;
}
console.log(addLength('apple ban'));

// another solution
// function addLength(str) {
//     let arr = str.split(' ');
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i] + ' ' + arr[i].length);
//     }
//     return  res;
// }
