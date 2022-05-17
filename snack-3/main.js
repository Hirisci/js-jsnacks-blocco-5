const carType = ["Benzina", "Disel", "Gpl", "Elettrica", "ibrido"];
const colori = ["Rosso","Verde","Blu","Nero","Grigio"]
const model = ["Bmw", "Fiat", "Ferrari", "Lamborghini"]


class Car {
	constructor(carType, colori , model) {
		this.carType = carType[Math.floor(Math.random() * carType.length)];
		this.colori = colori[Math.floor(Math.random() * colori.length)];
		this.model = model[Math.floor(Math.random() * model.length)];
	} 	    
}


let garage = []
for (let i = 0; i < 10; i++) {
    garage.push(new Car(carType,colori,model))
}


console.log(garage.filter(elm => elm.carType==="Benzina"))
console.log(garage.filter(elm => elm.carType==="Disel"))
console.log(garage.filter(elm => elm.catType!=="Benzina" && elm.carType!=="Disel"))

