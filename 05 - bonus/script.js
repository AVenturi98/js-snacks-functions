/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = 'Mario';


// Dichiara la funzione qui.

const current = new Date()
const hour = current.getHours()
const morning = 'Buon giorno'
const afternoon = 'Buon pomeriggio'
const night = 'Buona sera'


// Invoca la funzione qui e stampa il risultato in console

function hello(n, person) {
    return console.log(n, person)
}
if (hour < 13) hello(morning, nome)
if (hour > 13 && hour < 17) hello(afternoon, nome)
if (hour > 17) hello(night, nome)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.