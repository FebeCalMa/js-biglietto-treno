console.log("JS OK!");

/*
Il programma dovrà chiedere all'utente il 
numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare 
il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

//dati da chiedere
const kmDaPercorrere = parseInt(prompt("Km da percorrere?"));
const eta = parseInt(prompt("Età"));

//calcolare il costo dei km
if (!isNaN(kmDaPercorrere) && !isNaN(eta)) {
  let prezzoTotale = kmDaPercorrere * 0.21;

  //prezzo s'è minore da 18
  if (eta < 18) {
    prezzoTotale = prezzoTotale * 0.2;

    //prezzo s'è maggiore 65
  } else if (eta > 65) {
    prezzoTotale = prezzoTotale * 0.4;
  }

  //Totale in linguaggio umano
  document.getElementById(
    "prezzo-biglietto"
  ).innerText = `Il prezzo è ${prezzoTotale.toFixed(2)} 
  per km ${kmDaPercorrere} ed età ${eta}`;
}
