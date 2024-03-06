let userScore=0;
let compScore=0;
 
const userScorePara=document.querySelector('#your-score');
const compScorePara=document.querySelector("#comp-score");

const boxes=document.querySelectorAll(".box");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    const option=["Rock","Paper","Scissors"];
   const ranIdx=Math.floor( Math.random()*3);
   return option[ranIdx];

}

const drawGame=()=>
{
   // console.log("Draw Game");
    msg.innerText="Draw Game,Try Again";
    msg.style.backgroundColor="black";

}
const showWinner=(userWin,userbox,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    //console.log("YOU WIN!!");
    msg.innerText="You wins!!";
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorePara.innerText=compScore;
   // console.log("YOU LOOSE ,COMP WIN!!");
    msg.innerText="You lose!!";
    msg.style.backgroundColor="red";
}
}



const playGame=(userbox)=>{
    console.log("user choice =",userbox);
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);

    if(compChoice===userbox){
        drawGame();
    }
    else{
        let userWin=true;
        if(userbox==="Rock"){
            userWin=compChoice==="Paper"?false:true;

        }
        else if(userbox==="Paper"){
            userWin=compChoice==="Scissors"?false:true;


        }
        else{
            compChoice==="rock"?false:true;
        }
        showWinner(userWin,userbox,compChoice);
    }
}

boxes.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{
        const userbox=boxes.getAttribute("id");
      //  console.log("choice made",userbox);
        playGame(userbox)
    })
})