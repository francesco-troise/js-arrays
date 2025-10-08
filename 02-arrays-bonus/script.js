const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

  let reversedTeachers = "";
  //la variabile deve essere di tipo -let, per poter procere a riassegnazione del suo valore
  //cambio di valore, da "null" a "", per evitare che il valore "null" venga stampato

  for(i = teachers.length - 1; i >= 0; i--){
  //ciclo -for strutturato per scorrere in "reverse" l'array
    reversedTeachers += teachers[i] + " "
    //ad ogni iterazione aggiungi alla varibile, concatenandoli, i valori presenti all indice 
  }

  console.log(reversedTeachers);
  //stampa la variabile a schermo 




// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];
//cambio di valore da "null" a [], cosicchè sia bia un array inizialmente vuoto

for(i = 0; i < teachers.length; i++){
  let name = teachers[i]
  //inizializzo variabile "name, che acquisce man mano i valore presenti nell'array teachers"

  if(name.length >= 5)
  //condizione per verificare se la lunghezza di "name"(che contiene man mano i valori dell array teachers) sia maggiore o uguale a 5
    longNames.push(name)
    //se la condizione è soddisfatta, tramite il motodo .push aggiungo lo specifico valore assunto da "name" all array "longNames"
}
console.log(longNames);




// 3. Rimuovi 'Ed' dall'array teachers

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;