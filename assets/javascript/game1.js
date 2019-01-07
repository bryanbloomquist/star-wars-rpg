var choose = [
    {name:"Luke Skywalker", id:"luke", attack:6, counter:14, health:160, image:"assets/images/luke.gif"},
    {name:"Ben Kenobi", id:"ben", attack:8, counter:10, health:180, image:"assets/images/ben.gif"},
    {name:"Yoda", id:"yoda", attack:4, counter:12, health:200, image:"assets/images/yoda.gif"},
    {name:"Boba Fett", id:"boba", attack:5, counter:13, health:190, image:"assets/images/boba.gif"},
    {name:"The Emporer", id:"emporer", attack:9, counter:11, health:170, image:"assets/images/emporer.gif"},
    {name:"Darth Vader", id:"vader", attack:7, counter:15, health:150, image:"assets/images/vader.gif"}
]

var playerArray = [];
var player = [];
var opponentArray = [];
var opponent = [];
var playerHealth = 0;
var playerAttack = 0;
var opponentHealth = 0;
var opponentCounter = 0;

$(document).ready(function() {


    $("#instructions").text("Choose Your Fighter");

    loadZone (choose);

    $(".gameCard").click(function (){
        var x = ($(this).attr("id"));
        playerArray = choose.splice(x,1);
        var playerCard = $("<img>");
        playerCard.addClass("card");
        playerCard.attr("src", playerArray[0].image);
        $("#combatZone1").append(playerCard);
        clearTop ();
        loadZone (choose) ;
        $("#instructions").text("Choose Your Opponent");
    })



    // // Choose a side    

    //     var side = ($(this).attr("id"));
    //     if (side === "lightSide") {
    //         playerArray = lightSide.slice();
    //         opponentArray = darkSide.slice();
    //     } else {
    //         playerArray = darkSide.slice();
    //         opponentArray = lightSide.slice();
    //     };
    //     clearTop();
    //     $("#instructions").text("Choose Your Fighter");
    //     for (var i=0; i<playerArray.length; i++) {
    //         var fighterCard = $("<img>");
    //         fighterCard.addClass("gameCard");
    //         fighterCard.attr("src", playerArray[i].image);
    //         fighterCard.attr("id", playerArray[i].id);
    //         $("#cardZone").append(fighterCard);
    //     }
    // })

    // // Choose a fighter

    // $(".gameCard").click(function(){
    //     var fighter = ($(this).attr("id"));
    //     for (var i=0; i<playerArray.length; i++) {
    //         if (fighter === playerArray[i].id) {
    //             player = playerArray[i].slice();
    //             var playerCard = $("<img>");
    //             playerCard.addClass("gameCard");
    //             playerCard.attr("src", playerArray[i].image);
    //             $("#combatZone1").append(playerCard);
    //             clearTop();
    //             $("#instructions").text("Choose Your Opponent");
    //             loadCardZone(opponentArray);
    //         } else {}
    //     };

    // })


function clearTop(){
    $("#cardZone, #instructions").empty();
}

function loadZone (x){
    for (var i=0; i<x.length; i++) {
        var card = $("<img>");
        card.addClass("card gameCard");
        card.attr("src", x[i].image);
        card.attr("id", i);
        $("#cardZone").append(card);
    }}


});