import React from 'react';
import renderer from 'react-test-renderer';

import TabBarIcon from '../TabBarIcon';

describe('<TabBarIcon />', () => {
  it('render', () => {
    const tree = renderer.create(<TabBarIcon
      navigation={{ state: { routeName: 'Stats' } }}
      focused
      tintColor="#5C6BC0"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
