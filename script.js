    const form = document.getElementById('form');
    const errorMessage = document.getElementById('error-message');
	const errorSubject = document.getElementById('error-subject');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
	  const subject = document.getElementById('subject').value.trim();
	  const message = document.getElementById('message').value.trim();

      // Basic validation checks
      if (name === '' || email === '' || subject === '' || message === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
      }
		 
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
      }

      // If everything is valid
      errorMessage.style.color = 'green';
      errorMessage.textContent = 'Form submitted successfully!';
      form.reset();
    });