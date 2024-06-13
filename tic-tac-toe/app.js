let boxes = document.querySelectorAll('.box');

let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector('.msg-container');
let msg= document.querySelector("#msg");

let turnO = true; //playerX,playerX

let clickCount=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const restGame = ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log('box is clicked');
        if (turnO){
            box.innerText="O";
            box.style.color='green';
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color='#b0413e';
            turnO=true
        }
        box.disabled=true;
        clickCount+=1;
        if (clickCount===9){
            showDraw();
        }
        else{
            checkWinner();
        }
        
    })
})

const disableBoxes = ()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = ()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner= (winner)=>{
    msg.innerHTML=`congrats ,Winner is ${winner}`;
    // msg.innerText="check";
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const showDraw =()=>{
    msg.innerHTML=`Its a draw play again`;
    msgContainer.classList.remove('hide');
}
const checkWinner= ()=>{
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText)

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                // console.log('Winner',pos1Val);
                showWinner(pos1Val);
            }
        }

    }

}


newGamebtn.addEventListener("click",restGame);
resetbtn.addEventListener("click",restGame);