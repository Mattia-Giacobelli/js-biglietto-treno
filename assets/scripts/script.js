console.log('It Works');


/*Richiesta dati utente */

//Richieta età

const eta = Number(prompt("Inserisci l'età"))

//Richiesta Distanza da percorrere

const distanza = Number(prompt('Inserire i Km di viaggio'))

/*Calcolo del prezzo del viaggio*/

//Calcolo del prezzo di base (0.21 € al km)

const PrezzoPerKm = 0.21

const PrezzoBase = PrezzoPerKm * distanza
console.log(PrezzoBase);
    
//Applicazione sconto minorenni

const ScontoMinorenni = 0.2 * PrezzoBase

//Applicazione sconto over 65

const ScontoOver65 = 0.4 * PrezzoBase


//Output prezzo finale in forma umana

if (eta < 18) {
    const PrezzoFinaleUnder = PrezzoBase - ScontoMinorenni
    console.log(PrezzoFinaleUnder.toFixed(2));
} else if (eta > 65) {
    const PrezzoFinaleOver = PrezzoBase - ScontoOver65
    console.log(PrezzoFinaleOver.toFixed(2));
}