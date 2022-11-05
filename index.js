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


// ***********************************
// TABLE - Ex. 7 - PODZIAŁ TABLICY

// const tab = [6, 4, 3, 7, 2, 1, 5, 8, 5, 3];

// const even = [];
// const odd = [];

// for(let i = 0; i < tab.length; i++) {
//     if(tab[i]%2 === 0) {
//         even.push(tab[i]);
//     }
//     else {
//         odd.push(tab[i]);
//     }
// }

// console.log(even);
// console.log(odd);


// ***********************************
// TABLE - Ex.10 

// const tab = [6, 4, 3, 7, 2, 1, 5, 8, 5, 3];

// let number = parseInt(prompt("Podaj liczbę"));

// let idx = tab.indexOf(number);

// if(idx === -1) {
//     console.log("Nie ma");
// }
// else {
//     console.log(idx);
// }


// ***********************************
// TABLE - Ex.13 - pętla while

// const myHistory = [];

// while (true) {
//   let choice = prompt("Podaj wybor!");

//   if (choice === "1") {
//     let number1 = parseInt(prompt("Podaj liczbe 1"));
//     let number2 = parseInt(prompt("Podaj liczbe 2"));
//     console.log(number1 + number2);
//     myHistory.push(`${number1} + ${number2} = ${number1 + number2}`);
//   } else if (choice === "2") {
//     let number1 = parseInt(prompt("Podaj liczbe 1"));
//     let number2 = parseInt(prompt("Podaj liczbe 2"));
//     console.log(number1 - number2);
//     myHistory.push(`${number1} - ${number2} = ${number1 - number2}`);
//   } else if (choice === "3") {
//     let number1 = parseInt(prompt("Podaj liczbe 1"));
//     let number2 = parseInt(prompt("Podaj liczbe 2"));
//     console.log(number1 * number2);
//     myHistory.push(`${number1} * ${number2} = ${number1 * number2}`);
//   } else if (choice === "4") {
//     let number1 = parseInt(prompt("Podaj liczbe 1"));
//     let number2 = parseInt(prompt("Podaj liczbe 2"));
//     console.log(number1 / number2);
//     myHistory.push(`${number1} / ${number2} = ${number1 / number2}`);
//   } else if (choice === "5") {
//     console.log(myHistory);
//   } else if (choice === "0") {
//     break;
//   }
// }


// // TABLICE DWUWYMIAROWE - tablice, której elementami są tablice

// const tab = [
//     [1, 2, 3],
//     [2, 3, 4],
//     [4, 3, 2]
// ];

// console.log(tab[1][1]);


// ***********************************
// TABLE - Ex.18 - tablica 5x5

// const tab = [
//     [1, 2, 3, 9, 5],
//     [2, 3, 4, 544, 2],
//     [4, 3, 2, 33, 11],
//     [8, 4, 3, 6, 0 ],
//     [4, 9, 22, 6, 9],
// ];

// let min = tab[0][0];

// for(let i = 0; i < tab.length; i++) {
//     for (let j = 0; j < tab[i].length; j++) {
//         if (min > tab[i][j]) {
//             min = tab[i][j];
//         }
//     }
// }

// console.log(min);


// ***********************************
// STRING - Ex. 16

// let text = "To jest moj super extrta tekst";
// let ileSamoglosek = 0;

// for (let i = 0; i < text.length; i++) {
//   if (
//     text[i] === "a" ||
//     text[i] === "o" ||
//     text[i] === "e" ||
//     text[i] === "u" ||
//     text[i] === "i" ||
//     text[i] === "y"
//   ) {
//     ileSamoglosek++;
//   }
// }

// console.log(ileSamoglosek);


// ***********************************
// STRING - Ex. 13 - tekst od końca

let text = "To jest moj super extrta tekst";

for (let i = text.length -1; i >= 0; i--) {
    console.log(text[i]);
}

// -1 - powoduje, że zgadza nam się numer indeksu (lenght to 5 a maxc index to 4)