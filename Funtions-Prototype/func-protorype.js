function Person(name){
    this.name = name;
    this.age = 12;
}


Person.prototype = {
    talk: function(){
        return 'Hello talk';
    }
}
console.log(Person);


let lubo = new Person('Lubo')
console.log(lubo);
let gosho = new Person('Gosho')
console.log(gosho);


function extendPrototype(cla){
    cla.prototype.something = 'Something'
    cla.prototype.saySomething = function() {
        return 'say Something'
    }
}

extendPrototype(Person);
console.log(gosho.something)




