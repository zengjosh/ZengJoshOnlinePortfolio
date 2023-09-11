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