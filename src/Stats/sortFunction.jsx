const sortDataByDate = (data) => {
  const byDate = data.slice(0);
  byDate.sort((a, b) => (b.date - a.date));
  return byDate;
};

export default sortDataByDate;
