function emailValidation(email) {
  const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validateEmail.test(String(email).toLowerCase());
}

function passwordValidation(password) {
  const validatePassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  return validatePassword.test(password);
}

function validateSignup(username, password, confirmPassword, email) {
  return username !== ''
      && password !== ''
      && email !== ''
      && email !== 'test@gmail.com'
      && password === confirmPassword
      && emailValidation(email)
      && passwordValidation(password);
}

export default {
  emailValidation,
  passwordValidation,
  validateSignup,
};
