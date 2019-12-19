function emailValidation(email) {
  // eslint-disable-next-line no-useless-escape
  const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validateEmail.test(String(email).toLowerCase());
}

function passwordValidation(password) {
  const validatePassword = /^[0-9a-zA-Z]{8,16}$/;
  return validatePassword.test(password);
}

export default {
  emailValidation,
  passwordValidation,
};
