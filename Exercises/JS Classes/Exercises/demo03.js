

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





