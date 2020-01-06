import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CalculatorKeyboard from './CalculatorKeyboard';

describe('<CalculatorKeyboard />', () => {
  it('render', () => {
    const tree = renderer.create(<CalculatorKeyboard
      calculable
      createHandler={jest.fn}
      onExpressionChange={jest.fn}
      transDate={123}
      setTransDate={jest.fn}
      expStr=""
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Btn click simulation Success', () => {
    const createHandlerBtnClick = jest.fn((val) => val);
    const onExpressionChangeBtnClick = jest.fn((val) => val);
    const setTransDateBtnClick = jest.fn((val) => val);
    const wrapper = mount(<CalculatorKeyboard
      calculable
      createHandler={createHandlerBtnClick}
      onExpressionChange={onExpressionChangeBtnClick}
      transDate={123}
      setTransDate={setTransDateBtnClick}
      expStr=""
    />);

    wrapper.find('#btn-keyboard-Add #btn-keyboard-add').props().onPress();
    wrapper.find('#btn-keyboard-C #btn-keyboard-digit').props().onPress();
    wrapper.find('#btn-keyboard-Remove #btn-keyboard-remove').props().onPress();
    wrapper.find('#btn-keyboard-1 #btn-keyboard-digit').props().onPress();
    expect(onExpressionChangeBtnClick.mock.calls.length).toEqual(3);
    expect(createHandlerBtnClick.mock.calls.length).toEqual(1);
  });

  it('Btn click simulation Fail', () => {
    const createHandlerBtnClick = jest.fn((val) => val);
    const onExpressionChangeBtnClick = jest.fn((val) => val);
    const setTransDateBtnClick = jest.fn((val) => val);
    const wrapper = mount(<CalculatorKeyboard
      calculable={false}
      createHandler={createHandlerBtnClick}
      onExpressionChange={onExpressionChangeBtnClick}
      transDate={123}
      setTransDate={setTransDateBtnClick}
      expStr=""
    />);
    wrapper.find('#btn-keyboard-Add #btn-keyboard-add').props().onPress();
    wrapper.find('#btn-keyboard-C #btn-keyboard-digit').props().onPress();
    wrapper.find('#btn-keyboard-Remove #btn-keyboard-remove').props().onPress();
    wrapper.find('#btn-keyboard-1 #btn-keyboard-digit').props().onPress();
    expect(onExpressionChangeBtnClick.mock.calls.length).toEqual(0);
    expect(createHandlerBtnClick.mock.calls.length).toEqual(0);
  });
});
