class Circle{
	constructor(radius){
		this.radius = radius;
		this.areaa = radius;
		//this.diameter = radius;// този ред вика направо set-ъра
	}
	
	get diameter(){
		return 2 * this.radius
	}
	get area(){
		return  Math.PI * this.radius * this.radius;
	}
	
	set diameter(diameter){
		return this.radius = diameter / 2;
	}
}
let c = new Circle(2);

console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);