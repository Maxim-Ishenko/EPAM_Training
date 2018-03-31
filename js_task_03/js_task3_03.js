function isProp(str, obj) {

  for (var key in obj) {

      if (key == str) {
          console.log(true);
          return;
      } 

    }
    
      console.log(false);
  }

  isProp("a", {1: 2, s: "t", a: "d"});


