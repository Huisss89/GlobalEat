    // When submit the form will display submited!
    document.getElementById('joinForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Validate the form fields
        var form = event.target;
        if (form.checkValidity()) {
            // Show the alert if all input patterns are correct
            alert('Thank you for joining our GlobalEat family! \nWe will contact you soon!');
            form.reset(); // Optionally, reset the form after submission
        } else {
            // If form is not valid, show an error message (optional)
            alert('Please fill out the form correctly.');
        }
    });
  