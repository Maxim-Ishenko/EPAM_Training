
var books;
var data;
var x=1;

function load() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/books.json', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                books = JSON.parse(xhr.responseText);             
            } catch (e) {
                alert("Некорректный ответ " + e.message);
            }
            render(books);
        }
    }
    xhr.send();
}

function render(arr) {
    var count = 1;

    var table = document.getElementById('table');

    while(table.rows.length > 1){
        table.deleteRow(1);
    }

    arr.forEach(element => {
        var authorOfBook, nameOfBook, genreOfBook, yearOfBook;
        
        authorOfBook = element.author;
        nameOfBook = element.name;
        genreOfBook = element.genre;
        yearOfBook = element.year;

        var tbody = document.getElementById('table').getElementsByTagName('TBODY')[0];
        var row = document.createElement('TR');       

        tbody.appendChild(row);

        var td1 = document.createElement("TD");
        td1.className = 'numTD';
        var td2 = document.createElement("TD");
        td2.className = 'authorTD';
        var td3 = document.createElement("TD");
        td3.className = 'nameTD';
        var td4 = document.createElement("TD");
        td4.className = 'genreTD';
        var td5 = document.createElement("TD");
        td5.className = 'yearTD';

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);

        td1.innerHTML = count++;
        td2.innerHTML = authorOfBook;
        td3.innerHTML = nameOfBook;
        td4.innerHTML = genreOfBook;
        td5.innerHTML = yearOfBook;
    });
    // console.log(books);
}

function manifestation() {
    document.getElementById("display").style.display = "block";
};

function disappearance() {
    document.getElementById("display").style.display = "none";
};

function addBook() {
    // event.preventDefault();
    document.querySelector('#display').style.display = 'none';

    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', '/books.json', true);
    xhr1.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState != 4) return;
        if (xhr1.status != 200) {
            alert(xhr1.status + ': ' + xhr1.statusText);
        } else {
            try {
                console.log('addBook');           
            } catch (e) {
                alert("Некорректный ответ " + e.message);
            }
        }
    }
    xhr1.send();
    
    var newObj = {};

    var newBookName = document.getElementById('name_input').value;
    var newBookAuthor = document.getElementById('author_input').value;
    var newBookGenre = document.getElementById('genre_input').value;
    var newBookYear = document.getElementById('year_input').value;

    if (!newBookName || !newBookAuthor || !newBookGenre || !newBookYear) {
        alert("Все поля формы обязательны к заполнению!!!");
        return;
    }
    
    newObj.name = newBookName;
    newObj.author = newBookAuthor;
    newObj.genre = newBookGenre;
    newObj.year = newBookYear;
    
    books.push(newObj);
    
    document.getElementById('name_input').value = "";
    document.getElementById('author_input').value = "";
    document.getElementById('genre_input').value = "";
    document.getElementById('year_input').value = "";

    data = JSON.stringify(books);
    
    // console.log(books); 
   
    var xhr2 = new XMLHttpRequest();
    xhr2.open('POST', 'books.json', true);
    xhr2.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr2.send(data);
    xhr2.onreadystatechange = function() {
        if (xhr2.readyState != 4) return;
        if (xhr2.status != 200) {
            alert(xhr2.status + ': ' + xhr2.statusText);
            // return;
        } else {
            try {
            console.log('addBook');
            } catch (e) {
                alert("Некорректный Fтвет " + e.message);
            }
        }
    }
    render(books);
}
 

function manifestation2() {
    document.getElementById("display-edit").style.display = "block";
};

function disappearance2() {
    document.getElementById("display-edit").style.display = "none";
};

var target;

table.onclick = function( e )
{
target = e.target.parentNode;
name_input__edit.value = target.querySelector('.nameTD').innerHTML;
author_input__edit.value = target.querySelector('.authorTD').innerHTML;
genre_input__edit.value = target.querySelector('.genreTD').innerHTML;
year_input__edit.value = target.querySelector('.yearTD').innerHTML;
manifestation2();
var g = target.querySelector('.nameTD');
console.log(g);
}

function editBook() {
    disappearance2();

    for (var i = 0; i < books.length; i++) {
        if (books[i].name === target.querySelector('.nameTD').innerHTML && books[i].author === target.querySelector('.authorTD').innerHTML) {
            books[i].name = name_input__edit.value;
            books[i].author = author_input__edit.value;
            books[i].genre = genre_input__edit.value;
            books[i].year = year_input__edit.value; 
        }
    }
console.log(books);
data = JSON.stringify(books);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'books.json', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
            // return;
        } else {
            try {
                console.log('editBook');
            } catch (e) {
                alert("Некорректный Oтвет " + e.message);
            }
        }
    }
    render(books);
}

function delBook() {

    disappearance2();

  for (var i = 0; i < books.length; i++) {
      if (books[i].name === name_input__edit.value && books[i].author === author_input__edit.value) {
        //   delete books[i];
        books.splice(i, 1);
      }
  }
console.log(books);

    data = JSON.stringify(books);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'books.json', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
            // return;
        } else {
            try {
            console.log('delBook');
            } catch (e) {
                alert("Некорректный Fтвет " + e.message);
            }
        }
    }
    render(books);
}





