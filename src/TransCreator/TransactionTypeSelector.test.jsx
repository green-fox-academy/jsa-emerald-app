import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TransactionTypeSelector from './TransactionTypeSelector';

describe('<TransactionTypeSelector/>', () => {
  it('render Expense', () => {
    const tree = renderer.create(<TransactionTypeSelector
      transType="Expense"
      setTransType={jest.fn}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render Income', () => {
    const tree = renderer.create(<TransactionTypeSelector
      transType="Income"
      setTransType={jest.fn}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('simulates click Expense', () => {
    const onButtonClick = jest.fn((val) => val);
    const wrapper = shallow(<TransactionTypeSelector
      transType="Expense"
      setTransType={onButtonClick}
    />);
    wrapper.find('#btn-trans-expense').simulate('press');
    expect(onButtonClick).toHaveBeenCalledWith('Expense');
  });

  it('simulates click Income', () => {
    const onButtonClick = jest.fn((val) => val);
    const wrapper = shallow(<TransactionTypeSelector
      transType="Expense"
      setTransType={onButtonClick}
    />);
    wrapper.find('#btn-trans-income').simulate('press');
    expect(onButtonClick).toHaveBeenCalledWith('Income');
  });
});
