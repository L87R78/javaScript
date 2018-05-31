function employeeData(input) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/gm;

    for (let i = 0; i < input.length; i++) {
        let match = regex.exec(input);

        if(match === null){
            break;
        }
        console.log(`Name: ${match[1]}`);
        console.log(`Position: ${match[3]}`);
        console.log(`Salary: ${match[2]}`);
    }
}
employeeData('Isacc - 1000 - CEO\n' +
    'Ivan - 500 - Employee\n' +
    'Peter - 500 - Employee\n');
