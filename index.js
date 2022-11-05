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

const myHistory = [];

while (true) {
  let choice = prompt("Podaj wybor!");

  if (choice === "1") {
    let number1 = parseInt(prompt("Podaj liczbe 1"));
    let number2 = parseInt(prompt("Podaj liczbe 2"));
    console.log(number1 + number2);
    myHistory.push(`${number1} + ${number2} = ${number1 + number2}`);
  } else if (choice === "2") {
    let number1 = parseInt(prompt("Podaj liczbe 1"));
    let number2 = parseInt(prompt("Podaj liczbe 2"));
    console.log(number1 - number2);
    myHistory.push(`${number1} - ${number2} = ${number1 - number2}`);
  } else if (choice === "3") {
    let number1 = parseInt(prompt("Podaj liczbe 1"));
    let number2 = parseInt(prompt("Podaj liczbe 2"));
    console.log(number1 * number2);
    myHistory.push(`${number1} * ${number2} = ${number1 * number2}`);
  } else if (choice === "4") {
    let number1 = parseInt(prompt("Podaj liczbe 1"));
    let number2 = parseInt(prompt("Podaj liczbe 2"));
    console.log(number1 / number2);
    myHistory.push(`${number1} / ${number2} = ${number1 / number2}`);
  } else if (choice === "5") {
    console.log(myHistory);
  } else if (choice === "0") {
    break;
  }
}