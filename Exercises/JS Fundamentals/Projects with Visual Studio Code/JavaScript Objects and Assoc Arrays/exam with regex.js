function solve(str){

    let svgRegex = /<svg>((.|\n)*?)<\/svg>/g;
    let catRegex = /<cat><text>(.|\n)*?\[((.|\n)*?)](.|\n)*?<\/text><\/cat>\s*<cat>((.|\n)*?)<\/cat>/g;
    let valueRgex = /<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>/g;

    if(!svgRegex.test(str)){
        console.log("No survey found")
    }
    else if(!catRegex.test(str)){
        console.log("Invalid format")
    }
    else{
        catRegex  =/<cat><text>(.|\n)*?\[((.|\n)*?)](.|\n)*?<\/text><\/cat>\s*<cat>((.|\n)*?)<\/cat>/g;
        let label = catRegex.exec(str)[2];
       
        let votes = 0;
        let sumOfRatings = 0;

        let values = valueRgex.exec(str)
       
        while(values){
            let rating = +values[1];
            let votesCount = +values[2];
            votes += votesCount;
            sumOfRatings += votesCount * rating;
            values = valueRgex.exec(str)
        }
        let avgRating = parseFloat((sumOfRatings / votes).toFixed(2));
        console.log(`${label}: ${avgRating}`)
        
    }

}
solve("<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>");