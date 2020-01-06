import { StyleSheet } from 'react-native';

const LoginView = StyleSheet.create({
  registerForm: {
    alignSelf: 'stretch',
  },
  inputText: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 10,
    color: 'black',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 2,
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
  Note: {
    color: 'red',
    width: 'auto',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 60,
    paddingRight: 60,
  },
});

export default LoginView;
