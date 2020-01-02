import React from 'react';
import PropTypes from 'prop-types';
import { NavigationScreenPropType } from 'react-navigation';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const TabBarIcon = ({ navigation, focused, tintColor }) => {
  const { routeName } = navigation.state;
  let iconName; let IconComponent;
  switch (routeName) {
    case 'Stats':
      IconComponent = MaterialCommunityIcons;
      iconName = 'format-list-bulleted';
      break;
    case 'Trans':
      IconComponent = MaterialIcons;
      iconName = `pie-chart${focused ? '' : '-outlined'}`;
      break;
    case 'Create':
      IconComponent = MaterialCommunityIcons;
      iconName = `pencil-circle${focused ? '' : '-outline'}`;
      break;
    case 'Me':
      IconComponent = MaterialIcons;
      iconName = `person${focused ? '' : '-outline'}`;
      break;
    default:
      break;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

TabBarIcon.propTypes = {
  focused: PropTypes.bool,
  tintColor: PropTypes.string,
  navigation: PropTypes.shape(NavigationScreenPropType),
};

TabBarIcon.defaultProps = {
  focused: '',
  tintColor: '',
  navigation: {},
};

export default TabBarIcon;
