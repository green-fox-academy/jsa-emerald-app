import { StyleSheet } from 'react-native';

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
    backgroundColor: '#f0f0f0',
    paddingLeft: 20,
    paddingRight: 20,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 3,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 7,
    padding: 10,
    marginTop: 20,
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

  headerFormat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },

});

export default styles;
