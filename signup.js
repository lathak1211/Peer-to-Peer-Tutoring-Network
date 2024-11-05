document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    try {
      const response = await fetch('http://localhost:3000/signup', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          password: password
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Sign up successful!');
        window.location.href = 'login.html'; // Redirect to the login page or dashboard
      } else {
        alert('Sign up failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during sign up.');
    }
  });
  