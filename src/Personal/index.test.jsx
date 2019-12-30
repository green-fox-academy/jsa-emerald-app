import React from 'react';
import renderer from 'react-test-renderer';
import Personal from './index';

describe('Personal', () => {
  it('render ', () => {
    const tree = renderer.create(<Personal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
