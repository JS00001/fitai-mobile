import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Root from './src/navigation/Root';
import { defaultTheme } from './src/style';

export default function App() {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Root />
    </NavigationContainer>
  );
}

