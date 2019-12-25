import React from 'react';
import renderer from 'react-test-renderer';
import GradientIcon from './GradientIcon';

describe('<GradientIcon />', () => {
  it('render', () => {
    const tree = renderer.create(<GradientIcon
      name="local-pizza"
      color="#9e87fc"
      iconFamily=""
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
