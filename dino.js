var point=0;
let count=0;
const dino = document.getElementById("dino");
const block = document.getElementById("obj");
var game = document.getElementById("gameplay");
document.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        start();
    }
});    

function upscore(point){
    let score = document.getElementById('score');
    score.innerHTML="Score :"+point;
}

function addpnt(){
    point+=1;
    upscore(point);
}

function jump(){
    if (dino.classList!="animate"){
        dino.classList.add("animate");
    }
    setTimeout(function(){
        dino.classList.remove("animate");
    },500);   
}
var pnt;
function startpnt(count){
    if(count===0){
        pnt = setInterval(addpnt,100);
    }else if(count===1){
        clearInterval(pnt);   
    }
}

function start(){
    startpnt(0);
    document.addEventListener("keypress",function(event){
        if(event.code==="Space"){
            jump();
        }        
    });
    const start=document.getElementById('start');
    const dino = document.getElementById("dino");
    const block = document.getElementById("obj");
    start.style.display="none"
    game.style.display="none";
    block.style.display="block";
    block.style.animation="run infinite 2s";
    setInterval(()=>{
        var dinoTop=dino.getBoundingClientRect();
        var objLeft=block.getBoundingClientRect();
        if(objLeft.x>=0){
            if(((objLeft.x)-(dinoTop.x))<=80 && ((objLeft.x)-(dinoTop.x))>=40 && (dinoTop.y)>=200){
                block.style.animation="none";
                block.style.display="none";     
                alert("You have lost ");
                game.style.display='block'; 
                start.style.display="block";
                point=0;
                startpnt(1);
                count=0;
                clearInterval(speed);
            }
        }
    },10);
    let count=0;
    var speed=setInterval(()=>{
        if(count<3){
            block.style.animationDuration="1.8s";
        }else if(count>3 && count <10){
            block.style.animationDuration="1.5s";            
        }else if(count>9){
            block.style.animationDuration="1.3s";
        }else if(count>15){
            block.style.animationDuration="1s";
        }
        count++;
    },6000);
}
    
