let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "blue", "red", "green"];

let started = false;
let level = 0;
let gameOver = false;
let h2 = document.querySelector("h2");
document.addEventListener("mousedown", function (){
    if (started == false) {
        started = true;
        levelup(0);
    }else if(gameOver){
        setTimeout(()=> {
            window.location.reload();
        },1000); ;
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
            btn.classList.remove("flash");
        }, 250);
    }


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
            btn.classList.remove("userflash");
        }, 250);
    }


function levelup(onStart=0) {
    if(onStart == 0){
    }else {
        level++;
    }
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    gameFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        levelup('continue');
        if (userSeq.length == gameSeq.length){
            // setTimeout(()=>levelup('continue'), 1000);
        }

    } else {
        h2.innerHTML = `<P> Game Over!Your score was <b>${level}</b> <br> Press any key to restart</P>`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
   
    
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
   
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    // started = false;
    gameOver=true;
    document.body.classList.add("gameover");
    setTimeout(()=> {
        document.body.classList.remove("gameover");
    }, 500);

} 