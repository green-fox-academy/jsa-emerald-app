import React from 'react';
import renderer from 'react-test-renderer';
import index from './index';

describe('<index/>', () => {
  it('render', () => {
    const tree = renderer.create(<index navigation={{}} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
