
let person = {
    name: 'Sam',
    walk: function(address, street){
        return console.dir(`${this.name} / ${address} / ${street}`)
    }
}
let context = {
    name: 'Peter',
    age: 12
}
//person.walk();
person.walk.apply(context, ['Varna', 'bul.Georgiev']);
