const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE


// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

  let fourthTeacher = null;
  //la variabile deve essere di tipo -let, per poter procere a riassegnazione del suo valore

  for(i = 0; i < teachers.length; i++){
  //inizializzazione ciclo -for, gestione della condizione tramite -teachers.leng

    if( i === 3){
    //condizione che controlla in quale momento si raggiunge la posizione desiderata all'interno dell'array
      fourthTeacher = teachers[i]
      //assegno alla variabile il valore della stringa indicato da -i
    }
  }

  console.log(fourthTeacher);
  //stampo a schermo la variabile

  


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers.splice(4, 1, "Patrick")
//tramite il metodo .splice determino -d-a quale indice eliminare, -quanti- elementi eliminare, e con cosa sostituirli
console.log(teachers)
//stampo a schermo l'array 




// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = teachers.pop()
//tramite il metodo .pop rimuovo l'ultimo elemento e lo assegno alla variabile

console.log(lastTeacher);
//stampo a schermo la variabile che ora contiene l'ultimo elemento estratto dall'array

console.log(teachers);
//l'array ora risulta mutato, ho un elemento in meno




// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift()
//tramite il metodo .shift rimuovo il primo elemento e lo assegno alla variabile(gli altri elementi cambiano indice)

console.log(firstTeacher)
//stampo a schermo la variabile che ora contiene il primo elemento dell'array

console.log(teachers)
//stampo a schermo l'array, ora privo del suo elemento "Nathan"






// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;