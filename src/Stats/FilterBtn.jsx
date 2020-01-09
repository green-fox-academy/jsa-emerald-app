import React from 'react';
import LargeButton from '../Common/LargeBtn';

export default function FilterBtn() {
  const numberOfBtns = 2;
  const btnWidth = `${100 / numberOfBtns - 2}%`;
  return (
    <>
      <LargeButton subtitle="Spent" title="-$400.00" note="Expense" bgColor="red" btnWidth={btnWidth} />
      <LargeButton subtitle="Earned" title="+$680.00" note="Incomes" bgColor="green" btnWidth={btnWidth} />
    </>
  );
}
