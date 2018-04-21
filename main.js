

function manifestation() {
    document.getElementById("display").style.display="block";   
};
function disappearance() {
    document.getElementById("display").style.display="none";
} ;


function textSearch() {
    var input = document.getElementById("input-field");
    var filter = input.value.toUpperCase();
    var main = document.getElementById("main");
    var article = document.getElementsByTagName("article");

for (var i = 0; i < article.length; i++) {

    var name = article[i].getElementsByClassName("name-of-book");
    var author = article[i].getElementsByClassName("author-of-book");

    if (name[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
        article[i].style.display = "";
            } else if (author[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
                article[i].style.display = "";
                } else {
                    article[i].style.display = "none";
        }
    }
};


function mostPopular() {

    var main = document.getElementById("main");
    var article = document.getElementsByTagName("article");

    for (var i = 0; i < article.length; i++) {
        var starsBlock = article[i].getElementsByClassName("stars");
        var star = starsBlock[0].getElementsByTagName("i");
        var count = 0;
        for (var j = 0; j < star.length; j++) {
            if (star[j].classList.contains("fa-star")) {
                count++;
            } else if (star[j].classList.contains("fa-star-half-empty")) {
                count+=0.5;
            };
            if (count == 5) {
                article[i].style.display = "";
            } else {
                article[i].style.display = "none";
            }
        }
    }
};

function allBooks() {
    var main = document.getElementById("main");
    var article = document.getElementsByTagName("article");
    for (var i = 0; i < article.length; i++) {
        article[i].style.display = "";
    }
}
