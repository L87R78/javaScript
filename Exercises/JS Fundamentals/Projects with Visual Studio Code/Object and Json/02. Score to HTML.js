function scoreHTML(arr) {
    let resultArr = JSON.parse(arr)
    let str = '<table>\n'
    let keys = Object.keys(resultArr[0])
    str += `    <tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`

    for(let obj of resultArr){
        str += `    <tr><td>${escapeChars(obj[keys[0]]+ '')}</td><td>${escapeChars(obj[keys[1]]+ '')}</td></tr>\n`
    }
     str += '</table>'
    console.log(str)

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}
//scoreHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')

/*
function escapeChars(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}
*/