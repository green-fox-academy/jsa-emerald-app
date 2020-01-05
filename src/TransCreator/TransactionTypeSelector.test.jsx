import React from 'react';
import renderer from 'react-test-renderer';
import TransactionTypeSelector from './TransactionTypeSelector';

describe('<TransactionTypeSelector/>', () => {
  it('render Expense', () => {
    const tree = renderer.create(<TransactionTypeSelector
      transType="Expense"
      setTransType={jest.fn()}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render Income', () => {
    const tree = renderer.create(<TransactionTypeSelector
      transType="Income"
      setTransType={jest.fn()}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
