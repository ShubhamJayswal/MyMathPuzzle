var playing= false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick=
function()
{

  if(playing== true)/*if we playing before*/
  {
   location.reload();
  }
  else{ //if we were not playing i.e., we just started the game.
    playing=true; // changed to playing mode.
    //set score to 0

    score=0;
    document.getElementById("scorevalue").innerHTML=score;
    // show the countdown box
    show("timeremaining");
    timeremaining=60;

    hide("gameover");
    document.getElementById("startreset").innerHTML="Reset Game";
       // start countdown
       startCountDown();

       // generate new Q/A
      generateQA()
  }
}

//clicking on an answer block
for(i=1;i<5;i++){


  document.getElementById("box"+i).onclick=function(){
    if(playing=true)
    {

      if(this.innerHTML==correctAnswer){
        score++;
        document.getElementById("scorevalue").innerHTML=score;
      //hide wrong box

        hide("wrong");
        show("correct");
        setTimeout(function(){
          hide("correct");
         },1000);

        generateQA();
       }
       else{

           hide("correct");
           show("wrong");
           setTimeout(function(){
             hide("wrong");
           },1000);

       }
    }
  }
  }




//start counter
function startCountDown(){
          action= setInterval(function(){
          timeremaining-=1;
          document.getElementById("timeremaining").innerHTML="Time remaining: "+timeremaining+" sec";
          if(timeremaining==0)// game over
          {
          stopCountdown(); //stop the countdown
          show("gameover");
          document.getElementById("gameover").innerHTML="<p>Game over!</p> <p>Your Score is "+score+". </p>";
          hide("timeremaining");
          hide("correct");
          hide("wrong");
          playing=false;
          document.getElementById("startreset").innerHTML="Start Game";
          }
       }, 1000);
}

// stop counter
function stopCountdown(){
  clearInterval(action);
}

//hides an element
function hide(Id){
         document.getElementById(Id).style.display="none";
}
// shows an element
function show(Id){
     document.getElementById(Id).style.display="block";
}


function generateQA(){
   var x=1+Math.round(Math.random()*9);
   var y=1+Math.round(Math.random()*9);
   correctAnswer= x*y;

   document.getElementById("question").innerHTML=x + "*" + y;
   var correctPosition=1+Math.round(3*Math.random());
   document.getElementById("box"+correctPosition).innerHTML=correctAnswer;// fill one box with the correct answer.

 //fill other with wrong answers
  var answers =[correctAnswer];

   for(i=1;i<5;i++){
     if(i!=correctPosition){
       var wrongAnswer;
       do
       {
       wrongAnswer= (1+Math.round(Math.random()*9))*(1+Math.round(Math.random()*9));
     }while(answers.indexOf(wrongAnswer)>-1);

       document.getElementById("box"+i).innerHTML=wrongAnswer;
          answers.push(wrongAnswer);
     }

   }
 }
