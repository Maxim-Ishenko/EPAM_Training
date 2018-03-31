//Возврат строки с первой заглавной буквой каждого слова
function bigLetterEvenWord(str) {
  var word = ""; 
  var result = ""; 
  for (var i=0; i<str.length; i++) {
      word += str[i]; 
      if (str[i] == " " || i == str.length-1) {  
          result += word[0].toUpperCase()+word.slice(1); 
          word = "";
      }
  }
  
  console.log(result);
}

bigLetterEvenWord("max max");