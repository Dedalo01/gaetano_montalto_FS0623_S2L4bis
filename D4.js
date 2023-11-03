/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const baseX = 10;
const altezzaX = 20;

function area(l1, l2) {
  return l1 * l2;
}

console.log("ES1.", area(baseX, altezzaX));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const int1 = 5;
const int2 = 11;

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  }
  return num1 + num2;
}

console.log("ES2.", crazySum(int1, int2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 13;
const numMaggiore19 = 30;

function crazyDiff(num1) {
  const NUM = 19;
  const SUBTRACTION = num1 - NUM;
  if (num1 > NUM) {
    return Math.abs(SUBTRACTION) * 3;
  }
  return Math.abs(SUBTRACTION);
}

console.log("ES3.", crazyDiff(numero));
console.log("ES3", crazyDiff(numMaggiore19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numBou = 4;
const numBou400 = 400;
const numBou50 = 50;

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) return true;
  return false;
}

console.log("ES4.", boundary(numBou));
console.log("ES4.", boundary(numBou400));
console.log("ES4.", boundary(numBou50));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const EPICODE_WORD = "EPICODE";
const stringa1 = "EPICODE è incredibile!";
const stringa2 = "è incredibile EPICODE!";

function epify(str) {
  if (str.startsWith(EPICODE_WORD)) {
    return str;
  }
  return `${EPICODE_WORD} ${str}`;
}

console.log("ES5.", epify(stringa1));
console.log("ES5.", epify(stringa2));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 21;
const n2 = 35;
const n3 = 100;

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) return true;
  return false;
}

console.log("ES6.", check3and7(n1));
console.log("ES6.", check3and7(n2));
console.log("ES6.", check3and7(n3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ciaoMa = "ciao mamma guarda come mi diverto!";

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("ES7.", reverseString(ciaoMa));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const diverseParole =
  "fatti non foste a viver come bruti, ma per seguir virtute e canoscenza.";

function upperFirst(str) {
  let splitStr = str.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
  }
  return splitStr.join(" ");
}

console.log("ES8.", upperFirst(diverseParole));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const stringaTaglia = "@AlPacino has entered the chat!";

function cutString(str) {
  let splitStr = str.split("");
  splitStr.shift();
  splitStr.pop();

  return splitStr.join("");
}

console.log("ES9.", cutString(stringaTaglia));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const randomGenerator = 10;

function giveMeRandom(n) {
  let randomArr = [];

  for (let i = 0; i < n; i++) {
    randomArr.push(Math.floor(Math.random() * 11));
  }
  return randomArr;
}

console.log("ES10.", giveMeRandom(randomGenerator));

export { giveMeRandom };
