const options = [
	{name:"Light Side", image:"assets/images/light.jpg", id:"lightSide"},
	{name:"Dark Side", image:"assets/images/dark.jpg", id:"darkSide"}
]
const lightSide = [
	{name:"Luke Skywalker", id:"luke", attack:6, counter:15, health:160, image:"assets/images/luke.gif"},
	{name:"Ben Kenobi", id:"ben", attack:8, counter:10, health:180, image:"assets/images/ben.gif"},
	{name:"Yoda", id:"yoda", attack:4, counter:20, health:200, image:"assets/images/yoda.gif"}
]
const darkSide = [
	{name:"Boba Fett", id:"boba", attack:5, counter:21, health:190, image:"assets/images/boba.gif"},
	{name:"Emperor Palpatine", id:"emperor", attack:9, counter:11, health:170, image:"assets/images/emperor.gif"},
	{name:"Darth Vader", id:"vader", attack:7, counter:16, health:150, image:"assets/images/vader.gif"}
]
let playerArray = [];
let player = [];
let enemyArray = [];
let enemy = [];
let playerHealth = 0;
let playerAttack = 0;
let playerBaseAttack = 0;
let enemyHealth = 0;
let enemyCounter = 0;
let playerID = "";
let enemyChosen = false;


$(document).ready(function() {


  // Set The Game Function
	const playGame = () => {
    instructions("Choose Your Side");
    options.map((side) => (
      $("#cardZone").append(`
        <img src="${side.image}" id="${side.id}" alt="${side.name}" class="card-back choose-card">
      `)
    ))
	}

	// Choose a side    
	$(document).on("click", ".choose-card", function() {
		let side = ($(this).attr("id"));
		if (side === "lightSide") {
      playerArray = [...lightSide];
      enemyArray = [...darkSide];
		} else if (side === "darkSide") {
      playerArray = [...darkSide];
      enemyArray = [...lightSide];
    };
		clearTop();
    instructions("Choose Your Fighter");
    playerArray.map((card, i) => (
      $("#cardZone").append(`
        <img src="${card.image}" id=${i} alt="${card.name}" class="card-front fighter-card">
      `)
    ))
	})

	// Choose your fighter
	$(document).on("click", ".fighter-card", function(){
		let fighter = ($(this).attr("id"));
    player = playerArray.splice(fighter,1);
    $("#playerZone").append(`
      <img src="${player.image}" class="card-front player-card">
    `)
    clearTop();
    instructions("Choose Your Opponent");
    chooseEnemy();
		playerHealth = player[0].health;
		playerAttack = player[0].attack;
		playerBaseAttack = player[0].attack;
		playerID = player[0].name;
		$("#playerHP").html("<h3>Player Health: <span id='php'>"+playerHealth+"</span></h3>");
		console.log(playerHealth,playerAttack);
	})

	// Choose your opponent
	$(document).on("click", ".enemyCard", function(){
		if (!enemyChosen) {
			enemyChosen = true;
			var y = ($(this).attr("id"));
			enemy = enemyArray.splice(y,1);
				var enemyCard = $('<img>');
				enemyCard.addClass('card enemyCard');
				enemyCard.attr('src', enemy[0].image);
				$('#enemyZone').append(enemyCard);
			$("#buttonZone").append(
				$('<button/>', {
					text: "Atk", 
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
			$("#enemyHP").html("<h3>Enemy Health: <span id='ehp'>"+enemyHealth+"</span></h3>");
			console.log(enemyHealth,enemyCounter);
		}
	})

	// Set combat Function
	function combat() {
		console.log(playerAttack);
		enemyHealth -= playerAttack;
		$("#ehp").html(enemyHealth);
		playerAttack += playerBaseAttack;
		if (enemyHealth > 0){
			playerHealth -= enemyCounter;
			$("#php").html(playerHealth);
		} else if (enemyHealth <= 0 && enemyArray == 0){
			gameWin();            
		} else {
			$("#instructions, #enemyZone, #ehp, #buttonZone").empty();
			instructions("Select New Enemy");
			enemyChosen = false;
		}
		if (playerHealth <= 0){
			gameOver();
		} else {}
	}

	// Set gameWin Function
	function gameWin (){
		$("#instructions, #enemyZone, #playerHP, #enemyHP, #buttonZone").empty();
		instructions('Congratulations, '+playerID+', you have won!');
		$("#buttonZone").append(
			$('<button/>', {
				text: "Play Again", 
				class: "btn btn-primary btn-lg mt-5",
				id: "resetButton", 
				click: function() {
					reset();}
			})
		);
	}

	// Set gameOver Function
	function gameOver() {
		$("#cardZone, #instructions, #playerHP, #enemyHP, #buttonZone").empty();
		instructions('Sorry, '+playerID+', you have died!');
		$("#buttonZone").append(
			$('<button/>', {
				text: "Play Again", 
				class: "btn btn-primary btn-lg mt-5",
				id: "resetButton", 
				click: function() {
					reset();}
			})
		);
	}

	// Set clearTop Function
	clearTop = () => $("#cardZone, #instructions").empty();

	// Set chooseEnemy Function
	function chooseEnemy(){
		for (var i=0; i<enemyArray.length; i++) {
			var enemyCard = $("<img>");
			enemyCard.addClass("card enemyCard");
			enemyCard.attr("src", enemyArray[i].image);
			enemyCard.attr("id", i);
			$("#cardZone").append(enemyCard);
		}
	}

  // Set instructions Function
  const instructions = (text) => $("#instruction").html(text);

  // Set reset Function
	function reset (){
		playerArray = [];
		player = [];
		enemyArray = [];
		enemy = [];
		playerHealth = 0;
		playerAttack = 0;
		playerBaseAttack = 0;
		enemyHealth = 0;
		enemyCounter = 0;
		playerID = "";
		enemyChosen = false;
		$("#instruction, #cardZone, #playerZone, #buttonZone, #enemyZone, #playerHP, #enemyHP").empty();
		playGame();
	}
	
playGame();

});