import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Root from './src/navigation/Root';
import Stack from './src/navigation/Stack';
import { defaultTheme } from './src/style';

export default function App() {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack />
    </NavigationContainer>
  );
}

