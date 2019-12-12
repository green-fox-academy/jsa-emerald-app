import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  footerIOS: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
  },
  footerAndroid: {
    backgroundColor: 'transparent',
  },
  dateItem: {
    borderBottomWidth: 0,
    marginTop: 30,
    marginBottom: 20,
  },
  dateItemIcon: {
    fontSize: 25,
    marginRight: 15,
  },
  dateView: {
    borderWidth: 1,
    borderColor: '#5C6BC0',
    borderRadius: 10,
    marginLeft: 20,
  },
  confirmButton: {
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    borderColor: '#5C6BC0',
  },
  confirmButtonText: {
    color: '#5C6BC0',
    fontSize: 15,
  },
  labelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  labelItem: {
    width: 85,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  typeButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  typeButton: {
    borderRadius: 50,
    width: 120,
    marginTop: 15,
    paddingTop: 5,
    marginBottom: 0,
    paddingBottom: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 6,
    marginLeft: 6,
  },
  typeTitle: {
    color: 'grey',
    fontSize: 15,
  },
  typeTitleActive: {
    color: 'black',
  },
  typeButtonActive: {
    borderColor: 'black',
  },
  headerFormat: {
    height: 140,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '400',
  },
});
