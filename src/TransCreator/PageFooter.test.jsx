import React from 'react';
import renderer from 'react-test-renderer';
import PageFooter from './PageFooter';

describe('<PageFooter/>', () => {
  it('render', () => {
    const tree = renderer.create(<PageFooter createHandler={jest.fn()} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
