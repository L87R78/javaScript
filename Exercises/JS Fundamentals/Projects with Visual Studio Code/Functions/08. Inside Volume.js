function point(array){
   for (let i = 0; i < array.length; i += 3) {
       let [x, y, z] = ([array[i], array[i + 1], array[i + 2]]);

       if (x >= 10 && x <= 50 && y >= 20 && y <= 80 && z >= 15 && z <= 50) {
            console.log("inside");
       } else {
            console.log("outside");
       }
   }
}
point([8, 20, 22]);