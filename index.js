// ***********************
// FUNCTION - Ex. 2

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(1, 76));


// ***********************
// FUNCTION - Ex. 6

// function sumTab(tab) {
//     let sum = 0;

//     for (let i = 0; i < tab.length; i++) {
//         sum = sum + tab[i];
//     }
//     return sum;
// }

// console.log(sumTab([6, 5, 4]));

// const sumTab = (tab) => {
//         let sum = 0;
    
//         for (let i = 0; i < tab.length; i++) {
//             sum = sum + tab[i];
//         }
//         return sum;
//     }
    
//     console.log(sumTab([6, 5, 4]));


// ***********************
// FUNCTION - Ex. 7

function isEven(num) {
    return num % 2 === 0;
}

function showEvenNumbers(tab) {
    for(let i = 0; i < tab.length; i++) {
        if(isEven(tab[i])) {
            console.log(tab[i]);
        }
    }
}

showEvenNumbers([3, 6, 4, 2, 56]);
