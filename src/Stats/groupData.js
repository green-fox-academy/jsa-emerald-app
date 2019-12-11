const moment = require('moment');

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

export default groupData;
