
var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

if(randomNumber1 > randomNumber2){
    var heading1 = document.querySelector("h1").textContent = "Player one wins!";
    // console.log(heading);
}

else if( randomNumber1 < randomNumber2){
    var heading2 = document.querySelector("h1").textContent = "Player two wins!";
    // console.log(heading);
}
else if(randomNumber1 === randomNumber2){
    var heading3 = document.querySelector("h1").textContent = "Draw";
    // console.log(heading);
}

var srcToImage ="images/dice"+randomNumber1+".png";
var image1 = document.querySelector(".img1").setAttribute("src",srcToImage);
var srcToImage2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelector(".img2").setAttribute("src",srcToImage2);






