let person = {
    name: 'Ivan',
    walk: function(address, street){
        return console.dir(`${this.name} / ${address} / ${street}`)
    }
}

let secondPersson = {
    name: 'Momchil'
}
const myWalk = person.walk.bind(secondPersson);
//myWalk('Greece', 'Tasos')

let obj = {
    name: 'Lubo',
    movies: ['TROY', 'CLIMAX', 'CAPTAIN MARVEL'],
    printMovies: function(){
        console.log(this.name)

        function printing(movie) {
             console.log(`${this.name} has watched ${movie}`);
        }
        const myPrinting = printing.bind(this)
        this.movies.forEach(myPrinting)
    }
};

obj.printMovies();
