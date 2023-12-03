var container = document.getElementById("container")
function validateForm() {
    // Reset error messages
    clearErrors();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('repassword').value;
    var agree = document.getElementById('remember').checked;

    var errorMessages = [];

    // Validate name
    if (name.trim() === '') {
      errorMessages.push('Name is required');
    }

    // Validate email
    if (!isValidEmail(email)) {
      errorMessages.push('Enter a valid email address');
    }

    // Validate password
    if (password.length < 6) {
      errorMessages.push('Password must be at least 6 characters');
    }

    // Validate confirmPassword
    if (password !== confirmPassword) {
      errorMessages.push('Passwords do not match');
    }

    // Validate agree checkbox
    if (!agree) {
      errorMessages.push('You must agree to the terms and conditions');
    }

    // Display errors or submit form
    if (errorMessages.length > 0) {
      displayErrors(errorMessages);
      return false;
    } else {
      return true;
    }
  }

  function isValidEmail(email) {
    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function displayErrors(messages) {
    var errorContainer = document.getElementById('errorContainer');
    var errorMessagesElement = document.getElementById('errorMessages');
    
    errorMessagesElement.innerHTML = '';

    messages.forEach(function (message) {
      var errorMessageElement = document.createElement('div');
      errorMessageElement.classList.add('error-message');
      errorMessageElement.textContent = message;
      errorMessagesElement.appendChild(errorMessageElement);
    });

    errorContainer.style.display = 'block';
    container.classList.add('blur');
  }

  function closeErrorContainer() {
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.style.display = 'none';
    container.classList.remove('blur');
  }

  function clearErrors() {
    var errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function (element) {
      element.textContent = '';
    });
  }