let userScore=0;
let compScore=0;
// console.log(window)
const choices = document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScorePara=document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
    // console.log('game was draw');
    msg.innerText="game was draw! play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log('you loose.');
        msg.innerText=`You loose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
    // console.log('user choice =',userChoice);
    // Generate computer choice
    const compChoice=genCompChoice();
    // console.log('comp choice=', compChoice);

    if(userChoice===compChoice){
       //draw Game 
       drawGame();
    }
    else{
        let userwin=true;
        if (userChoice=='rock'){
            //scissors,paper
            userwin = compChoice==='paper'? false : true;
        }else if (userChoice==='paper'){
            //rock ,scissors
            userwin = compChoice==='scissors'? false :true;
        }else{
            //rock,paper
            userwin = compChoice==='rock'?false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
