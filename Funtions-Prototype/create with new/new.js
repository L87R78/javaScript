function Human(name, address) {
    this.name = name || 'Pesho'
    this.address = address
    this.walk = function(){
        console.log(this.name)
    }
}

Human.prototype.sleep = function(){
    console.log('sleep')
}

let obj1 = new Human('Lubomir', 'Sofia')
let obj2 = new Human('Petkan', 'Vraca')

console.log(obj1)
