function validateLogin(event) {
      event.preventDefault();

      const email = document.querySelector('.email-input').value.trim();
      const password = document.querySelector('.password-input').value;

      if (email === 'appclick@gmail.com' && password === '1234AppClick') {
        alert('✅ Login successful!');
      } else {
        alert('❌ Invalid email or password.');
      }
    }