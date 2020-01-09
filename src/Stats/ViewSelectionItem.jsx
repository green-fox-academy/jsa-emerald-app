import React from 'react';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

const ViewSelectionItem = ({ title, pressHandler }) => (
  <ListItem
    id="btn-stats-index-month"
    title={title}
    topDivider
    bottomDivider
    onPress={() => pressHandler(title.toLowerCase())}
  />
);

ViewSelectionItem.propTypes = {
  title: PropTypes.string.isRequired,
  pressHandler: PropTypes.func.isRequired,
};

export default ViewSelectionItem;
