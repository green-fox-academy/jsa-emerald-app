import { addNewTransaction, restoreTransactions } from './actionCreator';

test('test action', () => {
  const result = {
    type: 'ADD_TRANS',
    data: {
      type: 'Expense',
      date: 'December 24th 2019',
      amount: '11.00',
      labelName: {
        color: '#aa78db',
        icon: 'shoppingcart',
        iconFamily: 'antdesign',
        name: 'Shopping',
      },
    },
  };
  expect(addNewTransaction('Expense', 'December 24th 2019', '11.00', {
    color: '#aa78db',
    icon: 'shoppingcart',
    iconFamily: 'antdesign',
    name: 'Shopping',
  })).toEqual(result);
});

test('test restoreTransactions', () => {
  const dataSet = [{
    amount: '2255.00',
    date: 1578537684,
    labelName: {
      color: '#1cd09d',
      icon: 'attach-money',
      iconFamily: '',
      name: 'Bills & Fees',
    },
    type: 'Expense',
  }];
  const result = {
    type: 'RESTORE_TRANS',
    dataSet,
  };
  expect(restoreTransactions(dataSet)).toEqual(result);
});
