/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const newNames = []

// Invoca la funzione qui e stampa il risultato in console

function charEl(e) {

    for (let i = 0; i < e.length; i++) {
        
        let chars = e.at(i)

        chars = chars[0]

        newNames.push(chars)
    }

}
charEl(names)
console.log(newNames)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]