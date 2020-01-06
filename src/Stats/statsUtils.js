const moment = require('moment');

const list = [
  [
    {
      amount: '123',
      date: 'January 5th 2020',
      label: {
        color: '#e9b69a',
        icon: 'local-pizza',
        iconFamily: '',
        name: 'Food & Drink',
      },
      type: 'Expense',
    },
    {
      amount: '223',
      date: 'January 5th 2020',
      label: {
        color: '#e9b69a',
        icon: 'local-pizza',
        iconFamily: '',
        name: 'Food & Drink',
      },
      type: 'Expense',
    },
  ],
  [
    {
      amount: '111',
      date: 'January 2nd 2020',
      label: {
        color: '#aa78db',
        icon: 'shoppingcart',
        iconFamily: 'antdesign',
        name: 'Shopping',
      },
      type: 'Expense',
    },
  ],
];

const convertToLineGraphDataset = (dataList, dataType) => {
  const resultSet = [];
  dataList.map((groupedRecordsByDate) => {
    const filterData = groupedRecordsByDate.filter((item) => item.type === dataType);
    const result = filterData.reduce((sum, { amount }) => {
      const parsedAmount = parseFloat(amount);
      return sum + parsedAmount;
    }, 0);
    if (filterData.length !== 0) {
      const formatDate = moment(groupedRecordsByDate[0].date, 'MMMM Do YYYY').format('D');
      resultSet.push({ x: formatDate, y: result });
    }
    return null;
  });
  return resultSet.reverse();
};

const convertToDatasetByCategory = (dataList, dataType) => {
  const filterData = dataList.filter((item) => item.type === dataType);
  if (filterData.length !== 0) {
    const dataSet = [];
    const colorSet = [];
    filterData.forEach((item) => {
      const index = dataSet.findIndex((value) => value.x === item.label.name);
      if (index === -1) {
        dataSet.push({ x: item.label.name, y: item.amount });
        colorSet.push(item.label.color);
      } else {
        const newValue = parseFloat(dataSet[index].y) + parseFloat(item.amount);
        dataSet[index].y = newValue;
      }
    });
    return { dataSet, colorSet };
  }
};

const filterDataByPeriod = (dataList, range, view) => {
  const monthRange = range.format('MMM YYYY');
  const yearRange = range.format('YYYY');
  let result;
  switch (view) {
    case 'month':
      result = dataList.filter((value) => moment.unix(value.date).format('MMM YYYY') === monthRange);
      break;
    case 'year':
      result = dataList.filter((value) => moment(value.date).format('YYYY') === yearRange);
      break;
    default:
      break;
  }
  return result;
};

export default {
  convertToLineGraphDataset,
  convertToDatasetByCategory,
  filterDataByPeriod,
};
