const moment = require('moment');

const sortDataByDate = (dataList) => {
  const originalDataList = dataList.slice(0);
  const orderedDataListByDateFromNearToFar = originalDataList.sort((a, b) => (b.date - a.date));
  return orderedDataListByDateFromNearToFar;
};

const sumAmount = (dataList) => {
  const result = dataList.reduce((sum, { amount, type }) => (type === 'Expense' ? sum - parseFloat(amount) : sum + parseFloat(amount)), 0);
  return result > 0 ? `+$${result}` : `-$${0 - result}`;
};

const groupData = (transactions) => {
  const sortedData = transactions.sort((a, b) => (b.date - a.date));
  const convertedSet = sortedData.map((value) => ({
    ...value, amount: value.amount, date: moment.unix(value.date).format('MMMM Do YYYY'), type: value.type,
  }));
  const result = []; let temp = [convertedSet[0]];
  for (let i = 1; i < convertedSet.length; i += 1) {
    if (temp[0].date === convertedSet[i].date) {
      temp.push(convertedSet[i]);
    } else {
      result.push(temp);
      temp = [convertedSet[i]];
    }
  }
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
};

const getDateSet = (current, type) => {
  const result = [current.clone().subtract(1, type), current.clone(), current.clone().add(1, type)];
  return result;
};

const filterData = (dataList, range, view) => {
  let result;
  switch (view) {
    case 'month':
      result = dataList.filter((value) => moment(value[0].date, 'MMMM Do YYYY').format('MMM YYYY') === range.format('MMM YYYY'));
      break;
    case 'year':
      result = dataList.filter((value) => moment(value[0].date, 'MMMM Do YYYY').format('YYYY') === range.format('YYYY'));
      break;
    default:
      break;
  }
  return result;
};

export default {
  sortDataByDate,
  sumAmount,
  groupData,
  getDateSet,
  filterData,
};
