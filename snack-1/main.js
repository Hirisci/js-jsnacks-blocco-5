// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

class Zucchina {
    constructor(height, width,type) {
      this.height = height;
      this.width = width;
      this.type = type;
    }
  }
  
const arr = [new Zucchina("verde",520,16),
                    new Zucchina("rigata",420,3),
                    new Zucchina("tonda",620,3),
                    new Zucchina("trombetta",425,4),
                    new Zucchina("sicilina",320,20),
                    new Zucchina("nera",220,16),
                    new Zucchina("milano",320,9),
                    new Zucchina("faenza",420,12),
                    new Zucchina("roamana",620,10),
                    new Zucchina("toscana",720,5)]

let totale = 0
for (let i = 0; i < arr.length; i++) {
    totale = arr[i].height;    
}

let msg = `Il peso delle zucchine è di ${totale} grammi`

console.log(msg)