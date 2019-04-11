 
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//CREATING A VARIABLE FOR THE GAME
var scores, roundscore, activeplayer, gameplaying ;

init ();



document.querySelector(".btn-roll").addEventListener("click", function (){ 
//TO GENERATE RANDOM NUMBER 
if (gameplaying){
    var dice= Math.floor(Math.random()*6)+1; 
// To display the result
var j = document.querySelector(".dice"); 
j.style.display= "block"; 
j.src = "dice-" + dice + ".png";
if (dice>1) {
    //Add score
    roundscore += dice;
    document.querySelector("#current-"+ activeplayer).textContent=roundscore;
   
} else {
    // Next Player
    nextplayer();
    
}
}

});

    document.querySelector(".btn-hold").addEventListener("click", function () {
        if (gameplaying) {
             //adding the current score to the global score
        scores[activeplayer] +=roundscore;
        //updating the ui
        document.querySelector("#score-"+ activeplayer).textContent= scores[activeplayer];
        //checking who won the game
        if (scores[activeplayer]>=20) {
            document.querySelector("#name-" + activeplayer).textContent="WINNER!";
            // To hide the active player and display the winner
       document.querySelector(".dice").style.display="none";
            document.querySelector(".player-" + activeplayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activeplayer + "-panel").classList.remove("active");
        gameplaying= false;
        }else{
          
            nextplayer();    
        }
       
        }
    });
          
        
      
        //To hide the activeplayer or display.winner
    function nextplayer () {
    activeplayer===0 ? activeplayer=1 : activeplayer= 0;
    roundscore= 0;
    // Starting at 0
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";
    // knowing the active player
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    //removing the dice if next players turn
    document.querySelector(".dice").style.display= "none";
}
//CREATING AN EVENT LISTENER FOR BUTTON NEW
document.querySelector(".btn-new").addEventListener("click", init);
 // CREATING AN INITIALIZATION FUNCTION
function init (){
    // setting back the player's score, current and round score back to 0
scores = [0,0]  
  activeplayer = 0;
  roundscore = 0;
  gameplaying= true;
document.querySelector(".dice").style.display="none"; 
document.getElementById ("score-0").textContent= "0";
document.getElementById ("score-1").textContent= "0";
document.getElementById ("current-0").textContent= "0";
document.getElementById ("current-1").textContent= "0";
document.getElementById("name-0").textContent="player 1";  
document.getElementById("name-1").textContent="player 2";  
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
}


   
