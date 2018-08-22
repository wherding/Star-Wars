
var loaded = 0;

var imgs = [];
$(document).ready(function(){
    loadOnce();

//begin loaded into my loadonce()
/*
//loop to populate selection div
chars.forEach(x => {
    var newImg = $("<img>" )//document.createElement("img");
$(newImg).attr("src", x.img);// = chars[0].img;
$(newImg).addClass(x.class)
$(newImg).attr("data-name",x.name)
$('.CharSelection1').append(newImg);
imgs.push(newImg)
});
*/
//end coppied into my load once
/*
var newImg = document.createElement("img");
$(newImg).attr("src", chars[0].img);// = chars[0].img;
$(newImg).addClass(chars[0].name)
console.log(newImg);
    $('.CharSelection').css("background-color","blue","font-color","white");
  */ 
 
//click event to select char.. need to improve so that it moves others to enemy div




   // $('CharSelection').appendChild(char);
return;
});


function loadOnce(){
    if(loaded <=0){
        //begin object array
        var chars = [
            obi = {name:"obi-won Kenobi", img:"./assets/img/obi.jpg"},
            luke = {name:"Luke Skywalker", img:"./assets/img/Luke.png"},
            sid = {name:"Darth Sidious", img:"./assets/img/sidious.png"},
            mal = {name:"Darth Maul",  img:"./assets/img/Maul.jpeg"}
        ]

        //end object array

    
    chars.forEach(x => {
        var newImg = $("<img>" )//document.createElement("img");
    $(newImg).attr("src", x.img);// = chars[0].img;
    $(newImg).addClass("char")
    $(newImg).attr("data-name",x.name)
    $('.CharSelection1').append(newImg);
    imgs.push(newImg)
    });
    console.log("we are inside of the if statement of hte LoadOnce()");
    loaded++;
}};




$(document).on("click", ".enemy", function () {
    $(".Defend").append($(this));
    console.log("clicked my enemy class method " + $(this).attr("class"));
});

$(document).on("click", ".char", function () {
    //$('img').remove(".Luke");
    var name = $(this).attr("data-name");
    //console.log("this is my local name var in my click" + name);
    //console.log("this is my new imgs array " +$(imgs)[0]);
    
    imgs.forEach(x => {
       // console.log("x.name " +$(x).attr("data-name"));
        if ($(this).attr("data-name")===$(x).attr("data-name")) {
            $('.your').append(x);
        }
        else{
            $(x).addClass("enemy");
            $(x).attr("data-enemy","enemy");
            $(x).removeClass("char");
           // console.log(" else x classes " +$(x).attr("class"));
            $('.enemies').append($(x));
            
        }
    });
  //  $(".CharSelection1").empty();
    if( $(".CharSelection1").empty()){
        console.log("true char.empty == char div");
    }
    //console.log("this is my empty div" + $(".CharSelection1").empty());
    //ok sweet i can get the class of what was clicked. 
    console.log("this.attr(class) inside of .char.click() "+$(this).attr("class"));
    return;

});//end .charClick()























