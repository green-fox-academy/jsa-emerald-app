import React from 'react';
import * as Font from 'expo-font';
import renderer from 'react-test-renderer';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import TabBarIcon from './TabBarIcon';

describe('<TabBarIcon />', () => {
  beforeEach(() => Font.loadAsync(MaterialIcons.font));
  it('render Stats', () => {
    const tree = renderer.create(<TabBarIcon
      navigation={{ state: { routeName: 'Stats' } }}
      focused
      tintColor="#5C6BC0"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  beforeEach(() => Font.loadAsync(MaterialCommunityIcons.font));
  it('render Create', () => {
    const tree = renderer.create(<TabBarIcon
      navigation={{ state: { routeName: 'Create' } }}
      focused
      tintColor="#5C6BC0"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  beforeEach(() => Font.loadAsync(MaterialIcons.font));
  it('render Me', () => {
    const tree = renderer.create(<TabBarIcon
      navigation={{ state: { routeName: 'Me' } }}
      focused
      tintColor="#5C6BC0"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
