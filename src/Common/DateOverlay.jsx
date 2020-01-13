import React from 'react';
import { View } from 'react-native';
import { ListItem, Overlay, Button } from 'react-native-elements';
import PropTypes from 'prop-types';

export default function DateOverlay(props) {
  const { isOverlayVisible, onPressClose, onPressBtn } = props;

  return (
    <Overlay height={200} isVisible={isOverlayVisible}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button icon={{ name: 'close' }} type="clear" onPress={() => onPressClose(false)} />
        </View>
        <View style={{ marginTop: 20 }}>
          <ListItem title="Month" topDivider bottomDivider onPress={() => onPressBtn('month')} />
          <ListItem title="Year" bottomDivider onPress={() => onPressBtn('year')} />
        </View>
      </View>
    </Overlay>
  );
}

DateOverlay.propTypes = {
  isOverlayVisible: PropTypes.bool,
  onPressClose: PropTypes.func.isRequired,
  onPressBtn: PropTypes.func.isRequired,
};

DateOverlay.defaultProps = {
  isOverlayVisible: false,
};
