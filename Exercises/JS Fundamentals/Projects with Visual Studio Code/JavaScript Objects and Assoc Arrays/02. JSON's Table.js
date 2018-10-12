/*
function jsonTable(arr){
    console.log("<table>")
    for (let str of arr) {
            let split = str.split(/[:,]/);
            let name = split[1];
            let position = split[3];
            let salary = split[5];

            name =  name.replace(/\"/g, "");
            position =  position.replace(/\"/g, "");
            salary =  salary.replace(/[\"}]+/g, "");

            console.log("	<tr>")
            console.log(`		<td>${name}</td>`)
            console.log(`		<td>${position}</td>`)
            console.log(`		<td>${salary}</td>`)
            console.log("	</tr>")
    }
    console.log("</table>")
}
jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']);
*/

function solution (jsonObject=[]) {
    let html = '<table>\n';

    jsonObject.forEach(line=>{
        html+='<tr>\n';
        let obj = JSON.parse(line);
        let name = obj['name'];
        html+=`<td>${name}</td>\n`;
        let position = obj['position'];
        html+=`<td>${position}</td>\n`;
        let salary = obj['salary'];
        html+=`<td>${salary}</td>\n`;
        html+='<tr>\n'
    })
    
    html+='</table>';
    console.log(html)
}
solution([ '{"name":"Pesho","position":"Promenliva","salary":100000}',

    '{"name":"Teo","position":"Lecturer","salary":1000}',

    '{"name":"Georgi","position":"Lecturer","salary":1000}' ])