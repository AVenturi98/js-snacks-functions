/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


const newArray = []

// Invoca la funzione qui e stampa il risultato in console

function countVocal() {
    const vocalLetter = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        const element_Included = vocalLetter.includes(element)
        if (element_Included == true) {
            newArray.push(element_Included)
            console.log(element_Included, element, newArray.length)
        }
    }
    console.log(newArray.length)
}
countVocal()


//Risultato atteso se si passa 'javascript': 3 (a, a, i)