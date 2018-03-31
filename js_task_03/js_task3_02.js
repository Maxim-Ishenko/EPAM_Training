function propOfObj(obj) {
   
    for (key in obj) {
        console.log("Key: " + key + "; " + "value: " + obj[key]);
    }
}

propOfObj({a: 2, b: "max", c: true});