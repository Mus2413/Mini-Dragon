score=0;
cross =true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function(e){
    //.log("Key code is ", e.keyCode);
    if(e.keyCode == 38)
    {
        const dino=document.querySelector(".dino");
         dino.classList.add('animateDino');
         setTimeout(()=>{
            dino.classList.remove('animateDino');
         }, 700);
         
    }
    else if(e.keyCode == 39)
    {
        const dino=document.querySelector(".dino");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+ 112 +"px";
        
         
    }
    else if(e.keyCode == 37)
    {
        const dino=document.querySelector(".dino");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX - 112 +"px";
        
         
    }

}
setInterval(() => {
    dino =document.querySelector(".dino");
    gameOver=document.querySelector(".gameOver");
    obstacle=document.querySelector(".obstacle");
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    //console.log(offsetx,offsety);
    if(offsetx< 73 && offsety<52)
    {
        gameOver.innerHTML="Game Over 😢!!! Reload to Start..."
        obstacle.classList.remove('obstacleAni');
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dx=52;
        dino.style.left=dx +"px";
        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },1000);
        //dino.classList.remove('animateDino');
    }
    else if(offsetx<145 && cross)
    {
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000
        )
        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur =aniDur;
            if(aniDur>=3)
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            //console.log('New animation duration: ', newDur)
        },500)
      
    }
}, 10);


function updateScore(score)
{
    scorecontainer= document.querySelector(".scorecontainer");
    scorecontainer.innerHTML= "Your Score : " + score;
}