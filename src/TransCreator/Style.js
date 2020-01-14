import { StyleSheet, Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  footerIOS: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
  },
  footerAndroid: {
    backgroundColor: 'transparent',
  },
  dateSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: DeviceWidth,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
    height: 35,
    alignItems: 'center',
  },
  dateItemIcon: {
    fontSize: 25,
    marginLeft: 15,
    color: 'grey',
  },
  dateView: {
    borderWidth: 1,
    borderColor: '#5C6BC0',
    borderRadius: 10,
    marginLeft: 5,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 2,
    paddingBottom: 2,
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
    marginTop: 15,
  },

  typeButton: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: '#F5F5F5',
    width: 187,
    marginTop: 15,
    paddingTop: 10,
    marginBottom: 0,
    paddingBottom: 10,
    borderWidth: 0,
    shadowColor: 'grey',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  typeTitle: {
    color: 'grey',
    fontSize: 15,
  },
  typeTitleActive: {
    color: 'black',
  },
  typeButtonActive: {
    borderBottomColor: '#FF6F00',
    borderBottomWidth: 2,
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
  headerDigitSection: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  headerDigitResult: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '400',
  },
  headerDigitExp: {
    color: '#EEEEEE',
    fontSize: 17,
    fontWeight: '400',
  },
  keyboardBtn: {
    height: DeviceWidth * 0.15,
    width: DeviceWidth * 0.25,
    borderRadius: 0,
    borderColor: '#f0f0f0',
  },
  keyboardLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  keyboardRowLayout: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
