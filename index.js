
var rbtn = ['red','blue','green','yellow'];

let compseq = [];
let humanseq = [];
let level = 0;

var started = false;

$(document).keypress(function(){
    if(!started){
        nextSequence();
        started = true;
    }
});


$(".btn").click(function(event){
    var i = event.target.id;
    humanseq.push(i);
    playSound(i);
    clickBtn(i);
    answer(humanseq.length-1);
  });

function answer(currentLevel){
    if(compseq[currentLevel] === humanseq[currentLevel]){
        if(compseq.length === humanseq.length){
            setTimeout(function () {
                nextSequence();
              }, 700);
            }
    } else {
      $("#level-title").text("Game over,Press any key to restart");
          playSound("wrong");
          $("body").addClass("game-over");

         setTimeout(function () {
             $("body").removeClass("game-over");
           }, 200);

        startOver();
   }
}  


function nextSequence(){
    humanseq=[];
    level++;
    $("#level-title").text("Level " + level);
    var ri = Math.floor(Math.random()*4);
    var rColor = rbtn[ri];
    compseq.push(rColor);
    animationFade(rColor);
    playSound(rColor);  
}

function clickBtn(i){

    $("#" + i).addClass("pressed");

    setTimeout(function(){
        $("#" +i).removeClass("pressed");
    }, 50); 
}


function animationFade(any){

    $("." + any).fadeOut(100).fadeIn(100);
}

function playSound(snd){
    var audio = new Audio("sounds/" + snd + ".mp3");
    audio.play();
}


function startOver() {
        level = 0;
        compseq = [];
        started = false;
}