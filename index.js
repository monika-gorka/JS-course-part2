// FUNCTION
// kawałek kodu opakowany w nazwę, który możemy używać w różnych miejscach
// funkcja zwraca wartość przy wywołaniu (używaniu) funkcji (choć nie wszystkie funkcji muszą coś zwracać np. funkcja push, console.log)
// funkcja ma argument - parametr - wartość wejściowa - nie musi mieć

// DEKLARACJA FUNKCJI
// function nazwaFunkcji(arguemnty) {skrzynka z naszym kawałkiem kodu - tego nie widzimy, wiemy co może z tej fukcji wyskoczyć}

// PRZYKŁAD
// function myFunction () {
//     let x = "Moje info";
//     console.log(`To jest: ${x}`);
// }

// myFunction();
// to jest wywołanie funkcji i dopiero zadziała


// ***********************
// PRZYKŁAD 2

function myFunction(myText) {
    console.log(`To jest: ${myText}`);
}

myFunction("Moj super text");

// lub

// let x ="Moj super text";
// myFunction(x);