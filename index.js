var randomNumber1 = Math.floor((Math.random() * 6)  + 1) ;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);

var randomNumber2 = Math.floor((Math.random() * 6)  + 1) ;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDiceImage2);

if ( randomNumber1 > randomNumber2 ) {
  document.querySelectorAll("p")[0].innerHTML = "Winner!";
  document.querySelectorAll("p")[0].style.color = "yellow";
} else if ( randomNumber1 < randomNumber2 ){
  document.querySelectorAll("p")[1].innerHTML = "Winner!";
  document.querySelectorAll("p")[1].style.color = "yellow";
} else {
  document.querySelectorAll("p")[0].innerHTML = "Draw";
  document.querySelectorAll("p")[1].innerHTML = "Draw";
}
