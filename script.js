// require
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
const result = document.querySelector('.count'); 

// variable
let heads = 0;
let tails = 0;

// toss
flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 10 + 1);
    console.log(i);
    coin.style.animation = "none";

    // head or tail
    if(i % 2 == 0){
        setTimeout(function(){
            coin.style.animation = "spin-heads 5s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 5s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 5000);
    disableButton();
});

// updation
function updateStats(){
    if(heads > 0){
        document.querySelector("#count").textContent = `Head`;
    }else{
        document.querySelector("#count").textContent = `Tail`;
    }
    heads = 0;
    tails = 0;
}

// disabled
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },10000);
}
