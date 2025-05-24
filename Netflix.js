document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");
  
    questions.forEach(question => {
      question.addEventListener("click", () => {
        const clickedAnswer = question.nextElementSibling;
        const clickedIcon = question.querySelector(".plus-icon");
        const isOpen = clickedAnswer.classList.contains("show");
  
        // Close all answers and reset icons
        document.querySelectorAll(".faq-answer").forEach(answer => {
          answer.classList.remove("show");
        });
        document.querySelectorAll(".plus-icon").forEach(icon => {
          icon.classList.remove("rotate");
        });
  
        // If clicked answer was closed, open it and rotate icon
        if (!isOpen) {
          clickedAnswer.classList.add("show");
          clickedIcon.classList.add("rotate");
        }
        // If clicked answer was open, everything stays closed and icon unrotated
      });
    });
});