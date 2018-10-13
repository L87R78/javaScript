function arenaTier(data) {
    let gladiators = new Map();
 
    for (let i = 0; i < data.length; i++) {
        let tokens = data[i].split(/\s+/g)
            .filter(el => {return el;})
            .map(el => {return el.trim();});
 
        if (tokens[1] === '->') {
            const [gladiator, technique, skillStr] = tokens.filter(el => {return el !== '->'});
            const skill = +skillStr;
 
            if (!gladiators.has(gladiator)) {
                gladiators.set(gladiator, new Map());
                gladiators.get(gladiator).set(technique, skill);
            } else {
                if (!gladiators.get(gladiator).has(technique)) {
                    gladiators.get(gladiator).set(technique, skill);
                } else {
                    if (gladiators.get(gladiator).get(technique) < skill) {
                        gladiators.get(gladiator).set(technique, skill);
                    }
                }
            }
        } else if (tokens[1] === 'vs') {
            const [gladiator1, gladiator2] = tokens.filter(el => {return el !== 'vs'});
 
            if (gladiators.has(gladiator1) && gladiators.has(gladiator2)) {
                let doFight = false;
 
                Array.from(gladiators.get(gladiator1).keys()).forEach(tech => {
                    if (gladiators.get(gladiator2).has(tech)) {
                        doFight = true;
                    }
                });
 
                if (doFight) {
                    let g1TotalSkill = 0;
 
                    Array.from(gladiators.get(gladiator1).values()).forEach(value => {
                        g1TotalSkill += value;
                    });
 
                    let g2TotalSkill = 0;
 
                    Array.from(gladiators.get(gladiator2).values()).forEach(value => {
                        g2TotalSkill += value;
                    });
 
                    let loser = '';
 
                    if (g1TotalSkill > g2TotalSkill) {
                        loser = gladiator2;
                    } else if (g1TotalSkill < g2TotalSkill) {
                        loser = gladiator1;
                    } else {
                        loser = null;
                    }
 
                    if (loser) {
                        gladiators.delete(loser);
                    }
                }
            }
        }
    }
 
    let sortedGladiators = Array.from(gladiators.keys()).sort((g1, g2) => {
       let g1Tp = 0;
       Array.from(gladiators.get(g1).values()).forEach(el =>{
           g1Tp += el;
       });
 
       let g2Tp = 0;
       Array.from(gladiators.get(g2).values()).forEach(el => {
           g2Tp += el;
       });
 
       return g2Tp - g1Tp || g1 - g2;
    });
 
    sortedGladiators.forEach(glad => {
       let gladTotalSkill = 0;
       Array.from(gladiators.get(glad).values()).forEach(el => {
           gladTotalSkill += el;
       });
 
        console.log(`${glad}: ${gladTotalSkill} skill`);
 
        let orderedTechnieques = Array.from(gladiators.get(glad).keys()).sort((tech1, tech2) => {
           return gladiators.get(glad).get(tech2) - gladiators.get(glad).get(tech1);
        }).forEach(tech => {
            console.log(`- ${tech} <!> ${gladiators.get(glad).get(tech)}`);
        })
    });
}
arenaTier(['Pesho -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Pesho vs Gladius',
'Gladius vs Julius',
'Gladius vs Gosho',
'Ave Cesar'])