
function championship(arr){
    let map = new Map();

    for (let str of arr) {
        let [teamName, pilotName, pilotPoints] = str.split(" -> ");
        

        if(!map.has(teamName)){
            map.set(teamName, new Map());
        }
        if(!map.get(teamName).has(pilotName)){
            map.get(teamName).set(pilotName, Number(pilotPoints));
        }
        else{
            map.get(teamName).set(pilotName, map.get(teamName)
                    .get(pilotName) + Number(pilotPoints));
        }
        /*
                        тук добавяме, ако искме нещо друго към Map-a
        if(!map.get(teamName).has(sum)){                
            map.get(teamName).set(sum, 0);
            map.get(teamName).set(sum, map.get(teamName)
            .get(sum) + Number(pilotPoints));               
        }else{
            map.get(teamName).set(sum, map.get(teamName)        
            .get(sum) + Number(pilotPoints));                   
        }
        */
    }

    let sortedMap = Array.from(map).sort((a, b) => [...b[1].values()]
        
        .reduce((a, b) => a + b) - [...a[1].values()].reduce((a, b) => a + b))
        .slice(0, 3);
   

    for (const [team, pilot] of sortedMap) {
        console.log(`${team}: ${[...pilot.values()].reduce((a, b) => a + b)}`)
        let sortedPilots = [...pilot].sort((a, b) => b[1] - a[1]);
        
        for (let [pilot, points] of sortedPilots) {
            console.log(`--${pilot} -> ${points}`)
        }
    }
  

                        // part-1 result
                        /*
    let sortedGladiators = Array.from(map.keys()).sort((g1, g2) => {
        let g1Tp = 0;
        Array.from(map.get(g1).values()).forEach(el =>{
            g1Tp += el;
        });

        let g2Tp = 0;
        Array.from(map.get(g2).values()).forEach(el => {
            g2Tp += el;
        });

        return g2Tp - g1Tp || g1 - g2;
    });
    let a = 0;
    let count = 0;
    sortedGladiators.forEach(teamName => {
        if(count === 3){
            return;
        }
        let total = 0;
        Array.from(map.get(teamName).values()).forEach(el => {
            total += el;
        });

        console.log(`${teamName}: ${total}`);
        count++;

        Array.from(map.get(teamName).keys()).sort((tech1, tech2) => {
            return map.get(teamName).get(tech2) - map.get(teamName).get(tech1);
        }).forEach(tech => {
            console.log(`-- ${tech} -> ${map.get(teamName).get(tech)}`);
            
        })
    });
                        */     
    
}
championship(['Ferrari -> Kimi Raikonnen -> 25',
    'Ferrari -> Sebastian Vettel -> 18',
    'Mercedes -> Lewis Hamilton -> 10',
    'Mercedes -> Valteri Bottas -> 8',
    'Red Bull -> Max Verstapen -> 6',
    'Red Bull -> Daniel Ricciardo -> 4',
    'Mercedes -> Lewis Hamilton -> 25',
    'Mercedes -> Valteri Bottas -> 18',
    'Haas -> Romain Grosjean -> 25',
    'Haas -> Kevin Magnussen -> 25']
);



