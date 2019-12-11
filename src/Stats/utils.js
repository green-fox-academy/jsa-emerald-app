const sortDataByDate = (dataList) => {
  const originalDataList = dataList.slice(0);
  const orderedDataListByDateFromNearToFar = originalDataList.sort((a, b) => (b.date - a.date));
  return orderedDataListByDateFromNearToFar;
};

export default {
  sortDataByDate,
};
