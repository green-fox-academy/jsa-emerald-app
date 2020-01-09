import React from 'react';
import * as Font from 'expo-font';
import renderer from 'react-test-renderer';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import TabBarIcon from './TabBarIcon';

beforeAll(async () => {
  await Font.loadAsync(MaterialIcons.font);
  await Font.loadAsync(MaterialCommunityIcons.font);
  await Font.loadAsync(MaterialIcons.font);
});

describe('<TabBarIcon />', () => {
  it('render Stats', () => {
    const tree = renderer.create(<TabBarIcon
      navigation={{ state: { routeName: 'Stats' } }}
      focused
      tintColor="#5C6BC0"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render Create', () => {
    const tree = renderer.create(<TabBarIcon
      navigation={{ state: { routeName: 'Create' } }}
      focused
      tintColor="#5C6BC0"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render Me', () => {
    const tree = renderer.create(<TabBarIcon
      navigation={{ state: { routeName: 'Me' } }}
      focused
      tintColor="#5C6BC0"
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
