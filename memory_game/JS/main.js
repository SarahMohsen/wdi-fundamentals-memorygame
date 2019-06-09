
/*
Author:Sarah Al qahtani
memory card game
main.js
*/

// array for the cards
var cards = [{rank:"queen",suit:"hearts",cardImage:"images/queen-of-hearts.png"},
{rank:"queen",suit:"diamonds",cardImage:"images/queen-of-diamonds.png"},
{rank:"king",suit:"hearts",cardImage:"images/king-of-hearts.png"},
{rank:"king",suit:"diamonds",cardImage:"images/king-of-diamonds.png"}
];

// array to hold the cards are filped
var cardsInPlay=[];

// how may time the piayer won
var score = 0;

// function to flip the card and push it to cardsInPlay
	function flipCard()
	{
		var cardId = this.getAttribute('data-id');
		cardsInPlay.push(cards[cardId].rank);
		//console.log("User flipped " + cards[cardId].rank+ ""+cards[cardId].cardImage);
		this.setAttribute('src',cards[cardId].cardImage);

		//to check if two card are the same
		if(cardsInPlay.length===2)	
		if (cardsInPlay[0] === cardsInPlay[1])
		 {   
		 	 alert("You found a match!"); 
		     //update score
		     score = ++score; 
		 }
		 // if user did not  flip the same cards
		else 
		 {
		  	alert("Sorry, try again.");

		 }
	}

// Reset function
	function resetGame()
	{ 
		document.location.reload();
	}

 
// display user's score  
	function gameScore(){
		alert("Score: " + score);
		 score = 0;
	}

//function to create board that contain four cards for the game
	function createBoard()
	{   
		for (var i = 0; i < cards.length; i++) {
	     var cardElement = document.createElement('img');
	     cardElement.setAttribute('src', "images/back.png");
	     //I add this random function to let the game become more excited 
	     var ran= Math.floor(Math.random() * 4); 
	     cardElement.setAttribute('data-id', ran);
	     document.getElementById('game-board').appendChild(cardElement);
	     cardElement.addEventListener('click',flipCard);
	}
}

//  call
createBoard();







