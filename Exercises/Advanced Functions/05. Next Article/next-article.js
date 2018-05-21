function getArticleGenerator(articles) {

    return function () {
        let lengthArr = articles.length;
        //console.log(lengthArr)
        if(lengthArr > 0 ){
            //$('#content').append($(`<article>${articles.shift()}</article>`));

            //or

            $('#content').append($(`<p>${articles.shift()}</p>`));
        }
    }
}
