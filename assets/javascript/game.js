
var loaded = 0;

var imgs = [];
var defender;
var you;
$(document).ready(function(){
    loadOnce();
    var damage=0;
    var hp=0;
    var myhp =0; 
    var counter =0;



function loadOnce(){
    if(loaded <=0){
        //begin object array
        var chars = [
            obi = {name:"obi-won Kenobi", img:"./assets/img/obi.jpg", hp:"120",damage:"8",counter:"25"},
            luke = {name:"Luke Skywalker", img:"./assets/img/Luke.png", hp:"200",damage:"12",counter:"25"},
            sid = {name:"Darth Sidious", img:"./assets/img/sidious.png",hp:"150",damage:"6",counter:"25"},
            mal = {name:"Darth Maul",  img:"./assets/img/Maul.jpeg",hp:"180",damage:"7",counter:"25"}
        ]

        //end object array

    //i added alot of stuff to make cards and nwo my click event doesnt work. 
    //should probably add this info in a more understandable way. 
    //its not very retravable as it is. 
    //look into passing the original char object into the imgs array. so i can access it later.
    //like store the object iin the img somewhere. 
    chars.forEach(x => {
        var newDIv = $("<div>");
        $(newDIv).addClass("card");
        $(newDIv).attr("style","width:200px")
        var newImg = $("<img>" )//document.createElement("img");
    $(newImg).attr("src", x.img);// = chars[0].img;
    $(newDIv).addClass("char")
    $(newImg).addClass("card-img-top")
    $(newDIv).attr("data-name",x.name)
    $(newDIv).attr("data-damage",x.damage)
    $(newDIv).attr("data-counter",x.counter)
    var overlayDiv = $("<div>");
    $(overlayDiv).addClass("card-img-overlay");
    var overlayText = $("<h4>");
    $(overlayText).text(x.name);
    $(overlayText).attr("style","color:red");
    $(overlayDiv).append(overlayText);
    var hp = $("<p>");
    
    $(hp).text(x.hp);
    $(hp).addClass("hp");
    $(hp).attr("style","color:red");
    $(overlayDiv).append(hp);
    $(newDIv).append(newImg);
    $(newDIv).append(overlayDiv);
   
    $('.CharSelection1').append(newDIv);
    imgs.push(newDIv)
    });
    console.log("we are inside of the if statement of hte LoadOnce()");
    loaded++;
}};



//start pick defender method
$(document).on("click", ".enemy", function () {
    $(".Defend").append($(this));
    $(this).addClass("defender");
    defender =  $(event.target)
    console.log("clicked my enemy class method " + $(this).attr(".hp"));
    //the line below here returns hp of the defender lets see if i can get him by class
    console.log("clicked my enemy class method " + $(event.target).children(".hp").text());
   //as an object?
   console.log("object defender in enemy method " + $(defender).children(".hp").text());
    //by class? 
    console.log("clicked my enemy class method " + $(".defender").children("p.hp").text());
});

$(document).on("click", ".char", function () {
    //$('img').remove(".Luke");
    var name = $(this).attr("data-name");
    you = $(event.target);
    //console.log("this is my local name var in my click" + name);
    //console.log("this is my new imgs array " +$(imgs)[0]);
    
    imgs.forEach(x => {
       // console.log("x.name " +$(x).attr("data-name"));
        if ($(this).attr("data-name")===$(x).attr("data-name")) {
            $('.your').append(x);
           
            //console.log(you);
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

//begin attack
$(document).on("click",".Attack", function(){
   //get in from string for damage. 
    var getInt = 0;
   getInt = $(".char").attr("data-damage");
   getInt= parseInt(getInt);
//get int form defender for hp
   hp = $(defender).children(".hp").text()
   hp = parseInt(hp);
    damage = damage + getInt;
    hp = hp - damage;
    //update defender damage. 
    $(defender).children(".hp").text(hp)
    //get defender counter
    counter = $(".defender").attr("data-counter");
    counter = parseInt(counter);
    myhp = $(you).children("p.hp").text();
    myhp = parseInt(myhp);
    myhp = myhp - counter;
    $(you).children("p.hp").text(myhp);
    console.log("this is my char hp "+ myhp);
    console.log("this is damage+damage+$ " + damage);
    console.log("this is hp-damage+$ " + hp);

  
    if (hp<=0) {
        
        setTimeout( die(), 2000);
    }
    if(myhp<=0)
    {
        loser();
    }

})
var die = function(){
    $(".Defend").empty();

    setTimeout( alert("nice kill!"), 1000);

}//end die function
var loser = function(){
    alert("loser!")
}

});




















