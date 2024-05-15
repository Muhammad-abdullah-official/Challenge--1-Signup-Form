const signUp = document.querySelector('#signup');
//Event listener for signup form
signUp.addEventListener('click', () => {
  const fullName = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const nameRegex = /^[A-Za-z\s'-]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^.{6,}$/;

  if (!fullName.match(nameRegex)) {
    alert('Please enter a valid name.');
    return;
  }

  if (!email.match(emailRegex)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!password.match(passwordRegex)) {
    alert('Password must be at least 6 characters');
    return;
  }

  alert('Account created successfully!');

  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#password').value = '';
});
