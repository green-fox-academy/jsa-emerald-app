import { StyleSheet } from 'react-native';

const commonHeader = {
  flexDirection: 'row',
  alignItems: 'flex-end',
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20,
};

const styles = StyleSheet.create({
  deviceHead: {
    height: 120,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  deviceBody: {
    flexDirection: 'column',
    backgroundColor: '#f3f5fa',
    paddingLeft: 20,
    paddingRight: 20,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: 'grey',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 2,
    padding: 10,
    marginTop: 20,
  },

  mainHeader: {
    ...commonHeader,
    height: 100,
    justifyContent: 'space-between',
  },

  headerFormat: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },

  dateNormal: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },

  dateHighlight: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#30d29d',
    justifyContent: 'center',
  },

  secondaryHeading: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 10,
  },

  cardAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardHeader: {
    color: '#777777',
    fontSize: 18,
    margin: 10,
  },

  redLargeBtn: {
    marginTop: 20,
    shadowColor: '#f38aa9',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.70,
    shadowRadius: 4.65,
    elevation: 8,
  },

  greenLargeBtn: {
    marginTop: 20,
    shadowColor: '#70ea93',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.70,
    shadowRadius: 4.65,
    elevation: 8,
  },

  grayBtnShadow: {
    shadowColor: '#cccccc',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.70,
    shadowRadius: 4.65,
    elevation: 8,
  },

  overlayBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },

  overlayText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },

  largeBtnHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 5,
    marginBottom: 5,
  },

  largeBtnFont: {
    color: 'white',
    fontSize: 15,
    fontWeight: '300',
  },

  labelHeader: {
    height: 140,
    justifyContent: 'space-between',
  },

  labelHeaderFont: {
    fontSize: 20,
    fontWeight: '400',
  },

  headerFont: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

});

export default styles;
