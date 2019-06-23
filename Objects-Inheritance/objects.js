let objLubo = {
    name: 'Lubomir',
    walk: function(){
        console.log('walk Lubomir');
    }
}
//console.log(objLubo)

let objIvan = Object.create(objLubo)
objIvan.name = 'Ivan'

objLubo.address = 'Vrajdebna'
//console.log(objIvan)



let firstPerson = {
    name: 'Lubomir',
    teeth: 'white',
    walk: function(){}
};
//console.log(firstPerson);

let secondPerson = Object.create(firstPerson);

secondPerson.eat = function(){};
//console.log(secondPerson);

