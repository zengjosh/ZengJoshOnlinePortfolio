// Get the email element and the copy button (image)
const emailElement = document.getElementById('email');
const copyButton = document.getElementById('copyButton');

// Add a click event listener to the copy button (image)
copyButton.addEventListener('click', () => {
  // Create a temporary input element
  const tempInput = document.createElement('input');
  
  // Set the value of the input element to the email address
  tempInput.value = emailElement.textContent;
  
  // Append the input element to the document
  document.body.appendChild(tempInput);
  
  // Select the text in the input element
  tempInput.select();
  
  // Copy the selected text to the clipboard
  document.execCommand('copy');
  
  // Remove the temporary input element
  document.body.removeChild(tempInput);
  
  // Provide feedback to the user
  // (You can customize this based on the appearance of your image)

});

//carosel
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.custom-carousel-item');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const carouselInner = document.querySelector('.custom-carousel-inner');
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
});
