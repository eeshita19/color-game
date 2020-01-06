var numsq=6;
var colors=[];//genrandomcolor(numsp)
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
var reset=document.getElementById("reset");
var btns=document.querySelectorAll(".mode");
var pickedcolor;

init();
function init(){

for(var i=0; i<btns.length; i++){
    btns[i].addEventListener("click",function(){
        btns[0].classList.remove("selected");
        btns[1].classList.remove("selected");

        btns[2].classList.remove("selected");
        
        this.classList.add("selected");
       

        if(this.textContent==="EASY"){
            numsq=3;
        }
        else if (this.textContent==="HARD"){
            numsq=6;
        }
        else if(this.textContent==="VERY HARD"){
            numsq=9;
        }
        
        resetfn();
    })
}
for(var i=0 ; i< squares.length ; i++){
    
    squares[i].addEventListener("click",function(){

        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedcolor){
            message.textContent="CORRECT!!";
            changecolor(clickedColor);
            reset.textContent="PLAY AGAIN??";
            h1.style.backgroundColor=clickedColor;
        
        }
        else{
           this.style.backgroundColor="#232323";
           message.textContent="Try Again";
        }
    })
    
}
resetfn();

}

function resetfn(){
    colors=genrandomColors(numsq);
    pickedcolor=pickcolor();
    colorDisplay.textContent=pickedcolor;
    
    reset.textContent="NEW COLORS"
    message.textContent="";
    

    for(var i=0 ; i< squares.length ; i++){
        if(colors[i]){
            
            squares[i].style.display="block";
        squares[i].style.backgroundColor = colors[i];}
        else{
            squares[i].style.display="none";
        }
    }

    h1.style.backgroundColor="steelblue";

}






function changecolor(color){
    for(var i=0 ; i< squares.length ; i++){
        squares[i].style.backgroundColor = color;

    }

}

function pickcolor(){
 var rand= Math.floor(Math.random() * colors.length );
 return colors[rand];
}

function genrandomColors(num){
  var arr=[];

  for(var i=0 ; i<num ;i++){
      arr.push(randomColor());
  }

  return arr;

}

function randomColor(){
   var r=Math.floor(Math.random()*256);
   var g=Math.floor(Math.random()*256);
   var b=Math.floor(Math.random()*256);


return "rgb("+ r + ", "+ g +", "+ b +")" ;
}


reset.addEventListener("click",function(){
    resetfn();
    
})

