import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import KeyboardButton from './KeyboardButton';

describe('<KeyboardButton />', () => {
  it('render digit', () => {
    const tree = renderer.create(<KeyboardButton
      btnVal="1"
      pressHandler={jest.fn}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render Add', () => {
    const tree = renderer.create(<KeyboardButton
      btnVal="Add"
      pressHandler={jest.fn}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render Remove', () => {
    const tree = renderer.create(<KeyboardButton
      btnVal="Remove"
      pressHandler={jest.fn}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('simulate digit click', () => {
    const onButtonClick = jest.fn((val) => val);
    const wrapper = shallow(<KeyboardButton
      btnVal="1"
      pressHandler={onButtonClick}
    />);
    wrapper.find('#btn-keyboard-digit').simulate('press');
    expect(onButtonClick).toHaveBeenCalledWith('1');
  });

  it('simulate Add click', () => {
    const onButtonClick = jest.fn((val) => val);
    const wrapper = shallow(<KeyboardButton
      btnVal="Add"
      pressHandler={onButtonClick}
    />);
    wrapper.find('#btn-keyboard-add').simulate('press');
    expect(onButtonClick).toHaveBeenCalledWith('Add');
  });

  it('simulate Remove click', () => {
    const onButtonClick = jest.fn((val) => val);
    const wrapper = shallow(<KeyboardButton
      btnVal="Remove"
      pressHandler={onButtonClick}
    />);
    wrapper.find('#btn-keyboard-remove').simulate('press');
    expect(onButtonClick).toHaveBeenCalledWith('Remove');
  });
});
