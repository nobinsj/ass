var container = document.getElementById("container")

function validateLogin() {
    clearErrors();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var errorMessages = [];

    if (!isValidEmail(email)) {
      errorMessages.push('Enter a valid email address');
    }

    if (password.length < 6) {
      errorMessages.push('Password must be at least 6 characters');
    }

    if (errorMessages.length > 0) {
      displayErrors(errorMessages);
      return false;
    } else {
      // Simulate login logic
      alert('Login successful!');
      return true;
    }
  }

  function isValidEmail(email) {
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