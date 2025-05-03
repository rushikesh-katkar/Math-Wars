// script.js
// document.getElementById('contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert("Thank you for contacting me!");
//   });
  
  document.getElementById('answer-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  const answer = document.getElementById('user-answer').value.trim();
  const correctAnswers = ['1', 'x=1', 'x = 1', '1,1', 'x=1,1']; // All valid forms

  const messageEl = document.getElementById('result-message');

  if (correctAnswers.includes(answer)) {
    messageEl.textContent = '✅ Correct!';
    messageEl.style.color = 'green';
  } else {
    messageEl.textContent = '❌ Incorrect. Try again!';
    messageEl.style.color = 'red';
  }
});
