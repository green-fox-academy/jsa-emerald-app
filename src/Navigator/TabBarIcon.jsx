import React from 'react';
import PropTypes from 'prop-types';
import { NavigationScreenPropType } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import AddButton from './AddButton';

const TabBarIcon = ({ navigation, focused, tintColor }) => {
  const { routeName } = navigation.state;
  let iconName; let IconComponent;
  switch (routeName) {
    case 'Stats':
      IconComponent = MaterialIcons;
      iconName = `pie-chart${focused ? '' : '-outlined'}`;
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    case 'Create':
      return <AddButton />;
    case 'Me':
      IconComponent = MaterialIcons;
      iconName = `person${focused ? '' : '-outline'}`;
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    default:
      break;
  }
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
