class Rectangle {
	constructor(width, height, color){
		 this.width = width;
		 this.height = height;
		 this.color = color
	}
	calcArea(){
		return this.width * this.height
	}
}
let rec = new Rectangle(5, 4, 'red');
//console.log(rec.width);
//console.log(rec.height);
//console.log(rec.color);
//console.log(rec.calcArea());
rec.name = 'Lyubomir'; //може да си добавяме каквото си поискаме
console.log(rec);

			//another solve old school
/*
function  Rectangle(wight, height, color){
    this.wight = wight;
    this.height = height;
    this.color = color;

    Rectangle.prototype.area = function () {
        return this.wight * this.height;
    };
}

let rect = new Rectangle(5, 7, 'blue');
console.log(rect.area());
*/

