function Person(name) {
    this.name = name;
    this.age = 12;
}
Person.prototype = {
    talk: function () {
        return 'Hello talk';
    }
}
//console.log(Person);


let lubo = new Person('Lubo')
//console.log(lubo);
let gosho = new Person('Gosho')
//console.log(gosho);


function extendPrototype(cla) {
    cla.prototype.something = 'Something'
    cla.prototype.saySomething = function () {
        return 'say Something'
    }
}

extendPrototype(Person);
//console.log(gosho.something)




// --------------------------------------------------------------------

function Angel(name, age) {
    this.name = name;
    this.teeth = 'white'
    this.age = age;
}
Angel.prototype = {
    eat: function () {
        return 'Hello Angel';
    }
}
let AngelDemo = new Angel('Angel', '1')
//console.log(AngelDemo)



function Bobi(name, age) {
    this.namme = name;
    this.age = age;
}
Bobi.prototype = {
    talk: function () {
        return 'Hello Bobi';
    }
}

Object.assign(Bobi.prototype, Angel.prototype)
let BobiDemo = new Bobi('Bobi', '2');
// console.log(BobiDemo);
// console.log(BobiDemo.name);


// --------------------------------------







