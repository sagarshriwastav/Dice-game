// alert("working js");
var randomNumber1 = Math.ceil(Math.random() * 6);//1-6
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.ceil(Math.random() * 6);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!ð¤ð"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!ð¤â­â¤ï¸â¤ï¸â¤ï¸";
}
else{
    document.querySelector("h1").innerHTML="Match Drawð";
}

