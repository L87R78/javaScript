
function solve(arr){

    const gladiatorData = arr
            .filter((item) => item !== "Ave Cesar")
            .map((gladiatorInfo) => {
                if(gladiatorInfo.indexOf(" vs ") > -1){
                    return{
                        fight: gladiatorInfo.split(" vs ")
                    };
                }
                else{
                    return {
                        info: gladiatorInfo.split(" -> ")  
                    }
                }
    })
    .reduce((acc, cur) => {
        if(cur.info){
            const gladiatorName = cur.info[0];
            const tehnique = cur.info[1];
            const skill = +cur.info[2];

            if(!acc[gladiatorName]){
                acc[gladiatorName] = {};

                acc[gladiatorName][tehnique] = skill;
                acc[gladiatorName].totalSkill = skill;

                return acc;
            }
            if(acc[gladiatorName][tehnique] && acc[gladiatorName][tehnique] < skill){
                acc[gladiatorName].totalSkill += skill - acc[gladiatorName][tehnique]; 
                acc[gladiatorName][tehnique] = skill;
            }else if(!acc[gladiatorName][tehnique]){
                acc[gladiatorName][tehnique] = skill;
                acc[gladiatorName].totalSkill += skill
                
            }
        }
        else if(cur.fight){
            const firstFigter = cur.fight[0];
            const secondFighter = cur.fight[1];

            if(!acc[firstFigter] || !acc[secondFighter]){
                return acc;
            }
            const hasFight = Object.keys(acc[firstFigter])
                    .filter((tehnique) => tehnique !== "totalSkill")
                    .some((tehnique) => {
                        return Object.keys(acc[secondFighter])
                                            .includes(tehnique);
                    });

            if(hasFight){
                const loser = acc[firstFigter].totalSkill < acc[secondFighter].totalSkill ? firstFigter : secondFighter;
                delete acc[loser];
            }
        }
        


        return acc;
    }, {})
        
    Object.keys(gladiatorData)
            .sort((a, b) => {
                return gladiatorData[b].totalSkill - gladiatorData[a].totalSkill || a - b;

            })
            .forEach((name) => {
                console.log(`${name}: ${gladiatorData[name].totalSkill} skill`);

                Object.keys(gladiatorData[name])
                        .filter((tehnique) => tehnique !== "totalSkill")
                        .sort((a, b) => {
                            return gladiatorData[name][b] - gladiatorData[name][a] || a - b;
            
                        })
                        .forEach((tehnique) =>{
                            console.log(`- ${tehnique} <!> ${gladiatorData[name][tehnique]}`)
                        });
            });
    //console.log(gladiatorData);
}
solve(['Pesho -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Pesho vs Gladius',
'Gladius vs Julius',
'Gladius vs Gosho',
])
