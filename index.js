var r1= Math.floor(Math.random()*6)+1;
var d1 = "images/dice" + r1 + ".png";
var i1 = document.querySelectorAll("img")[0];
i1.setAttribute("src",d1);

var r2= Math.floor(Math.random()*6)+1;
var d2 = "images/dice" + r2 + ".png";
var i2 = document.querySelectorAll("img")[1];
i2.setAttribute("src",d2);

if(r1 > r2)
{
document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(r1 < r2)
{
document.querySelector("h1").innerHTML="Player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML="draw match";
}
