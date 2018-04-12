function fruitOrVegetable(input) {
    let fruits = "apple, apple, apple, appdle, apple, apple, apple";
    let arrFruits = fruits.split(', ');
    let vegetable = "tomato, cucumber, pepper, onion, garlic, parsley";
    let arrVegetable = vegetable.split(', ');
    let isFruits= arrFruits.every(x => x == input);
    let isVegetables = arrVegetable.every(x => x == input);

    if (isFruits === true){
        console.log("fruit")
        return
    }
    if (isVegetables === true){
        console.log("vegetable")
        return
    }else{
        console.log("unknown")
    }
}
fruitOrVegetable("apple")