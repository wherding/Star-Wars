
$(document).ready(function(){
var chars = [
    luke = {name:"Luke Skywalker", img:"./assets/img/Luke.png"}
]
var newImg = document.createElement("img");
$(newImg).attr("src", chars[0].img);// = chars[0].img;
$(newImg).addClass(chars[0].name)
console.log(newImg);
    $('.CharSelection').css("background-color","blue","font-color","white");
    $('.CharSelection1').append(newImg);
//var char = document.createElement("img");
//console.log(char);
//char.attr("src") = "../img/2-StarWars.jpg";
$('.CharSelection1').attr('src',"./assets/javascript/2-StarWars.jpg");// = "../img/2-StarWars.jpg";
console.log($('CharSelection1'));

$(".Luke").on("click", function(){
    $('img').remove(".Luke");

    $(".your").append(newImg);
   
    console.log("i clicked newimg");
});
   // $('CharSelection').appendChild(char);

});


























