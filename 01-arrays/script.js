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
  //la variabile deve essere di tipo -let, per poter procedere a riassegnazione del suo valore

  for(i = 0; i < teachers.length; i++){
  //inizializzazione ciclo -for, gestione della condizione tramite -teachers.leng

    if( i === 3){
    //condizione che controlla in quale momento si raggiunge la posizione desiderata all'interno dell'array
      fourthTeacher = teachers[i]
      //assegno alla variabile il valore della stringa indicato da -i
    }
  }

  console.log(fourthTeacher)
  //stampo a schermo la variabile

  


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

  teachers.splice(4, 1, "Patrick")
  //tramite il metodo .splice determino -da- quale indice eliminare, -quanti- elementi eliminare, e con cosa sostituirli
  console.log(teachers)
  //stampo a schermo l'array 




// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

  const lastTeacher = teachers.pop()
  //tramite il metodo .pop rimuovo l'ultimo elemento e lo assegno alla variabile

  console.log(lastTeacher)
  //stampo a schermo la variabile che ora contiene l'ultimo elemento estratto dall'array

  console.log(teachers)
  //l'array ora risulta mutato, ho un elemento in meno




// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

  const firstTeacher = teachers.shift()
  //tramite il metodo .shift rimuovo il primo elemento e lo assegno alla variabile(gli altri elementi retrocedono cambiando indice)

  console.log(firstTeacher)
  //stampo a schermo la variabile che ora contiene il primo elemento dell'array

  console.log(teachers)
  //stampo a schermo l'array, ora privo del suo elemento "Nathan"




// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

  teachers.push("Vanessa")
  //tramite il metodo .push aggiungo un elemento alla fine dell'array

  console.log(teachers)
  //stampo a schermo l'array




// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

  teachers.unshift("Sara")
  //tramite il metodo unshift aggiungo un elemeto al primo posto di un array(gli altri elementi slittano cambiando indice)

  console.log(teachers)
  //stampo a schermo l'array




// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

const lewisIndex = teachers.indexOf("Lewis")
  //tramite li metodo .indexOf ricerca l'indice di un determinato elemento richiesto

  console.log(lewisIndex)
  //stampo a schermo la variabile che contiene il valore numerico associato all'indice dell'elemento ricercato




// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

  let isTeachersEmpty = null
  //la variabile deve essere di tipo -let, per poter procedere a riassegnazione del suo valore

    if (teachers.length === 0){
      //Condizione per verificare se la lunghezza di un array è pari a zero, in tal caso sarà vuoto

      isTeachersEmpty = true
      //assegnazione valore "true" in accordo con la casistica

      console.log("L'array risulta vuoto")
      //stampa del messaggio relativo al caso di array vuoto

      }else{
      //alternativa alla prima condizione  

      isTeachersEmpty = false
      //assegnazione valore "false" in accordo con la casistica

      const lunghezza = teachers.length
      //dichiaro varibile utile per la stampa a schermo

      console.log(`L'array risulta contenere ${lunghezza} elementi`)
      //stampa a schermo del messaggio relativo al caso di array contenente elementi 
      }