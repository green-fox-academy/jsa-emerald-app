import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateMode } from '../../Common/theme/actionCreator';
import SelectBtn from './SelectBtn';

export default function ThemeSelection() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [mode, setMode] = useState(theme.themeMode);

  const updateTheme = (selectedMode) => {
    dispatch(updateMode(selectedMode));
    setMode(selectedMode);
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <SelectBtn title="Light" clickedMode={mode} onClick={() => updateTheme('Light')} />
      <SelectBtn title="Dark" clickedMode={mode} onClick={() => updateTheme('Dark')} />
      <SelectBtn title="EPAM" clickedMode={mode} onClick={() => updateTheme('EPAM')} />
    </View>
  );
}
