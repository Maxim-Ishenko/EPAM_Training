function isProp(str, obj) {
    
      for (var key in obj) {
    
          if (key == str) {
              console.log(obj);
              return;
          } else {
            obj[str] = "new";
            console.log(obj);
            return;
          }     
    
        }      
}
    
isProp("1000", {1: 2, s: "t", a: "d"});    