let randomNumber=(parseInt(Math.random()*100+1));
const submit= document.querySelector('#subt');
const userInput= document.querySelector('#guessField')
const guessSlot= document.querySelector('.guesses')
const Remaining= document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')
const p=document.createElement('p');

let preGuess=[]
let numGuess=1

let playGame=true;

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess= parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess)
{
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }else if (guess<1)
    {
        alert('Please enter a Number more than 1')
    }
    else if (guess>100)
    {
        alert('Please enter a Number less than 100')
    }
    else{
        preGuess.push(guess);
        if (numGuess===11){
            DisplayGuess(guess);
            DisplayMSG(`Game Over \nRandom Number${randomNumber}`)
            endGame();
        }else{
            DisplayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess===randomNumber)
    {
        DisplayMSG(`Congrates !!!\nYou guessed it right`)

    }else if(guess<randomNumber){
        DisplayMSG(`Number is too low`)
    }
    else if(guess>randomNumber){
        DisplayMSG(`Number is too high`)
    }
}
function DisplayGuess(guess)
{
    userInput.value='';
    guessSlot.innerHTML+=`${guess}  `
    numGuess++;
    Remaining.innerHTML=`${11- numGuess}` 

}

function DisplayMSG(msg)
{
    lowOrHi.innerHTML=`<h2>${(msg)}</h2>`
}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    
  randomNumber=(parseInt(Math.random()*100+1));  
  preGuess=[]
  guessSlot.innerHTML=''  
  Remaining.innerHTML=`${11- numGuess}` 
  userInput.removeAttribute('disabled')
   startOver.removeChild(p)  
    playGame=true;

})
}
function endGame(){
 userInput.validateGuess=''
 userInput.setAttribute('disabled','')   
 p.classList.add('button')
 p.innerHTML=`<h2 id="newGame>Start New Game</h2>`
 startOver.appendChild(p)
 playGame=false
 newGame()
}