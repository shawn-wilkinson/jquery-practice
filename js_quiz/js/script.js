function submitAnswers(){
  var total = 5;
  var score = 0;

  //Get User Input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  //Validation
  for(num = 1; num <= total; num++){
    if(eval('q' + num) == null || eval('q' + num) == ''){
      alert('You missed question ' + num)
      return false;
    }
  }

  //Set Correct Answers
  var answers = ['b','a','d','b','d']

  //Check Answers

  for(num =1; num <= total; num++){
    if(eval('q' + num) == answers[num - 1]){
      score++;
    }
  }


  //Display Results
  var results = document.getElementById('results');
  results.innerHTML = '<h3>You Scored <span>'+score+'</span> out of <span>'+total+'</span></h3>'

  alert('You Scored '+score+' out of '+total+'!')

  return false
}