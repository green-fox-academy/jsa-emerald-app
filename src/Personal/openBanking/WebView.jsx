import React from 'react';
import { useNavigationParam } from 'react-navigation-hooks';
import { WebView } from 'react-native-webview';

export default () => <WebView source={{ uri: useNavigationParam('url') }} style={{ marginTop: 50 }} />;
