// **********************************
// TABLE - Ex. 1

// const tab = [];

// for(let i = 0; i < 10; i++) {
//     let number = parseInt(prompt("Podaj liczbę!"));
//     tab.push(number);
// }

// console.log(tab);


// ***********************************
// TABLE - Ex. 4

// const tab = [6, 4, 3, 7, 2, 1, 5, 8, 5, 3];

// let sum = 0;
// for(let i = 0; i <10; i++) {
// sum = sum + tab[i];
// }

// console.log(sum);


// ***********************************
// TABLE - Ex. 5 PĘTLA w PĘTLI

// const tab = [6, 4, 3, 7, 2, 1, 5, 8, 5, 3];

// let duplicate = false;

// for(let i = 0; i < tab.length; i++) {
//     let toCheck = tab[i];
//     for (let j = 0; j < tab.length; j++) {
//         if(toCheck === tab[j] && i !==j) {
//             duplicate = true;
//         }
//     }
// }

// if (duplicate) {
//     console.log("Są duplikaty!")
// }

// i !== j - warunek, że indeksy liczb są różne - 3 jest 3 nierówna
// zmienna duplicate - pomocnicza. Na początku false, bo zakładam, że nie wystąpiły