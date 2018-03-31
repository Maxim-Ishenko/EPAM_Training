// Прототипы
var objProt = {1:2, 3:4, 5:6, 7:8};
var obj2 = Object.create(objProt);

function shprot(prop, obj) {

     for (var key in obj) {

      if (obj.hasOwnProperty(prop)) {
        console.log("This property is own property of object"); 
        return;

      } else if (!obj.hasOwnProperty(prop) && !(prop in obj)) {
        console.log("Св-во " + prop + "  отсутствует");
        return;

      } else {
        console.log("Данное св-во является св-м прототипа");
        return;
      }
      }
     }
     
shprot(7,obj2);

 
//Object without prototype
function lonelyObj() {
   var obj = Object.create(null);
   return obj;
}

//lonelyObj();
