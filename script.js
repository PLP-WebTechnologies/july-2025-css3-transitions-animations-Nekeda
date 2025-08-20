/* ---------------------------
   Part 2: Functions & Scope
-----------------------------*/

// Global variable
let globalCount = 0;

// Function with parameter & return value
function addNumbers(a, b) {
  let result = a + b; // Local scope variable
  return result;
}

// Example usage:
console.log("5 + 10 =", addNumbers(5, 10));

/* ---------------------------
   Part 3: DOM + CSS Animations
-----------------------------*/

const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

// Toggle bounce animation when button clicked
animateBtn.addEventListener("click", () => {
  box.classList.toggle("bouncing");
});

/* ---------------------------
   Modal Example
-----------------------------*/
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// Open modal
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

/* ---------------------------
   Notes:
   - addNumbers() shows parameters & return values
   - local vs global scope demonstrated with 'result' (local) vs globalCount
   - JS triggers CSS animations by toggling classes
-----------------------------*/
