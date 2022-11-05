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

// function add(x) {
//     x = x + 1;
// }

// let z = 5;

// add(z);

// console.log(z);

//wyświetla się 5


// PRZYKŁAD - zmienna referencyjna

// function add(x) {
//     x[0] = 999
// }

// let z = [1, 2, 3];

// add(z);

// console.log(z[0]);

//wyświetla się 999


// ********************
// PRZYKŁAD - CALLBACK - funckja przekazana jako argument do innej funkcji (sprzężenie zwrotne)

// function fun(x) {
//     x();
// }

// const show = () => {
//     console.log("Siemka działam!")
// }

// fun(show);
// wywołanie funkcji fun, wyświetla się Siemka działam!

// function fun(x) {
//     x();
// }

// fun(() => {
//     console.log("Siemka dzialam?!");
//   });


// *********************************
// PRZYKŁAD - SORTOWANIE
// sortowanie działa alfabetycznie więc mamy 1, 11, 12, 3, 3,3 4, 5, 56, 6, 67...
// jeśli chcemy inaczej to musimy callbackiem

// const tab = [6, 4, 11, 12, 1, 3, 67, 5, 3, 56];

// tab.sort ();

// console.log(tab);

// co zrobić?

// const tab = [6, 4, 11, 12, 1, 3, 67, 5, 3, 56];

// tab.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     } else if (a < b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
  
//   console.log(tab);

  //wyświetla nam się posortowane liczbowo

  //NAJLEPIEJ

  const tab = [6, 4, 11, 12, 1, 3, 67, 5, 3, 56];

tab.sort((a, b) => a - b);

console.log(tab);