import React from 'react';
import renderer from 'react-test-renderer';
import EmptyHistory from './EmptyHistory';

describe('EmptyHistory', () => {
  it('render', () => {
    const tree = renderer.create(<EmptyHistory />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
