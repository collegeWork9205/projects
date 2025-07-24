let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2")

let btns=["color1","color2","color3","color4"]

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
     started=true;

     levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx]
    let randbtn=document.querySelector(`.${randcolor}`)
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);

}
function btnpress(){
    let btn=this;
    userFlash(btn);

   let userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }

function checkAns(btn){
   if(gameSeq[btn]===userSeq[btn]){
    if(userSeq.length===gameSeq.length){
        setTimeout(levelUp,1000);
        if(level===100){
            h2.innerText=`this is the last level and your higher score is ${level}`;
            console.log("game started");
            reset();
        }
    }
   }else{
    h2.innerHTML=`Game over! your score was <b> ${level} <b> <br> Press any key to start`;

    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
    },250)
    reset();
   }
}
function  reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;

}