/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first  player to reach 100 points on GLOBAL score wins the game

*/

/*CODING CHALLENGE 6*/
// The Original code was copied here with some modifications like: 
// The player losses his entire score if he rolls two six in a roll 
//
var scores,roundScore,activePlayer,Winner,gamePlaying,Dice1;
init();
var lastDice;
//To read element from webpage and store them 
 
var x = document.querySelector("#score-0").textContent;
console.log(x);


//To roll the dice in the game 

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
//1. Random number 
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;

//2.Display the result 
   document.getElementById('Dice1').style.display='block';
   document.getElementById('Dice2').style.display='block';
   document.getElementById('Dice1').src = 'dice-' + dice1 +'.png';
   document.getElementById('Dice2').src = 'dice-' + dice2 +'.png';
//3.Update the round score if the rolled number is NOT equal to 1

if(dice1 !== 1 && dice2 !== 1){
    roundScore += (dice1+dice2);
    document.querySelector('#current-'+activePlayer).textContent=roundScore;
}else{
    nextPlayer();
}

// if(dice===6 && lastDice===6){
// //The player losses his total score 
// scores[activePlayer]=0;
// document.querySelector('#score-'+ activePlayer).textContent= scores[activePlayer];
// nextPlayer();
// }
//  else if(dice !== 1 ){
// //Add score
//         roundScore = dice + roundScore; 
//         document.querySelector('#current-'+ activePlayer).textContent= roundScore;
//     }else{
// //Next Player
//         nextPlayer();
//         }
//         lastDice = dice ;
    }
});

//To implement the hold button
    document.querySelector('.btn-hold').addEventListener('click',function(){
        if(gamePlaying){
            //Add Current score to Global  
    scores[activePlayer]+= roundScore;
 
// Update the UI
        document.querySelector('#score-'+ activePlayer).textContent= scores[activePlayer];
/*Another modification made was to make the user to be able to type in the final value */ 

//This is to read the content that the user put into the field
        var input = document.querySelector('.final-score').value;
        var winningScore;
//To check if the users defined a value, it is also there incase the user does not have a value. The game will just use the default value

//Undefined,0,null,or "" are coerced to false anything else is coerced to true 

//To make winning score user defined (That is for the player to input the winning score.)
if(input){
     winningScore = input;
}else{
    winningScore= 100;
}

//Check if won the game 
        if(scores[activePlayer] >= winningScore){
            var Winner;
            Winner= activePlayer + 1;
            document.querySelector('#name-'+activePlayer).textContent="Winner!!";
            alert("Player -" + Winner + " wins!!");
            document.getElementById('Dice1').style.display='block';
            document.getElementById('Dice2').style.display='block';
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

document.getElementById('Dice1').style.display='block';
document.getElementById('Dice2').style.display='block';

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
document.getElementById('Dice1').style.display='none';
document.getElementById('Dice2').style.display='none';


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



//The player losses his Entire score when he rolls two 6 in a row


