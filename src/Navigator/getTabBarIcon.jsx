import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName; let IconComponent;
  switch (routeName) {
    case 'Stats':
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

export default getTabBarIcon;
