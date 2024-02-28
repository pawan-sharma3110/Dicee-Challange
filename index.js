// Dicee 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "/images/dice" + randomNum1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);
// Dicee  2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "/images/dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);
if (randomImage1 > randomImage2) {
  document.querySelector("h1").innerText = "Player 1 ⛳ Wine";
} else if (randomImage1 < randomImage2) {
  document.querySelector("h1").innerText = "Player 2 ⛳  Wine";
} else {
  document.querySelector("h1").innerText = "Both are same, Try again";
}
