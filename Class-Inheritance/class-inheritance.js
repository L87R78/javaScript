
class Person {
  constructor(firstName, lastName , email){
    // if(new.target === Person){
    //   throw new Error ('Abtract class');
      
    // }

    this.firstName = firstName
    this.lastName = lastName
    this.email = email
  }

  toString(){
    return `name: ${this.firstName} lastName: ${this.lastName} email: ${this.email}`;
  }

  sayHello(){
    return console.log(' say Hello ')
  }
  sayGoodbye(){
    return console.log(' say Goodbye ')
  }
};

let demo = new Person('Lubomir', 'Atanasov', 'lubomir@abv.bg')

console.log(demo);


class Teacher extends Person {
  constructor(firstName, lastName, email, subject){
    super(firstName, lastName, email);
    this.subject = subject;
  };

  toString(){
    return `FIRSTNAME: ${this.firstName} / LASTNAME: ${this.lastName} / EMAIL: ${this.email}`;
  }
};

let demo2 = new Teacher('Ivan', 'Mladenov', 'Ivan@abv.bg', 'programming');
console.log(demo2);

class student extends Teacher {
  constructor(firstName, lastName, email, subject, hahaha){
    super(firstName, lastName, email, subject);
    this.hahaha = hahaha;
  };
 
};
let demo3 = new student('Ivan', 'Mladenov', 'Ivan@abv.bg', 'programming', 'hahahaa')

console.log(demo3)