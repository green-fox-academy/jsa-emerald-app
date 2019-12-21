import React from 'react';
import PropTypes from 'prop-types';
import LargeButton from '../Common/LargeBtn';

export default function FilterBtn({
  currentFilter, onFilterChange, totalExpense, totalIncome,
}) {
  const numberOfBtns = 2;
  const btnWidth = `${100 / numberOfBtns - 2}%`;

  return (
    <>
      <LargeButton
        subtitle="Spent"
        title={`-$${totalExpense}`}
        note="Expense"
        bgColor="red"
        btnWidth={btnWidth}
        isShadowVisible={currentFilter === 'Expense'}
        pressHandler={() => onFilterChange('Expense')}
      />
      <LargeButton
        subtitle="Earned"
        title={`+$${totalIncome}`}
        note="Income"
        bgColor="green"
        btnWidth={btnWidth}
        isShadowVisible={currentFilter === 'Income'}
        pressHandler={() => onFilterChange('Income')}
      />
    </>
  );
}

FilterBtn.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  totalExpense: PropTypes.number.isRequired,
  totalIncome: PropTypes.number.isRequired,
};
