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
    walk: function(){
        return console.dir(this.name)
    }
}
let context = {
    name: 'Lubomir',
    age: 12
}
//person.walk();
person.walk.call(context);
