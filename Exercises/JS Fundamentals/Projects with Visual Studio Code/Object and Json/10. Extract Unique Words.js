function solve(arr){
    let uniqueNames = [];
    for (let iterator of arr) {
        let str = iterator.toLowerCase();
        let arrStr = str.split(/[^\w]+/); //check for ''
        arrStr = arrStr.slice(0, arrStr.length - 1);
      
        for(var i =0; i < arrStr.length ; i++){
            if(uniqueNames.indexOf(arrStr[i]) == -1){
                uniqueNames.push(arrStr[i]);
            }
        }
        
    };
    console.log(uniqueNames.join(', '))
};
solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit quis hendrerit dui.',
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'])