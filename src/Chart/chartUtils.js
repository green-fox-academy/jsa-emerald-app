const moment = require('moment');

const convertToLineGraphDataset = (dataList, dataType) => {
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
    return null;
  });
  return { labels: labels.reverse(), total: total.reverse() };
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
      result = dataList.filter((value) => moment.unix(value.date).format('YYYY') === yearRange);
      break;
    default:
      break;
  }
  return result;
};

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

export default {
  convertToLineGraphDataset,
  filterDataByPeriod,
  filterData,
};
