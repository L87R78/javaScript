function imperiaUnits(n) {
    var realFeet = n / 30.48;
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);

    return feet + "&prime;" + inches + '&Prime;';

}

console.log(imperiaUnits(36));