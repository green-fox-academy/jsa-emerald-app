import React from 'react';
import renderer from 'react-test-renderer';
import KeyboardButton from './KeyboardButton';

describe('<KeyboardButton />', () => {
  it('render digit', () => {
    const tree = renderer.create(<KeyboardButton
      btnVal="1"
      pressHandler={jest.fn()}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render Add', () => {
    const tree = renderer.create(<KeyboardButton
      btnVal="Add"
      pressHandler={jest.fn()}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render Remove', () => {
    const tree = renderer.create(<KeyboardButton
      btnVal="Remove"
      pressHandler={jest.fn()}
    />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
