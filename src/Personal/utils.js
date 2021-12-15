function validateEmail(email) {
  const validateEmailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validateEmailRule.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const validatePasswordRule = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/;
  return validatePasswordRule.test(password);
}

function validateSignup(username, password, confirmPassword, email) {
  return username !== ''
      && password === confirmPassword
      && validateEmail(email)
      && validatePassword(password);
}

function validateLogin(email, password) {
  return validateEmail(email) && validatePassword(password);
}

export default {
  validateEmail,
  validatePassword,
  validateSignup,
  validateLogin,
};
