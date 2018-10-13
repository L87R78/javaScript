function userNames(arr){

  let catalogue = new Set();

  arr.forEach(name => catalogue.add(name))

  let sortedNames = Array.from(catalogue)
            .sort((a,b) => a.length - b.length || a.localeCompare(b));

    console.log(sortedNames.join('\n'))

}
userNames(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston'])