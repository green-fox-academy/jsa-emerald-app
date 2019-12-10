import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inColor: {
    color: 'green',
  },
  outColor: {
    color: 'red',
  },
  inCardBoard: {
    borderWidth: 1.5,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 10,
    borderRightColor: 'green',
    flex: 1,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 15,
  },
  noteText: {
    color: 'grey',
  },
});

export default styles;
