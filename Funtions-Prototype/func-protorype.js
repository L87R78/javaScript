function Person(name) {
    this.name = name;
    this.age = 12;
}
Person.prototype = {
    talk: function () {
        return 'Hello talk';
    }
}

let lubo = new Person('NameOne')
let gosho = new Person('NameTwo')


function extendPrototype(cla) {
    cla.prototype.something = 'Something'
    cla.prototype.saySomething = function () {
        return 'Say something'
    }
}

extendPrototype(Person);

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
