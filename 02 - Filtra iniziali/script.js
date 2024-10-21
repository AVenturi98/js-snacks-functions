/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const namesFilter = [];

// Invoca la funzione qui e stampa il risultato in console

function filterName(n) {
    const firstLetterSearch = 'A';

    for (let i = 0; i < n.length; i++) {
        
        const name = n[i]

        const letterFind = name[0]

        if (letterFind ===firstLetterSearch) {
            namesFilter.push(name)
        }
    }
}
filterName(names)
console.log(namesFilter)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]