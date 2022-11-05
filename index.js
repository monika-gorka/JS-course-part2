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

// function isEven(num) {
//     return num % 2 === 0;
// }

// function showEvenNumbers(tab) {
//     for(let i = 0; i < tab.length; i++) {
//         if(isEven(tab[i])) {
//             console.log(tab[i]);
//         }
//     }
// }

// showEvenNumbers([3, 6, 4, 2, 56]);


// ***********************
// FUNCTION - Ex. 14

// function findMinValue (tab) {
//     let min = tab[0];

//     for(let i = 0; i < tab.length; i++) {
//         if(min > tab[i]) {
//             min = tab[i];
//         }
//     }
//     return min;
// }

// const findMaxValue = function(tab) {
//     let max= tab[0];

//     for(let i = 0; i < tab.length; i++) {
//         if(max < tab[i]) {
//             max = tab[i];
//         }
//     }
//     return max;
// }

// const getAverage = (tab) => {
//     let sum= 0;

//     for(let i = 0; i < tab.length; i++) {
//         sum = sum + tab[i];
//         }

//     return sum;
// }

// const tab = [5, 34, 2, 1, 7, 45, 4];

// console.log(findMinValue(tab));
// console.log(findMaxValue(tab));
// console.log(getAverage(tab));



// PRZYKŁAD - zmienna wartościowa

function add(x) {
    x = x + 1;
}

let z = 5;

add(z);

console.log(z);

//wyświetla się 5