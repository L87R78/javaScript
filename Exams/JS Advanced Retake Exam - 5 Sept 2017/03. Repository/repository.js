class Repository {
   constructor(props) {
       this.props = props;
       this.data = new Map();
       this.id = 0;
   }

   get count(){
       return this.id;
   }

    add(entity){
        for (let key in this.props){

            if(!entity.hasOwnProperty(key)){
                throw new Error (`Property ${key} is missing from the entity!`);
            }
            if(this.props[key] !== typeof entity[key]){
                throw new TypeError(`Property ${key} is of incorrect type!`)
            }
        }

        this.data.set(this.id, entity);

        return this.id++;
    }
    get(id){
       if(!this.data.has(id)) {
           throw new Error("Entity with id: {id} does not exist!");
       }
       return this.data.get(id)

    }
    update(id, newEntity){
       if(!this.data.hasOwnProperty(id)){
           throw new Error (`Entity with id: ${id} does not exist!". `)
       }
        return this.data.set(id, newEntity);
    }
    del(id){
       if(id < 0){
           throw new Error (`Entity with id: ${id} does not exist!`)
       }
        this.id--;
       return this.data.delete(id);
    }
}
// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1

 entity = {
     name: 'Valio',
     age: 19,
     birthday: new Date(1998, 0, 7)
 };
 repository.update(1, entity);

 repository.del(0);
 console.log(repository.count); // Returns 1
 