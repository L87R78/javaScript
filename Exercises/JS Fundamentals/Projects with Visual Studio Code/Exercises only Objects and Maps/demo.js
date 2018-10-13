function solve(input){
    let gladiators = new Map();
    for (let items of input) {
       if(items === 'Ave Cesar'){
           break;
       }
       let [gladiator, technique, skill] = items.split(' -> ');

       if(gladiator.indexOf(" vs ") > -1){
           let splitFighters = gladiator.split(" vs ");
           let gladiator01 = splitFighters[0];
           let gladiator02 = splitFighters[1];

           if(gladiators.has(gladiator01) && gladiators.has(gladiator02)){
            let hasTrueFight = false;
            let tempTechnique = "";
 
            Array.from(gladiators.get(gladiator01).keys()).forEach(tech => {
                 if(gladiators.get(gladiator02).has(tech)){
                     hasTrueFight = true;
                     tempTechnique = tech
                 }
            })
 
            let deadGladiator = "";
 
            if(hasTrueFight){
                let skillGladiator01 = gladiators.get(gladiator01).get(tempTechnique);
                let skillGladiator02 = gladiators.get(gladiator02).get(tempTechnique);
 
                if(Number(skillGladiator01) < Number(skillGladiator02)){
                     deadGladiator = gladiator01;
                }
                else{
                     deadGladiator = gladiator02;
                }
 
                gladiators.delete(deadGladiator);
                //break;
            } 
           }  
       }
       else{
            if(!gladiators.has(gladiator)){
                gladiators.set(gladiator, new Map());   
            }
            
            if(!gladiators.get(gladiator).get(technique)){
                gladiators.get(gladiator).set(technique, Number(skill))
            }
            else{
                let currentSkill = gladiators.get(gladiator).get(technique);
                if(Number(currentSkill) < Number(skill)){
                    //gladiators.get(gladiator).set(technique, gladiators.get(gladiator).get(technique) + Number(skill)); 
                    //gladiators.get(car).set(model, gladiators.get(car).get(model) + Number(price));
                    gladiators.get(gladiator).set(technique, Number(skill))
                }
            }
        }
    }
    //console.log(gladiators)
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
solve(['Pesho -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Pesho vs Gladius',
'Gladius vs Julius',
'Gladius vs Gosho',
'Ave Cesar'])
