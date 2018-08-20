
$(document).ready(function(){
var chars = [
    obi = {name:"obi-won Kenobi",class:"char", img:"./assets/img/obi.jpg"},
    luke = {name:"Luke Skywalker",class:"char", img:"./assets/img/Luke.png"},
    sid = {name:"Darth Sidious", class:"char" , img:"./assets/img/sidious.png"},
    mal = {name:"Darth Maul", class:"char", img:"./assets/img/Maul.jpeg"}
    

]
var imgs = [];
//loop to populate selection div
chars.forEach(x => {
    var newImg = $("<img>" )//document.createElement("img");
$(newImg).attr("src", x.img);// = chars[0].img;
$(newImg).addClass(x.class)
$(newImg).attr("data-name",x.name)
$('.CharSelection1').append(newImg);
imgs.push(newImg)
});
/*
var newImg = document.createElement("img");
$(newImg).attr("src", chars[0].img);// = chars[0].img;
$(newImg).addClass(chars[0].name)
console.log(newImg);
    $('.CharSelection').css("background-color","blue","font-color","white");
  */ 

//click event to select char.. need to improve so that it moves others to enemy div
$(".char").on("click", function(){
    //$('img').remove(".Luke");
    var name = $(this).attr("data-name");
    console.log("this is my local name var in my click" + name);
    console.log("this is my new imgs array " +$(imgs)[0]);
    
    imgs.forEach(x => {
        console.log("x.name " +$(x).attr("data-name"));
        if ($(this).attr("data-name")===$(x).attr("data-name")) {
            $('.your').append(x);
        }
        else{
            $('.enemies').append(x);
            
        }
    });
  //  $(".CharSelection1").empty();
    if( $(".CharSelection1").empty()){
        console.log("true char.empty == char div");
    }
    //console.log("this is my empty div" + $(".CharSelection1").empty());
    //ok sweet i can get the class of what was clicked. 
    console.log("this.target "+$(this).attr("class"));

});
   // $('CharSelection').appendChild(char);

});


























