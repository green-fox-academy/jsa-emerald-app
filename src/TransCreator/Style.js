import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerSegment: {
    backgroundColor: 'transparent',
  },
  headerIcon: {
    fontSize: 30,
  },
  amountInputOuter: {
    borderBottomColor: 'rgb(221,218,223)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'rgb(221,218,223)',
  },
  amountInputIcon: {
    fontSize: 25,
    marginRight: 15,
  },
  amountInput: {
    textAlign: 'right',
    fontSize: 40,
  },
  footerIOS: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
  },
  footerAndroid: {
    backgroundColor: 'transparent',
  },
  nonActive: {
    color: 'grey',
  },
  dateItem: {
    borderBottomWidth: 0,
    marginTop: 30,
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
    width: 88,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  transTypeButton: {
    borderRadius: 50,
    width: 120,
    marginTop: 0,
    paddingTop: 5,
    marginBottom: 0,
    paddingBottom: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 6,
    marginLeft: 6,
  },
  transTypeTitle: {
    color: 'grey',
    fontSize: 15,
  },
  transTypeTitleActive: {
    color: 'black',
  },
  transTypeButtonActive: {
    borderColor: 'black',
  },
  labelClicked: {
    backgroundColor: 'red',
  },
});
