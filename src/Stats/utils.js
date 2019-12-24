const moment = require('moment');

const sortDataByDate = (dataList) => {
  const originalDataList = dataList.slice(0);
  const orderedDataListByDateFromNearToFar = originalDataList.sort((a, b) => (b.date - a.date));
  return orderedDataListByDateFromNearToFar;
};

const sumAmount = (dataList) => {
  const result = dataList.reduce((sum, { amount, type }) => {
    const parsedAmount = parseFloat(amount);
    return type === 'Expense' ? sum - parsedAmount : sum + parsedAmount;
  }, 0);
  return result > 0 ? `+$${result}` : `-$${0 - result}`;
};

const groupTransactionsByDate = (transactions) => {
  const convertedSet = transactions.sort((a, b) => (b.date - a.date)).map((value) => ({
    ...value,
    amount: value.amount,
    date: moment.unix(value.date).format('MMMM Do YYYY'),
    type: value.type,
  }));

  const result = convertedSet.reduce((groups, transaction) => {
    const myGroup = { ...groups };
    if (Object.keys(groups).includes(transaction.date)) {
      myGroup[transaction.date].push(transaction);
    } else {
      myGroup[transaction.date] = [transaction];
    }
    return myGroup;
  }, {});
  return Object.values(result);
};

const getDateSet = (current, type) => [
  current.clone().subtract(1, type),
  current.clone(),
  current.clone().add(1, type),
];

const filterData = (dataList, range, view) => {
  const monthRange = range.format('MMM YYYY');
  const yearRange = range.format('YYYY');
  let result;
  switch (view) {
    case 'month':
      result = dataList.filter((value) => moment(value[0].date, 'MMMM Do YYYY').format('MMM YYYY') === monthRange);
      break;
    case 'year':
      result = dataList.filter((value) => moment(value[0].date, 'MMMM Do YYYY').format('YYYY') === yearRange);
      break;
    default:
      break;
  }
  return result;
};

const transType = (amount, type) => (type === 'Expense' ? `-$${amount}` : `+$${amount}`);

export default {
  sortDataByDate,
  sumAmount,
  groupTransactionsByDate,
  getDateSet,
  filterData,
  transType,
};
