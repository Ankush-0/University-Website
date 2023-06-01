  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;

    // Validate form data
    if (name && email && subject && message) {
      // Display success message
      window.alert('Thank you for contacting us! We will get back to you soon.');
      form.reset();
      window.location.href = form.getAttribute("action"); // Reset the form
    } else {
      // Display error message
      window.alert('Please fill out all required fields.');
    }
  });

