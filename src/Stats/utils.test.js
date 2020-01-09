import utils from './utils';

test('sort data by date', () => {
  const dataList = [
    {
      amount: '111.00',
      date: 1577047800,
      type: 'Expense',
    },
    {
      amount: '112.00',
      date: 1577157900,
      type: 'Expense',
    },
  ];
  const result = [
    {
      amount: '112.00',
      date: 1577157900,
      type: 'Expense',
    },
    {
      amount: '111.00',
      date: 1577047800,
      type: 'Expense',
    },
  ];
  expect(utils.sortDataByDate(dataList)).toEqual(result);
});

test('get negative sum according to transaction', () => {
  const data = [
    {
      amount: '22.00',
      type: 'Expense',
    },
    {
      amount: '25.00',
      type: 'Expense',
    },
  ];
  expect(utils.sumAmount(data)).toEqual('-$47');
});

test('get positive sum according to transaction', () => {
  const data = [
    {
      amount: '25.00',
      type: 'Income',
    },
    {
      amount: '25.00',
      type: 'Income',
    },
  ];
  expect(utils.sumAmount(data)).toEqual('+$50');
});

test('group objects by date', () => {
  const data = [
    {
      amount: '111.00',
      date: 1577007800,
      type: 'Expense',
    },
    {
      amount: '112.00',
      date: 1577157900,
      type: 'Expense',
    },
    {
      amount: '113.00',
      date: 1577157800,
      type: 'Expense',
    },
  ];
  const result = [
    [
      {
        amount: '112.00',
        date: 'December 24th 2019',
        type: 'Expense',
      },
      {
        amount: '113.00',
        date: 'December 24th 2019',
        type: 'Expense',
      },
    ],
    [
      {
        amount: '111.00',
        date: 'December 22nd 2019',
        type: 'Expense',
      },
    ],
  ];
  expect(utils.groupTransactionsByDate(data)).toEqual(result);
});

test('test expense result', () => {
  expect(utils.transType(20, 'Expense')).toEqual('-$20');
});

test('test Income result', () => {
  expect(utils.transType(20, 'Income')).toEqual('+$20');
});
