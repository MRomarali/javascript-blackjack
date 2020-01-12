var playerScore = 0; // declared the variabel that stores the users score
var dealerScore = 0; // declared the variabel that stores the computers score
/*
  * @function a function that generates using Math.floor and random function
  * @param {*} min number to generate which is nr 1
  * @param {*} max number to generate which is nr 11
  */
function randomNum(min, max) {
    randomGen = Math.floor(Math.random() * (11 - 1 + 1) ) + 1
    return randomNum;
};
​
/*
 * @function used to console the users random generated numbers and a console log that stores the score
 * @param {*} numberGen is a parameter which i use for the random number generator 
 */
function playerCard(numberGen){    // here it should get randomGen as a parameter
    playerScore += randomGen;
    console.log("player draws " + randomGen);
    console.log("player score is " + playerScore);
    return playerScore;
}
​
/*
 * @function used to console the computers random generated numbers and a console log that stores the score
 * @param {*} numberGen is a parameter which i use for the random number generator 
 */
function dealerCard(numberGen){  // randomGen as param
    dealerScore += randomGen;
    console.log("dealer draws " + randomGen);
    console.log("dealer score is " + dealerScore);
    return dealerScore;
}
​
/*
 * @function is a func that has if statements in it with the games conditions
 */
function winner(){
    if(playerScore==21 && dealerScore!=21) {
        alert("Player win!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
    }
​
    else if(playerScore>21) {           
        alert("Dealer win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore);
    } 
​
    else if(dealerScore>21){         
        alert("Player win!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
    }
​
    else if(playerScore!=21 && dealerScore==21){         
        alert("Dealer win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore);
    }
}
/*
 * @function play is created just to hold the two other functions
 * and then i call this function to display these functions.
 */
function play(){
playerCard(randomNum());
dealerCard(randomNum());
dealerCard(randomNum());
}
​
​
/*
 * @function made with if statements. These if/ else if statements
 * reacts when the s or d keyboards is clicked.
 * 
 * @param {*} key holds keyboard input that the users
 * press which in this case is 's' and 'd'
 * 
 */
window.addEventListener("keypress",function (evt){
    if (evt.code == "KeyD")//D 
    {
        if (playerScore == 0 && dealerScore == 0){
            console.log("Player draws a new card");
            playerCard(randomNum());
            dealerCard(randomNum());
            dealerCard(randomNum());
        }else{
            playerCard(randomNum());
        }
        winner();
    }
    else if (evt.code == "KeyS")//S
    {
        if (dealerScore < 17) {
            dealerCard(randomNum());
        }
        if (playerScore === dealerScore) {
            alert("It\'s a draw!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
        }else if (playerScore > dealerScore){
​           alert("Player win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore); 
        }else{
​           alert("Dealer win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore);
        }
    }
});