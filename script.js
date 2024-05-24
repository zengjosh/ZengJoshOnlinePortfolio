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
  showSlide(currentIndex);
});

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.custom-carousel-item');
  const totalSlides = slides.length;

  const carouselInner = document.querySelector('.custom-carousel-inner');

  if (index >= totalSlides - 1) {
    currentIndex = 0;
    carouselInner.style.transition = 'none';
    carouselInner.style.transform = `translateX(0%)`;
    setTimeout(() => {
      carouselInner.style.transition = 'transform 0.5s ease-in-out';
      showSlide(currentIndex + 1);
    }, 50);
  } else if (index < 0) {
    currentIndex = totalSlides - 2;
    carouselInner.style.transition = 'none';
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    setTimeout(() => {
      carouselInner.style.transition = 'transform 0.5s ease-in-out';
      showSlide(currentIndex);
    }, 50);
  } else {
    currentIndex = index;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Add event listeners for carousel controls
document.querySelector('.custom-carousel-control.next').addEventListener('click', nextSlide);
document.querySelector('.custom-carousel-control.prev').addEventListener('click', prevSlide);
