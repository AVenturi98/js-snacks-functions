/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console

// function rowWelcome(n) {
//     const saluto = 'Ciao ' 
//     return saluto + n
// }

// console.log(rowWelcome(name))

const ciaone = a => {
    return 'Ciao ' + a
}
console.log(ciaone(name))
//Risultato atteso se si passa 'Mario': // ciao Mario