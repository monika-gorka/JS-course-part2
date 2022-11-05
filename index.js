// TABLICA
// zmienna przechowująca wiele wartości
// struktura programistyczna
// ma nazwę, do której możemy się odwoływać
// tablica zawiera elementy - "mniejsze pudełka z wartościami" z unikalnymi identyfikatorami - indeksami
// indeksujemy - numerujemy kolejne wartości w tablicy, zaczynając od "0"
// [] - wskazują, że jest to tablica
// typy wartości powinny być jednolite

// TABLICA
// let nazwa_tablicy [element1, element2, ...]

// PUSTA TABLICA
// let tab = [];

// TABLICA 5-ELEMENTOWA, NAJWYŻY INDEKS = 4, NAJWIĘKSZA WARTOŚĆ = 98
// let tab = [1, 2, 4, 5, 98]

// ODWOŁANIE DO KONKRETNEGO ELEMENTU W TABLICY - ZA POMOCĄ INDEKSU
// console.log(tab[3]);
// wyświetli się 5

// ODWOŁANIE DO INDEKSU, KTÓRY NIE ISTNIEJE
// wyświetli się undefined

// FUNKCJA PUSH - dodawanie elementu do tablicy
// let tab = []; - pusta tablica
// tabl.push(4); - dodajemy element 4
// console.log[0]; - mamy tablicę 1-elementową więc indeks = 0

// PĘTLA FOR - WYŚWIETLANIE WSZYSTKICH ELEMENTÓW TABLICY
// let table = [6, 4, 2, 7, 2];
// for(let i = 0; i < tab.length; i++) {
//     console.log(tab[i]);
// }

// wyświetlą się wszystkie elementy tablicy
// i - będzie miało wartości indeksu po kolei (mamy zmienną zwiększającą się o 1 od 0)
// tab.length - właściwośc mówiąca o ilości elementów w tablicy czyli u nas 4 - do tej wartości będzie szła pętla

// STRING A TABLICA
// let x = "test";
// let y = ["t", "e", "s", "t"];
// x[0]

// PĘTLA FOR - IN- wyświetlanie kolejnych indeksów
// for(let x in tab){
//     console.log(tab[x])
// }

// PĘTLA FOR - OF- wyświetlanie kolejnych wartości
// for(let x of tab){
//     console.log(tab[x])
// }

// FUNKCJE W TABLICACH
// tab.toString - wyświetli tablicę jako tekst
// tab.join('*') - wyświetli separator * między elementami
// tab.pop() - usuwa ostatni element z tablicy i go zwraca
// tab.shift() - usuwa pierwszy element a pozostałe przesuwa o indeks niżej
// tab.unshift() - dodaje element na początku i przesuwa o indeks wyżej

// CONST - tworząc zmienną referencyjną tworzymy tablicę jako const dla bezpieczeństwa.
// Możemy oczywiście zmieniać wartości w tablicach ale nie zmieniamy jej referencji
// const tab = [];
// tab.push(3);
