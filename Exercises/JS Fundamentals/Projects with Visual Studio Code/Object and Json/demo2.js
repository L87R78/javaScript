function system(arr){
  let systemsObj = new Map();

  for (let i = 0; i < arr.length; i++) {

      let [systemName, componentName, subcomponentName] = arr[i].split(' | ');

      if(!systemsObj.has(systemName)){
          systemsObj.set(systemName, new Map());
      }
      if(!systemsObj.get(systemName).get(componentName)){
          systemsObj.get(systemName).set(componentName, []);

      }
      systemsObj.get(systemName).get(componentName).push(subcomponentName);

  }
  
  let sortedrSystems = Array.from(systemsObj.keys())
      .sort()
      .sort((a, b) => systemsObj.get(b).size - systemsObj.get(a).size)
      
  for (let key of sortedrSystems) {
      console.log(key)

      let sortedComponents = Array.from(systemsObj.get(key).keys()).sort();
      
      for (let item of sortedComponents) {
        console.log(`|||${item}`);

        for (let subComponent of systemsObj.get(key).get(item)) {
            console.log(`||||||${subComponent}`)
        }
      }
  }
}
system(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'Lambda | CoreC | C4',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);