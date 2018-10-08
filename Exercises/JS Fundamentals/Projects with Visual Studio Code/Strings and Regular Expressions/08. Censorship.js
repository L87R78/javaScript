function censorship(text, key) {

    let str = text;
  
    for(let ke of key){
  
        //let k = ke.replace(",", "").trim();
        let k = ke;
  
        let removeWord = str.indexOf(k);
        while (removeWord != -1){
            removeWord = text.indexOf(k, removeWord + 1)
            text = text.replace(k, "-".repeat(k.length));
        }
  
    }
      console.log(text);
  }
  //censorship('roses are red, violets are blue', [', violets are', 'red'])