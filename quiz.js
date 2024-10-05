function checkAnswer() {
    // Function body
  
    //   Identify the Correct Answer:
    let correctAnswer = "4";
  
    //   Retrieve the User’s Answer:
    let userAnswer = document.querySelector('[name="quiz"]:checked').value;
  
    //  Compare the User’s Answer with the Correct Answer:
    let feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  }
  
  //   Add an Event Listener to the Submit Button:
  document
    .getElementById("submit-answer")
    .addEventListener("click", checkAnswer);