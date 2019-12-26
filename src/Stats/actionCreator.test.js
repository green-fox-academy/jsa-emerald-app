import { addNewTransaction } from './actionCreator';

test('test action', () => {
  const result = {
    type: 'ADD_TRANS',
    data: {
      type: 'Expense',
      date: 'December 24th 2019',
      amount: '11.00',
      label: {
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
