import React from 'react';
import LargeButton from '../Common/LargeBtn';

export default function FilterBtn() {
  return (
    <>
      <LargeButton subtitle="Spent" title="-$400.00" note="Expense" bgColor="red" btnAmount={2} />
      <LargeButton subtitle="Earned" title="+$680.00" note="Incomes" bgColor="green" btnAmount={2} />
    </>
  );
}
