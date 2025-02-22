let gameSeq=[];
let userSeq=[];
let btns=["pink","blue","violet","orange"];
let started=false;
let level=0;
let highScore=[];
let head2=document.querySelector("h2");


document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("game statrted");
        started=true;


        levelUp();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },450);
}

function levelUp(){
    userSeq=[];
    level++;
    head2.innerText=`level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randColor=btns[randomIdx];

    let randbtn=document.querySelector(`.${randColor}`);    
    gameSeq.push(randColor);
    // console.log(randomIdx);
    // console.log(randbtn);
    // console.log(randColor);
    console.log(`Game Seq${gameSeq}`);
    btnFlash(randbtn);

}
function checkAns(idx){
    //console.log("curr level: ",level);

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        highScore.push(level);
        let hgScore=Math.max(highScore);
        head2.innerText=`YOUR SCORE:${level}
        Game Over!Press Any key to Start.
        High score :${hgScore}`;
        document.querySelector("keypress",()=>{
            head2.innerText="Press any key to start";
        })
        reset();

    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(`USER SEQ${userSeq}`);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}