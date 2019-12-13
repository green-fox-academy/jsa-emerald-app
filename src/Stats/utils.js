const moment = require('moment');

const sortDataByDate = (dataList) => {
  const originalDataList = dataList.slice(0);
  const orderedDataListByDateFromNearToFar = originalDataList.sort((a, b) => (b.date - a.date));
  return orderedDataListByDateFromNearToFar;
};

const sumAmount = (dataList) => {
  const result = dataList.map((i) => {
    const amount = parseFloat(i.amount, 10);
    return i.type === 'Expense' ? 0 - amount : amount;
  }).reduce((i, j) => i + j);
  return result > 0 ? `+$${result}` : `-$${0 - result}`;
};

const groupData = (transactions) => {
  const sortedData = transactions.sort((a, b) => (b.date - a.date));
  const convertedSet = sortedData.map((value) => ({ amount: value.amount, date: moment.unix(value.date).format('MMMM Do YYYY'), type: value.type }));
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
  const result = [];
  const prev = current.subtract(1, `${type}`);
  result.push(prev.clone());
  const curr = prev.add(1, `${type}`);
  result.push(curr.clone());
  const next = curr.add(1, `${type}`);
  result.push(next.clone());
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
