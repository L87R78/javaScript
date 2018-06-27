/*
function func() {
    console.log(this);
    //console.log(this.name);
    //console.log(this.age);

}

let obj = {
    name: 'Lubo',
    age: '18',
    f: func
};
obj.f(); //Object {name: 'Lubo'}
//func();
*/

/*
function func() {
    let inner = () => console.log(this); // arrow func
    inner()

}

let obj = {
    name: 'Lubo',
    age: '18',
    f: func
};
obj.f(); //Object {name: 'Lubo'}
//func();
*/

/*
// Call and Apply

let lubo = {
    name: 'Magi',
    hello: function (thing) {
        console.log(this.name + ' says hello ' + thing)
    }
}
lubo.hello('word'); // Magi says hello world

let ivan = {name: 'Ivan'};
lubo.hello.call(ivan, 'now');  //Ivan says hello now   // call променя this
lubo.hello.apply(ivan,['again']);  //Ivan says hello again // apply is for array
*/
/*
//example

function func() {
    console.log(this)
}
let obj = {name: 'Lubo',
            age: 22};
func.call(obj);



function solution (input) {
    //return Math.max(...input);
    return Math.max.apply('stamat', input);
    //return Math.max(...input);
}

console.log(solution([-3, -1, -34, 43, -50]));;
*/

/*
//and bind

let lubo = {
    name: 'Magi',
    hello: function (thing) {
        console.log(this.name + ' says hello ' + thing)
    }
}
lubo.hello('word'); // Magi says hello world

let ivan = {name: 'Ivan'};
let helloIvan = lubo.hello.bind(ivan);
lubo.hello('word');  //Magi says hello word
helloIvan('form me');  //Ivan says hello from me
*/















