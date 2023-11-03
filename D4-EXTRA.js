import { giveMeRandom } from "/D4.js";

// Esercizi aggiuntivi (facoltativi) per D4
console.log("\nESERCIZI EXTRA");

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const randomArr = giveMeRandom(10);
console.log("EXTRA ES1. array di numeri randomici:", randomArr);

function checkArray(arr) {
  let sum = 0;

  for (let el of arr) {
    if (el > 5) {
      console.log("Valore maggiore di 5:", el);
      sum += el;
    }
  }
  return sum;
}

console.log("EXTRA ES1.", checkArray(randomArr));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  {
    price: 100,
    name: "Cornice",
    id: 125,
    quantity: 1,
  },
  {
    price: 599,
    name: "Playstation 5",
    id: 31,
    quantity: 1,
  },
  {
    price: 5.97,
    name: "Card Sleeves",
    id: 12,
    quantity: 27,
  },
  {
    price: 23,
    name: "Rasoio Gillette",
    id: 165,
    quantity: 2,
  },
  {
    price: 2.99,
    name: "Decorazioni Natalizie Assortite",
    id: 420,
    quantity: 30,
  },
];

function shoppingCartTotal(cart) {
  let totalCartPrice = 0;
  for (let item of cart) {
    totalCartPrice += item.price * item.quantity;
  }
  return parseFloat(totalCartPrice.toFixed(2));
}

console.log("EXTRA ES2.", shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const itemX = {
  price: 59.78,
  name: "Mazzo Commander Magic: The Gathering",
  id: 899,
  quantity: 2,
};

function addToShoppingCart(item) {
  shoppingCart.push(item);
}

addToShoppingCart(itemX);
console.log("EXTRA ES3.", shoppingCartTotal(shoppingCart));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(cart) {
  let maxPriceItem = {
    price: 0,
  };

  for (let item of cart) {
    if (item.price > maxPriceItem.price) {
      maxPriceItem = { ...item };
    }
  }

  return maxPriceItem;
}

console.log("EXTRA ES4.", maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(cart) {
  return cart.pop();
}

console.log("EXTRA ES5.", latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const randomNumber = Math.floor(Math.random() * 10);
console.log("EXTRA ES6.", randomNumber);

function loopUntil(num) {
  let counter = 0;

  while (counter < 3) {
    let randomN = Math.floor(Math.random() * 10);
    console.log(randomN);

    // Prof qui ho aggiunto l'or perchè in caso di randomNumber = 9 si genera un loop infinito
    // visto che entrambi i numeri non possono superare 9
    if (randomN > num || (num === 9 && randomN === 9)) {
      counter++;
      console.log(`counter: ${counter}`);
    }
  }
}

loopUntil(randomNumber);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const variousArr = [
  "Banane",
  3,
  { surname: "Montalto", eta: 28 },
  8,
  20,
  11,
  ["hello", "NOON", 8, 0, undefined],
  15,
];

function average(arr) {
  let sum = 0;
  let totalEl = 0;

  for (let el of arr) {
    if (typeof el === "number") {
      sum += el;
      totalEl += 1;
    }
  }

  return parseFloat((sum / totalEl).toFixed(2));
}

console.log("EXTRA ES7.", average(variousArr));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const longArr = [
  "Wellaaaa",
  "Hello it's me",
  "ehy",
  "no woman no cry",
  "precipitevolissimevolmente",
  "yolo",
];

function longest(arr) {
  let longestElement = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestElement.length) {
      longestElement = arr[i];
    }
  }

  return longestElement;
}

console.log("EXTRA ES8.", longest(longArr));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const emailGiusta = "Buongiorno, volevo chiederle come centrare un div.";
const emailSpam = "Buongiorno, volevo SPAM come centrare un div.";
const emailScam = "Buongiorno, volevo chiederle come centrare un SCAM.";

function filtroAntiSpam(emailContent) {
  const BANNED_WORD1 = "SPAM";
  const BANNED_WORD2 = "SCAM";
  if (
    emailContent.includes(BANNED_WORD1) ||
    emailContent.includes(BANNED_WORD2)
  )
    return false;

  return true;
}

console.log("EXTRA ES9.", filtroAntiSpam(emailGiusta));
console.log("EXTRA ES9.", filtroAntiSpam(emailScam));
console.log("EXTRA ES9.", filtroAntiSpam(emailSpam));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const pastDate = new Date("2023-11-01");
console.log(pastDate);

function howManyDays(date) {
  const todayDate = new Date();
  const dayTimeMillisec = 1000 * 3600 * 24;

  return (todayDate.getTime() - date.getTime()) / dayTimeMillisec;
}

console.log("EXTRA ES10.", howManyDays(pastDate));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let xVal = 3;
let yVal = 3;

let xVal2 = 4;
let yVal2 = 2;

function matrixGenerator(x, y) {
  let matrix = [];

  for (let i = 0; i < x; i++) {
    matrix[i] = [];
    for (let j = 0; j < y; j++) {
      matrix[i][j] = `${i}${j}`;
    }
  }

  return matrix;
}

console.log("EXTRA ES11.", matrixGenerator(xVal, yVal));
console.log("EXTRA ES11.", matrixGenerator(xVal2, yVal2));
// with flat()
console.log("EXTRA ES11.", matrixGenerator(xVal, yVal).flat());
console.log("EXTRA ES11.", matrixGenerator(xVal2, yVal2).flat());
