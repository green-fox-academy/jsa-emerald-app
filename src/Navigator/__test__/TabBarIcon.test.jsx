import React from 'react';
import * as Font from 'expo-font';
import renderer from 'react-test-renderer';
import { MaterialIcons } from '@expo/vector-icons';

import TabBarIcon from '../TabBarIcon';

beforeAll(() => Font.loadAsync(MaterialIcons.font));

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
