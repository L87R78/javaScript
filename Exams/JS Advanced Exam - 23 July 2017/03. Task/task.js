class Task {

   constructor(title, deadLine){
       this.title = title;
       this.deadLine = deadLine;
       this.status = "Open";

   }
   get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
    get deadLine() {
        return this._deadLine;
    }

    set deadLine(value) {
       let a = 0;
       if(value < Date.now()){
          // throw new Error ("Invalid Date!")
       }
        this._deadLine = value;
    }

    toString(){
       if(this.status === 'Open'){
           return `[${"\u2731"}] ${this.title}(deadline: ${this.deadLine})`;
       }else if(this.status === 'In Progress'){
           return `[${"\u219D"}] ${this.title}(deadline: ${this.deadLine})`;
       }else if(this.status === 'Complete'){
           return `[${"\u2714"}] ${this.title}(deadline: ${this.deadLine})`;
       }else{

       }
    }
    static comparator(a, b){
       
    }
}
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
 let date3 = new Date();
 date3.setDate(date3.getDate() + 3); // Set date 3 days from now
 let task3 = new Task('football', date3);
 // Create two tasks with deadline set to current time
 let task4 = new Task('Task 4', new Date());
 let task5 = new Task('Task 5', new Date());
 task1.status = 'In Progress';
 task3.status = 'In Progress';
 task5.status = "Complete";
 let tasks = [task1, task2, task3, task4, task5];
 setTimeout(() => {
     tasks.sort(Task.comparator);
     console.log(tasks.join('\n'));
 }, 1000); // Sort and print one second later
