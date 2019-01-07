var choose = [
    {name:"Light Side", image:"assets/images/light.jpg", id:"lightSide"},
    {name:"Dark Side", image:"assets/images/dark.jpg", id:"darkSide"}
]
var lightSide = [
    {name:"Luke Skywalker", id:"luke", attack:6, counter:14, health:160, image:"assets/images/luke.gif"},
    {name:"Ben Kenobi", id:"ben", attack:8, counter:10, health:180, image:"assets/images/ben.gif"},
    {name:"Yoda", id:"yoda", attack:4, counter:12, health:200, image:"assets/images/yoda.gif"}
]
var darkSide = [
    {name:"Boba Fett", id:"boba", attack:5, counter:13, health:190, image:"assets/images/boba.gif"},
    {name:"The Emporer", id:"emporer", attack:9, counter:11, health:170, image:"assets/images/emporer.gif"},
    {name:"Darth Vader", id:"vader", attack:7, counter:15, health:150, image:"assets/images/vader.gif"}
]
var playerArray = [];
var player = [];
var enemyArray = [];
var enemy = [];
var playerHealth = 0;
var playerAttack = 0;
var enemyHealth = 0;
var enemyCounter = 0;

$(document).ready(function() {

    instructions("Choose A Side");

    for (var i=0; i<choose.length; i++) {
        var chooseCard = $("<img>");
        chooseCard.addClass("card chooseCard");
        chooseCard.attr("src", choose[i].image);
        chooseCard.attr("id", choose[i].id);
        $("#cardZone").append(chooseCard);
    }

    // Choose a side    

    $(document).on("click", ".chooseCard", function(){
        var side = ($(this).attr("id"));
        if (side === "lightSide") {
            playerArray = lightSide.slice();
            enemyArray = darkSide.slice();
        } else if (side === "darkSide") {
            playerArray = darkSide.slice();
            enemyArray = lightSide.slice();
        };
        clearTop();
        instructions("Choose Your Fighter");
        for (var i=0; i<playerArray.length; i++) {
            var fighterCard = $("<img>");
            fighterCard.addClass("card fighterCard");
            fighterCard.attr("src", playerArray[i].image);
            fighterCard.attr("id", i);
            $("#cardZone").append(fighterCard);
        }
    })

    // Choose a fighter

    $(document).on("click", ".fighterCard", function(){
        var x = ($(this).attr("id"));
        player = playerArray.splice(x,1);
            var playerCard = $("<img>");
            playerCard.addClass("card playerCard");
            playerCard.attr("src", player[0].image);
            $("#playerZone").append(playerCard);
            clearTop();
            instructions("Choose Your Opponent");
            chooseEnemy();
        playerHealth = player[0].health;
        playerAttack = player[0].attack;
        console.log(playerHealth,playerAttack);
    })

    // Choose your opponent

    $(document).on("click", ".enemyCard", function(){
        var y = ($(this).attr("id"));
        enemy = enemyArray.splice(y,1);
            var enemyCard = $('<img>');
            enemyCard.addClass('card enemyCard');
            enemyCard.attr('src', enemy[0].image);
            $('#enemyZone').append(enemyCard);
        $("#buttonZone").append(
            $('<button/>', {
                text: "Attack", 
                class: "btn btn-danger btn-lg mt-5",
                id: "attackButton", 
                click: function() {
                    combat();}
            })
        );
        clearTop();
        chooseEnemy();
        instructions("Attack");
        enemyHealth = enemy[0].health;
        enemyCounter = enemy[0].counter;
    })

    // Attack your opponent

    // function combat() {

    // }

function clearTop(){
    $("#cardZone, #instructions").empty();
}

function instructions(x){
    $("#instructions").text(x);
}

function chooseEnemy(){
    for (var i=0; i<enemyArray.length; i++) {
        var enemyCard = $("<img>");
        enemyCard.addClass("card enemyCard");
        enemyCard.attr("src", enemyArray[i].image);
        enemyCard.attr("id", i);
        $("#cardZone").append(enemyCard);
    }
}


});