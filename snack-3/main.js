const carType = ["Benzina", "Disel", "Gpl", "Elettrica", "ibrido"];
const colori = ["Rosso","Verde","Blu","Nero","Grigio"]
const model = ["Bmw", "Fiat", "Ferrari", "Lamborghini"]


class Car {
	constructor(carType, colori , model) {
		this.carType = Math.floor(Math.random() * carType);
		this.colori = Math.floor(Math.random() * colori);
		this.model = Math.floor(Math.random() * model);
	} 	    
}


let garage = []
for (let i = 0; i < 10; i++) {
    garage.push(new Car(carType,colori,model))
}


