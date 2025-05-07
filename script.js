// Array of words for dynamic changes
const words = ["Developer", "Designer", "Entrepreneur", "Strategist", "Creative Thinker"];
let wordIndex = 0;
const dynamicTextElement = document.querySelector("#dynamicText .dynamic-word");

// Function to change the word in the About Me section
function changeWord() {
  dynamicTextElement.classList.add('fade-out'); // Add fade-out effect

  setTimeout(() => {
    dynamicTextElement.textContent = words[wordIndex];  // Change word
    wordIndex = (wordIndex + 1) % words.length; // Cycle through words
    dynamicTextElement.classList.remove('fade-out'); // Remove fade-out effect
  }, 500); // Wait before changing the word
}

// Change the word every 2 seconds
setInterval(changeWord, 2000);
