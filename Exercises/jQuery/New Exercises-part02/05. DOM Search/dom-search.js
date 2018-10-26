
function domSearch(selector,bool) {

    let add = $('<div class="add-controls">')
        .append($('<label>Enter text</label>'))
        .append($('<input>'))
        .append($('<a class="button" style="display: inline-block;">Add</a>'))
        .appendTo($(selector));

    $('<div class="search-controls">')
        .append('<label>Search</label>')
        .append('<input>').click('input', searchText)
        .appendTo($(selector));

    let divResult = $('<div class="result-controls">')
        .append('<ul class="items-list">')
        .appendTo($(selector));
    $('.button').on('click', function () {
        let currentText = $('.add-controls input')[0];
        if(currentText.value !== ''){
            let currentAddText = add.find('input').val();
            $('ul')
                .append($('<li class="list-item">')
                    .append($('<a class="button">X</a>').click(removeText))
                    .append($(`<strong>${currentAddText}</strong>`)))

        }
        currentText.value = '';
    });
    function removeText() {
        this.parentNode.remove()
    }
    function searchText() {
        $('.search-controls input').keyup(function () {
            let filter = $(this).val();
            $("ul li").each(function () {
                if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                    $(this).css('display', 'none')
                } else {
                    $(this).css('display', 'block')
                }
            });
        });

        //////////////
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                //solve 2

/*
function domSearch(selector,bool) {

    $('<div class="add-controls"></div>')
        .append($('<label>Enter text: </label>')
            .append($('<input>')))
        .append($('<a class="button" style="display: inline-block">Add</a>').click(addTheListItem))
        .appendTo($(selector))
    $('<div class="search-controls"></div>')
        .append($('<label>Search: </label>')
            .append($('<input>').on('input',findTheLists)))
        .appendTo($(selector));
    let results = $('<div class="result-controls"></div>')
        .append($('<ul class="items-list"></ul>'))
        .appendTo($(selector));
    function addTheListItem() {
        $('ul')
            .append($('<li class="list-item"></li>')
                .append($('<a class="button">X</a>').click(deleteElement))
                .append($(`<strong>${$('.add-controls input').val()}</strong>`)))
        results.appendTo($(selector))
        $('.add-controls input').val("")
    }
    function findTheLists() {
        $('li').css('display','block')
        $('li strong').toArray().forEach(element=>{
            let regex;
            if(bool===true){
               regex = new RegExp(''+$('.search-controls input').val()+'', '');
            }
            else{
                regex = new RegExp(''+$('.search-controls input').val()+'', 'i');
            }
            if(!regex.test(element.textContent)){
                $(element.parentNode).css('display','none')
            }
        })
    }
    function deleteElement() {
        this.parentNode.remove()
    }
}
*/

