// function person(){
//     console.log(this.name + ' ' + this.age);
// }
// let context = {
//     name: 'Lubomir',
//     age: 12
// }
// person.call(context);


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
person.walk.call(context, 'Sofia', '3232asa');
