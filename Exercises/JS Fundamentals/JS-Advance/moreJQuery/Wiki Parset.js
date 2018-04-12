function wikiParser(selector){
    let element = $(selector);

    let h1Pattern = /=(.*?)=/g;
    let h2Pattern = /==(.*?)==/g;
    let h3Pattern = /===(.*?)===/g;
    let linkPattern = /\[\[([^\[\]]+?)\|(.+?)\]\]/g;
    let singleLinkPattern =/\[\[([^\[\]]+?)\]\]/g;
    let boldPattern = /'''(.*?)'''/g;
    let italPattern = /''(.*?)''/g;

    let text = element.text();
    text = text
    .replace(h1Pattern, (m, group) => `<h1>${group}</h1>`)
    .replace(h2Pattern, (m, group) => `<h2>${group}</h2>`)
    .replace(h3Pattern, (m, group) => `<h3>${group}</h3>`)

    .replace(linkPattern, (m, group1, group2) =>
            `<a href ='/wiki/${group1}'>${group2}</a>`
            )
    .replace(singleLinkPattern, (m, group) =>
            `<a href ='/wiki/${group}'>${group}</a>`
            )

    .replace(boldPattern, (m, group) => `<b>${group}</b>`)
    .replace(italPattern, (m, group) => `<i>${group}</i>`);

    element.html(text)
}