// ***********************
// FUNCTION - Ex. 2

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(1, 76));


// ***********************
// FUNCTION - Ex. 6

function sumTab(tab) {
    let sum = 0;

    for (let i = 0; i < tab.length; i++) {
        sum = sum + tab[i];
    }
    return sum;
}

console.log(sumTab([6, 5, 4]));
