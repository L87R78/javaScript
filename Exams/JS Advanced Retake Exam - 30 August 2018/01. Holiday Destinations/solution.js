function addDestination() {
    let getCity = $('#input input')[0];
    let getCountry = $('#input input')[1];
    let getSeasson = $('#seasons :selected').text();

    if(getCity.value !== '' && getCountry.value !== ''){
        var createDestinationInTable =
            $('<tr>'+
                '<td>'+ getCity.value + ", " + getCountry.value +'</td>'+
                '<td>'+ getSeasson +'</td>'+
                '</tr>');
        $('#destinationsList').append(createDestinationInTable);

    }

    let countSummer = $('#summaryBox #summer')[0].value;
    let countWinter = $('#summaryBox #winter')[0].value;
    let countAutumn = $('#summaryBox #autumn')[0].value;
    let countSpring = $('#summaryBox #spring')[0].value;

    if(getSeasson === "Summer"){
        countSummer++;
    }
    else if(getSeasson === "Winter"){
        countWinter++;
    }
    else if(getSeasson === "Autumn"){
        countAutumn++;
    }
    else if(getSeasson === "Spring"){
        countSpring++
    }

    $('#summaryBox #summer')[0].value = countSummer
    $('#summaryBox #winter')[0].value = countWinter
    $('#summaryBox #autumn')[0].value = countAutumn
    $('#summaryBox #spring')[0].value = countSpring

    getCity.value = '';
    getCountry.value = '';

}


                        //solve 02
/*
function  addDestination() {
    let firstRow = $('#input');
    let city = firstRow[0].children[1];
    let country = firstRow[0].children[3];
    let getSeason = $('.custom-select')[0].value;

    let newGetSeason = getSeason.replace(/\b\w/g, l => l.toUpperCase());
    if(city.value !== '' && country.value !== '') {

        let destination = '<tr><td>' + city.value + ", " + country.value + '</td>  <td>' + newGetSeason + '</td></tr>';
        $('#destinationsList')
            .append(destination);

        let summerCounter = $('#summaryBox #summer').val();
        let winterCounter = $('#summaryBox #winter').val();
        let springCounter = $('#summaryBox #spring').val();
        let autumnCounter = $('#summaryBox #autumn').val();

        switch (getSeason) {
            case 'summer':
                summerCounter++;
                $('#summaryBox #summer').val(summerCounter);
                break;
            case 'winter':
                winterCounter++;
                $('#summaryBox #winter').val(winterCounter);
                break;
            case 'spring':
                springCounter++;
                $('#summaryBox #spring').val(springCounter);
                break;
            case 'autumn':
                autumnCounter++;
                $('#summaryBox #autumn').val(autumnCounter);
                break;
        }
        city.value = '';
        country.value = '';
    }
}
*/
