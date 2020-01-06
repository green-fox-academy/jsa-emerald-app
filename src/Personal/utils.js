function emailValidation(email) {
  const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validateEmail.test(String(email).toLowerCase());
}

function passwordValidation(password) {
  const validatePassword = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/;
  return validatePassword.test(password);
}

function loginValidation(email, password) {
  return emailValidation(email) && passwordValidation(password);
}

export default {
  emailValidation,
  passwordValidation,
  loginValidation,
};
