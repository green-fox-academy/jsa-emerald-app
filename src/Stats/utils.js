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

export default {
  sortDataByDate,
  sumAmount,
};
