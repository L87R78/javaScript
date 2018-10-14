function solve(kingdomArr, battleArr){

    let kingdomMap = new Map();

    // Step 1. Fill the kingdom map
    for (let kingdomObj of kingdomArr) {

        let kingdomName = kingdomObj['kingdom'];
        let generalName = kingdomObj['general'];
        let army = kingdomObj['army'];

        if(!kingdomMap.has(kingdomName)){
            kingdomMap.set(kingdomName, new Map());
        }

        let generalsMap = kingdomMap.get(kingdomName);

        if(!generalsMap.has(generalName)){
            generalsMap.set(generalName, {armyCount: army, wins: 0, losses: 0});
        }else{
            let generalObj = generalsMap.get(generalName);
            generalObj['armyCount'] += army;

        }  
    }
    //Step 2. Battle
    for (let row of battleArr) {
        let [attackKingdom, attackGeneral, 
                defendingKingdom, defendingGeneral] = row;

        let attacKingArmy = kingdomMap
                .get(attackKingdom)
                .get(attackGeneral);

        let defendingArmy = kingdomMap
                .get(defendingKingdom)
                .get(defendingGeneral);

              
        if(attacKingArmy['armyCount'] > defendingArmy['armyCount']);
            attacKingArmy['wins']++;
            defendingArmy['losses']++;


    }
   
}
solve([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
["Stonegate", "Ulric", "Stonegate", "Doran"],
["Stonegate", "Doran", "Maiden Way", "Merek"],
["Stonegate", "Ulric", "Maiden Way", "Merek"],
["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
)