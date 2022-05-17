/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first  player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,Winner,gamePlaying,Dice1;
init();

//To read element from webpage and store them 
 
var x = document.querySelector("#score-0").textContent;
console.log(x);


//To roll the dice in the game 

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
//1. Random number 
        var dice = Math.floor(Math.random()*6)+1;

//2.Display the result 
    var diceDom=  
    document.querySelector('.dice')
    diceDom.style.display='block';
    diceDom.src = 'dice-' + dice +'.png';
//3.Update the round score if the rolled number is NOT equal to 1
    if(dice !== 1 ){
//Add score
        roundScore = dice + roundScore; 
        document.querySelector('#current-'+ activePlayer).textContent= roundScore;
    }else{
//Next Player
        nextPlayer();
        }
    }
});

//To implement the hold button
    document.querySelector('.btn-hold').addEventListener('click',function(){
        if(gamePlaying){
            //Add Current score to Global  
    scores[activePlayer]+= roundScore;
 

    // Update the UI
        document.querySelector('#score-'+ activePlayer).textContent= scores[activePlayer];
    //Check if won the game 
        if(scores[activePlayer] >= 100){
            var Winner;
            Winner= activePlayer + 1;
            document.querySelector('#name-'+activePlayer).textContent="Winner!!";
            alert("Player -" + Winner + " wins!!");
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
    
        }else{
    
        
    //Next Player
            nextPlayer();
        } 
 }

});

function nextPlayer(){
//Next Player
if (activePlayer === 0){
    activePlayer = 1;
}else{
    activePlayer = 0;
}
roundScore = 0;
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

//What toggle does is to add when it is not there and to remove when it is there

document.querySelector('.dice').style.display='none';

}

//To make the New Game Button work
document.querySelector('.btn-new').addEventListener('click',init);

//To initialize the game with a function

function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
//To Make the dice disappear 
    document.querySelector(".dice").style.display="none"; 

//To change the player's panel back to normal
document.querySelector('#name-0').textContent="Player-1";
document.querySelector('#name-1').textContent="Player-2";


//To set the player's current score to zero

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent="0";

//To change the background back to normal and remove the winner's class
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

/*CODING CHALLENGE 6*/

//The player losses his Entire score when he rolls two 6 in a row

function sixtwice(){
if(dice=6)
{
    dice=Dice1;

var dice12;

dice12=Dice1+dice;

if (dice12===12){
    document.querySelector('#current-'+activePlayer).textContent=0;
}else{
    nextPlayer();
        }
     }
    };
//Use Math function to help JavaScript
//Use Math.random to make the JavaScript provide random number 
//Use Math.floor to eliminate the decimals

//console.log(dice);

// document.querySelector("#current-" + 0).textContent= dice;

// document.querySelector("#current-" + activePlayer).innerHTML= "<em>"+dice+"</em>"
//To change the content of an object on the browser use ".querySelector"  for only text 
// Use ".innerHtml" to change content and HTML tags and language 
//The "getElementById" on works on IDs 
//A state variable tell us the condition of a system