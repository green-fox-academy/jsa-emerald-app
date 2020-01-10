import { StyleSheet } from 'react-native';

const btnShadow = {
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.70,
  shadowRadius: 4.65,
  elevation: 8,
};

const LoginView = StyleSheet.create({
  registerForm: {
    alignContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    paddingTop: 40,
    marginBottom: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  heading: {
    color: 'gray',
  },

  inputIcon: {
    marginLeft: 0,
    marginRight: 5,
  },
  inputSection: {
    marginBottom: 20,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  note: {
    color: 'red',
    width: 'auto',
    marginLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 60,
    paddingRight: 60,
  },

  errorBox: {
    backgroundColor: '#f3dee0',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },

  errorText: {
    color: '#eb3d3d',
    textAlign: 'center',
  },

  btnShadow: {
    shadowColor: '#70ea93',
    ...btnShadow,
  },

  disabledBtnShadow: {
    shadowColor: '#ababab',
    ...btnShadow,
  },
});

export default LoginView;
