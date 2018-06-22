function solve(input) {

    let list = input.split(',');

    let del = list.pop();

    let companies = list[0].split(',').toString();
    let  delimeter = list[1].split(',');

    let newDelimeter = delimeter[0].replace(/['"]+/, '');

    let newListCompanies = companies.split(newDelimeter);

    let valid = [];
    let invalid = [];

    for (let i = 2; i < list.length; i++) {
        let count = 0;
        let tempStr = '';
        let insideList = list[i].split(' ');

        for (let j = 0; j < insideList.length; j++) {
            let word = insideList[j].toLowerCase();
            word = word.replace(/[, "[\]]+/gi, '');
            tempStr += word + ' ';

            for (let company of newListCompanies) {
                let comp = company.replace(/[, "[\]]+/gi, '').toLowerCase();
                if(comp === word){
                    count++;
                }
            }
        }
        if(count === newListCompanies.length){
            valid.push(tempStr);
        }else{
            invalid.push(tempStr);
        }
    }
    if(valid.length > 0){
        console.log('ValidSentences');

        for (let i = 0; i < valid.length; i++) {
            console.log(`${i + 1}. ${valid[i]}`)
        }
    }
    if(invalid.length > 0){
        console.log('==============================');
        console.log('InvalidSentences');

        for (let i = 0; i < invalid.length; i++) {
            console.log(`${i + 1}. ${invalid[i]}`)
        }
    }

}
solve('["bulgariatour@, minkatrans@, koftipochivkaltd","@,","Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour","dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans","someone continues as no "]');