import React from 'react';
import renderer from 'react-test-renderer';
import FilterBtn from './FilterBtn';

describe('FilterBtn', () => {
  it('render', () => {
    const tree = renderer.create(<FilterBtn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
