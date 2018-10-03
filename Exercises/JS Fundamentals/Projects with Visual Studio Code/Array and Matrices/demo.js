/*
let obj = [{
    name: 'lubo',
    address: 'sofia'
},{
    name: 'Ivan',
    address: 'Pleven'
},{
    name: 'Mitkosasasss',
    address: 'Sliven'
},{
    //name: 'Magi',
    address: 'Varna'
}]

let objName =obj.filter((name) =>{
    return name.name !== undefined
    })
    .map((name) =>{
        if(name.name.length <= 6){
        return name.name
        }
    });

let test = objName.filter(e => e !== undefined);
console.log(test)
*/
//-------------------------------------------------------------------------------------------------

/*
let arr = ['Lubo', 'Ivan', 'mitko', 'Pesho', 'Lubo'];

let names = [];
let result = arr.map((name) =>{
    
    if(name.toLowerCase() === 'lubo'){
        names.push(name.toUpperCase())
    }
    return names
})
console.log(names)
*/
//----------------------------------------------------------------------------------------------------

/*
let arr = ['Lusassasabo', 'Ivan', 'mitko', 'Pesho', 'Lubo'];

let names = [];
let test = arr.sort((x,y) => y.length - x.length);
  
console.log(test)
*/

//----------------------------------------------------------------------------------------------------

let nums = ['1', '2sdsdss', '43', '21','sasaa'];
let newArr = [];

let result = nums
            .filter((num) => {
                num = Number(num)
                if(!Number.isNaN(num)){
                   newArr.push(num);
                }
                return 
})           
console.log(result)
            
                
console.log(newArr.reduce((acc, num) => { //връща една стойност
    return acc + num
}))




