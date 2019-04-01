// Step 1: make sure nothing runs until document is ready
 $(document).ready(function() {


  // Step 2: define variables for score, wins, losses, and random number
      var score=0;
      var win=0;
      var losses=0;
      var randomNumber = Math.floor(Math.random()*101)+19;
      var cry1;
      var cry2;
      var cry3;
      var cry4;
  
  // Step 2a: display wins and losses and total score
  $("#winCount").text(win);
  $("#lossCount").text(losses);
  $("#totalScore").text(score);
     
  // Step 2b: display random number
  $("#randomSpace").text(randomNumber);
      
  
  // Step 2c: function for game reset
  function reset(){
  randomNumber=Math.floor(Math.random()*100)+1;
  $("#randomSpace").text(randomNumber);
  cry1=Math.floor(Math.random()*12+1);
  cry2=Math.floor(Math.random()*12+1);
  cry3=Math.floor(Math.random()*12+1);
  cry4=Math.floor(Math.random()*12+1);
  score=0;
  $("#totalScore").text(score);
  };
   
  // Step 2d: function for displaying wins and losses
  function win(){
    wins++;
    $("#winCount").text(win);
    reset();
  }
  function losses(){
    losses++;
    $("#lossCount").text(losses);
    reset();
  }
      
  
  // Step 3: Assign numbers for each crystal, between 1-12
   var cry1=Math.floor(Math.random()*12)+1;
   console.log(cry1);
   var cry2=Math.floor(Math.random()*12)+1;
   console.log(cry2);
   var cry3=Math.floor(Math.random()*12)+1;
   console.log(cry3);
   var cry4=Math.floor(Math.random()*12)+1;
   console.log(cry4);
  
  // Step 4: as user clicks the crystals, add up the total. If total = randomNumber, win and reset. if over, loss, and reset

   $("#imgOne").on("click",function(){
      score += cry1;
      console.log("total Score ="+ score);
      $("#totalScore").text(score);
      if (score > randomNumber){
        losses++;
        $("#lossCount").text(losses);
        console.log("you lost");
        alert("you lost try again!!");
        reset();
      }
      if (score === randomNumber) {
        win++;
        $("#winCount").text(win);
        console.log("you won");
        alert("You won! Congratulations!");
        reset();
    }

   })
   $("#imgTwo").on("click",function(){
    score += cry2;
    console.log("total Score="+ score);
    $("#totalScore").text(score);
    if (score > randomNumber){
      losses++;
      $("#lossCount").text(losses);
      alert("you lost");
      reset();
    }
    if (score === randomNumber) {
      win++;
      $("#winCount").text(win);
      console.log("you won");
      alert("You won! Congratulations!");
      reset();
  }

 })
 $("#imgThree").on("click",function(){
  score += cry3;
  console.log("total Score"+ score);
  $("#totalScore").text(score);
  if (score > randomNumber){
    losses++;
    $("#lossCount").text(losses);
    alert("you lost");
    reset();
  }
  if (score === randomNumber) {
    win++;
    $("#winCount").text(win);
    console.log("you won");
    alert("You won! Congratulations!");
    reset();
}

})
$("#imgFour").on("click",function(){
  score += cry4;
  console.log("total Score"+ score);
  $("#totalScore").text(score);
  if (score > randomNumber){
    losses++;
    $("#lossCount").text(losses);
    alert("you lost");
    reset();
  }
  if (score === randomNumber) {
    win++;
    $("#winCount").text(win);
    console.log("you won");
    alert("You won! Congratulations!");
    reset();
}

})
});



 