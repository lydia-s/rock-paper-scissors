let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function win(user, computer){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)} . You win!`;

}
function lose(user, computer){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)} . You lose.`;
}
function draw(user, computer){
	result_p.innerHTML = `You both chose ${convertToWord(user)} . You draw.`;
}
function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";

}

function game(userChoice){
	const computerChoice = getCompuerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice)
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice)			
			break;

	}
}
function getCompuerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}
console.log(getCompuerChoice());

function main(){

	rock_div.addEventListener('click', function(){
		game("r");
	})
	paper_div.addEventListener('click', function(){
		game("p");
	})
	scissors_div.addEventListener('click', function(){
		game("s");
	})
}
main();