let randomNo
let guessCount=1


const submitGuess = document.querySelector('.guessSubmit')
const lastGuesses=document.querySelector('.guesses')
const displayMessage=document.querySelector('.lastResult')
const lh=document.querySelector('.lowOrHi')
const resultParas=document.querySelectorAll('.resultParas p')

// submitGuess.addEventListener('click',()=>{
//     console.log('HI')
// })

const txtbox =document.querySelector('.guessField')
txtbox.focus(); 

// submitGuess.addEventListener('click',()=>{
//     console.log(txtbox.value)
// })
// google se liya hua
// function generateRandom(maxLimit = 100){
//     let rand = Math.random() * maxLimit;
//     // console.log(rand); // say 99.81321410836433
  
//     rand = Math.floor(rand); // 99
  
//     return rand;
//   }
//   console.log(generateRandom())

// simplify kiya hua
//   console.log(Math.floor(Math.random() * 101));

//   ma'am ka way
function randomNumber(){
    return Math.floor(Math.random() * 101)
}
randomNo=randomNumber()
function gameOver()
{
    txtbox.disabled = true;
    submitGuess.disabled = true;

    const resetButton = document.createElement('button')
    resetButton.textContent="Start new Game"
    resetButton.classList.add('reset-button')
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
   
}


function resetGame()
{
    for (para of resultParas)
    {
        para.textContent=''
        para.style.backgroundColor='white'
    }
        txtbox.disabled = false;
        submitGuess.disabled = false;
        
        const resetBtn = document.querySelector('.reset-button')
        document.body.removeChild(resetBtn)
        randomNo=randomNumber()
        console.log(randomNo)
        txtbox.focus(); 
        guessCount=1

}


console.log(randomNo)

submitGuess.addEventListener('click',()=>{
    console.log((txtbox.value))
    inputValue=txtbox.value
    if(guessCount===1)
    {
        lastGuesses.textContent= "Your last Guesses"
    }
    if(guessCount<=10)
    {
        lastGuesses.textContent+=' '+txtbox.value;
    }
    

    if(randomNo == inputValue){
        displayMessage.textContent = "Congratulations"
        displayMessage.style.backgroundColor= "green"
        lh.textContent=""
        gameOver()
    }
    
    if(guessCount == 10)
    {
        displayMessage.textContent = "Game Over"
        displayMessage.style.backgroundColor= "red"
        lh.textContent=""
        gameOver()
    }

    else
    {
        if(inputValue>randomNo)
        {
            lh.textContent="Too high" 
        }
        else if(inputValue<randomNo)
        {
        lh.textContent="Too low"
        }
        
    }
    
    
    // lastGuesses.textContent+=' '+txtbox.value;

       txtbox.value='';
       txtbox.focus(); 
       guessCount+=1
    

})
