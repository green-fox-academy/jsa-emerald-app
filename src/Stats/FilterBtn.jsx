import React from 'react';
import PropTypes from 'prop-types';
import LargeButton from '../Common/LargeBtn';

export default function FilterBtn({ transFilter, setTransFilter, groupTransactions }) {
  const numberOfBtns = 2;
  const btnWidth = `${100 / numberOfBtns - 2}%`;

  const pressHandler = (val) => (transFilter === val ? setTransFilter('all') : setTransFilter(val));
  const sumListByType = (list, type) => {
    if (list) {
      return list
        .map((item) => (item.type === type ? parseFloat(item.amount, 10) : 0))
        .reduce((pre, cur) => (pre + cur));
    }
    return 0;
  };

  const getSumByType = (type) => {
    if (groupTransactions.length === 0) {
      return 0;
    }

    return groupTransactions
      .map((item) => sumListByType(item, type))
      .reduce((pre, cur) => (pre + cur)).toFixed(2);
  };
  return (
    <>
      <LargeButton
        subtitle="Spent"
        title={`-$${getSumByType('Expense')}`}
        note="Expense"
        bgColor="red"
        btnWidth={btnWidth}
        isShadowVisible={transFilter === 'Expense'}
        pressHandler={() => pressHandler('Expense')}
      />
      <LargeButton
        subtitle="Earned"
        title={`+$${getSumByType('Income')}`}
        note="Income"
        bgColor="green"
        btnWidth={btnWidth}
        isShadowVisible={transFilter === 'Income'}
        pressHandler={() => pressHandler('Income')}
      />
    </>
  );
}

FilterBtn.propTypes = {
  transFilter: PropTypes.string.isRequired,
  setTransFilter: PropTypes.func.isRequired,
  groupTransactions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.array])).isRequired,
};
