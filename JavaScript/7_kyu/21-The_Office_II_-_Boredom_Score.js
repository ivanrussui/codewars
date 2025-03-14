// 1 вариант
// function boredom(staff) {
//     let total = 0;
//
//     for (const value of Object.values(staff)) {
//         switch (value) {
//             case 'accounts':
//                 total += 1;
//                 break;
//             case 'finance':
//                 total += 2;
//                 break;
//             case 'canteen':
//                 total += 10;
//                 break;
//             case 'regulation':
//                 total += 3;
//                 break;
//             case 'trading':
//                 total += 6;
//                 break;
//             case 'change':
//                 total += 6;
//                 break;
//             case 'IS':
//                 total += 8;
//                 break;
//             case 'retail':
//                 total += 5;
//                 break;
//             case 'cleaning':
//                 total += 4;
//                 break;
//             case 'pissing about':
//                 total += 25;
//                 break;
//             default:
//                 break;
//         }
//     }
//
//     if (total <= 80) {
//         return 'kill me now';
//     } else if (total < 100 && total > 80) {
//         return 'i can handle this';
//     } else if (total >= 100) {
//         return 'party time!!';
//     }
// }

// 2 вариант
function boredom(staff) {
    const departmentScores = {
        'accounts': 1,
        'finance': 2,
        'canteen': 10,
        'regulation': 3,
        'trading': 6,
        'change': 6,
        'IS': 8,
        'retail': 5,
        'cleaning': 4,
        'pissing about': 25
    };

    const total = Object.values(staff).reduce((sum, department) => sum + (departmentScores[department] || 0), 0);

    return total <= 80 ? 'kill me now' : total < 100 ? 'i can handle this' : 'party time!!';
}

console.log(boredom({
    tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance'
})); // 'kill me now'

console.log(boredom({
    tim: 'IS', jim: 'finance',
    randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
    katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
    alex: 'regulation', john: 'accounts', mr: 'canteen'
})); // 'i can handle this'

console.log(boredom({
    tim: 'accounts', jim: 'accounts',
    randy: 'pissing about', sandy: 'finance', andy: 'change',
    katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
    john: 'retail', mr: 'pissing about'
})); // 'party time!!'

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25