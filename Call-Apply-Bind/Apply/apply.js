
let person = {
    name: 'Ivan',
    walk: function(address, street){
        return console.dir(`${this.name} / ${address} / ${street}`)
    }
}
let context = {
    name: 'Lubomir',
    age: 12
}
//person.walk();
person.walk.apply(context, ['Varna', 'bul.Georgiev']);
