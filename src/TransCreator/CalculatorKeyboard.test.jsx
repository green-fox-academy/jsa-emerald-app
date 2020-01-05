import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorKeyboard from './CalculatorKeyboard';

describe('<CalculatorKeyboard />', () => {
  it('render', () => {
    const tree = renderer.create(<CalculatorKeyboard
      calculable
      createHandler={jest.fn()}
      onExpressionChange={jest.fn()}
      transDate={123}
      setTransDate={jest.fn()}
      expStr=""
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
