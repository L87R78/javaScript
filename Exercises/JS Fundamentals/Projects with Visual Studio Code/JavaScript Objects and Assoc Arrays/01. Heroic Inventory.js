function heroic(arr){
    let heroData = [];
    

    for (let i = 0; i < arr.length; i++) {
        
        let split = arr[i].split('/');
        let name = split[0].trim();
        let level = Number(split[1]);
        let arrItem = split[2].trim().split(/[\s+,]+/gi);

        let hero = {
            name: name,
            level: level,
            items: arrItem
        }
        heroData.push(hero)
    }
    console.log(JSON.stringify(heroData))
}
heroic(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);