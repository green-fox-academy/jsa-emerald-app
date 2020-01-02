const moment = require('moment');

const list = [
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

const convertDataGroup = (dataList, dataType) => {
  const labels = [];
  const total = [];
  dataList.map((groupedRecordsByDate) => {
    const filterData = groupedRecordsByDate.filter((item) => item.type === dataType);
    const result = filterData.reduce((sum, { amount }) => {
      const parsedAmount = parseFloat(amount);
      return sum + parsedAmount;
    }, 0);
    if (filterData.length !== 0) {
      const formatDate = moment(groupedRecordsByDate[0].date, 'MMMM Do YYYY').format('D');
      labels.push(formatDate);
      total.push(result);
    }
  });
  return { labels: labels.reverse(), total: total.reverse() };
};


export default {
  convertDataGroup,
};
