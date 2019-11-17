//================Generator================================
/**
 * @function random generator
 * @param {*} min minimum number which in this case is 1
 * @param {*} max maximum number which in this case is 11
 */
function randomNum(min, max) {
    return Math.floor(Math.random() * (11 - 1 + 1) ) + 1
};


let player = 0; //player is the user
let dealer = 0; // dealer is the opponent aka computer
let playerScore = 0; // this variabel will store users score
let dealerScore = 0; // this variabel will store computers score

/**
 * @function includes a forloop that goes 3 rounds bacause our draw limits are just three
 * I use a prompt that asks if user wants to draw. if so, the player draws a card and the score is displayed
 * Then i use if statements with all the conditions.
 */
function draw(){
    for (let i = 0; i < 3; i++) {
        prompt("Draw a card");
        player = randomNum();
        console.log("Player drew " + player);
        playerScore += player;
        console.log(playerScore);
        dealer = randomNum();
        console.log("Dealer drew " + dealer);
        dealerScore += dealer;
        console.log(dealerScore);
    }
    if ( dealerScore > 21) {
        alert("Player win!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
    
    } else if (playerScore > 21) {
        alert("Dealer win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore);
    }
    else if (dealerScore == 21) {
        alert("Dealer win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore);
    } 
    else if (playerScore == 21) {
        alert("Player win!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
    }
    else if (playerScore === dealerScore) {
        alert("Oavgjort!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
    }
    else if (playerScore < 21 && dealerScore < 21) {
        if (playerScore > dealerScore) {
            alert("Player win!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
        } 
        else if (dealerScore > playerScore) {
            alert("Dealer win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore);
        } 
    }
};

/**
 * @function includes a forloop that goes 2 rounds bacause the player already used one draw by skippin and letting opponent draw
 * I use a prompt that asks if user wants to draw. if so, the player draws a card and the score is displayed
 * Then i use if statements with all the conditions.
 */
function drawAfterStay(game){
    for (let i = 0; i < 2; i++) {
        prompt("Draw a card");
        player = randomNum();
        console.log("Player drew " + player);
        playerScore += player;
        console.log(playerScore);
        dealer = randomNum();
        console.log("Dealer drew " + dealer);
        dealerScore += dealer;
        console.log(dealerScore);
    }
    if ( dealerScore > 21) {
        alert("Player win!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
    
    } else if (playerScore > 21) {
        alert("Dealer win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore);
    }
    else if (dealerScore == 21) {
        alert("Dealer win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore);
    } 
    else if (playerScore == 21) {
        alert("Player win!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
    }
    else if (playerScore === dealerScore) {
        alert("Oavgjort!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
    }
    else if (playerScore < 21 && dealerScore < 21) {
        if (playerScore > dealerScore) {
            alert("Player win!!!\n Player score " + playerScore + "\n Dealer score " + dealerScore);
        } 
        else if (dealerScore > playerScore) {
            alert("Dealer win!!!\n Dealer score " + dealerScore + "\n player score " + playerScore);
        } 
    }
};

/**
 * @function does let the dealer draw twice because the player skipped 
 * This displayes dealers draw and score
 *  
 * */
function stay(stop){
    let secondDealer = 0;
    dealer = randomNum();
    console.log("Dealer have " + dealer);
    console.log("Dealer have " + dealer);
    dealer+=dealer;
    dealerScore += dealer;
    console.log(dealerScore);
};
    
/**
 * Calling the functions thru an if/ if-else statement, and depending on the users
 * choice the game goes on.
 */

if (prompt("Draw or stay?") == "d") {
 draw();   
}else if (prompt("Draw or stay?") == "s"){
    stay();
    drawAfterStay();
}