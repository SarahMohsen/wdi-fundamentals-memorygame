

var cards = ["queen","queen","king","king"];
var cardsInPlay=[];
// function fipover
function flipCard(cardId)
{
cardsInPlay.push( cards[cardId]);
console.log("User flipped " + cards[cardId]);
}

function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}}
flipCard(0);
flipCard(1);
checkForMatch();


/*var cardOne=cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo=cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
if(cardsInPlay.length===2)
	{if(cardsInPlay[0]===cardsInPlay[2])
     alert("You found a match!");
    else
   { alert("Sorry, try again.");}}*/


