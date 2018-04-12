function initializeTable() {
    $("#createLink").click(createCountry);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");
    fixRowLinks();

    function addCountryToTable(country, capital) {
        let tr = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                    .append($('<a href="#">[Up]</a>').click(moveRowUp))
                    .append(' ')
                    .append($('<a href="#">[Down]</a>').click(moveRowDown))
                    .append(' ')
                    .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        $(tr).css('display', 'none');
        $('#countriesTable').append(tr);
                                        //с това му казваме да се
        tr.fadeIn(4000)                // появява бавничко
    }

    function createCountry() {
        let country = $('#newCountryText');             //тук създаваме Create за държава и столица
        let capital = $('#newCapitalText');             //тук създаваме Create за държава и столица
        addCountryToTable(country.val(), capital.val()) //тук създаваме Create за държава и столица
        //country.val('')     //тук им казваме след като сме ги създали да приемат празен стринг- да изчезнат
        capital.val('')     //тук им казваме след като сме ги създали да приемат празен стринг- да изчезнат
        fixRowLinks()
    }
    function moveRowUp(event) {
        let row = $(this).parent().parent()
        if(row.index() > 2) {
            row.fadeOut(500, function () {
                row.insertBefore(row.prev())
                row.fadeIn(500)
                fixRowLinks()
            })

        }
    }
    function moveRowDown() {
        let row = $(this).parent().parent()
        if(!row.is(':last-child')) {
            row.fadeOut(500, function () {
                row.insertAfter(row.next())
                row.fadeIn(500)
                fixRowLinks()
            })

        }
    }
    function deleteRow() {
       let element = $(this).parent().parent()
        element.fadeOut(function () {
            element.remove()
            fixRowLinks()
        })
    }
    function fixRowLinks() {
        $('#countriesTable').find('tr')
            .find('a:contains("Up")').css('display', 'inline')

        $('#countriesTable').find('tr')
            .find('a:contains("Down")').css('display', 'inline')



        let firstRow = $('#countriesTable').find('tr')[2]
        $(firstRow).find('a:contains("Up")').css('display', 'none')

        let lastRow = $('tr')
        $(lastRow.last()).find('a:contains("Down")').css('display', 'none')
    }

}